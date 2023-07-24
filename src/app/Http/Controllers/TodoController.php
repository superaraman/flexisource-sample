<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Validation\Rule;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    private const TODO_STATUS = 'TODO';
    private const DONE_STATUS = 'DONE';


    public function index(Request $request)
    {
        try {
            $oTodos = Todo::where('status', self::TODO_STATUS)->get();
            return response()->json($oTodos);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }

    }

    public function show(Request $request, $mTodoId)
    {
        try {
            $oTodo = Todo::where('id', $mTodoId)
                ->where('status', self::TODO_STATUS)
                ->first();
            return response()->json($oTodo);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }

    public function store(Request $request)
    {
        try {
            $aData = $request->validate([
                'id' => [
                    'required',
                    Rule::unique('todos'),
                ],
                'title' => 'required',
                'detail' => 'required'
            ]);

            $aData['status'] = self::TODO_STATUS;
            $oTodo = Todo::create($aData);
            return response()->json($oTodo);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }

    public function update(Request $request, $mTodoId)
    {
        try {
            $request->validate([
                'mTodoId' => [
                    'required',
                    Rule::exists('todos', 'id')->where(function ($query) use ($mTodoId) {
                        $query->where('id', $mTodoId);
                    })
                ],
                'status' => [
                    'required',
                    Rule::in([self::DONE_STATUS]),
                ]
            ]);

            $oTodo = Todo::findOrFail($mTodoId);
            $oTodo->status = self::DONE_STATUS;
            $oTodo->save();

            return response()->json($oTodo);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }
    }
}
