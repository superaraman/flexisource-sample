<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(Request $request)
    {
        // TODO: Code here
        return [];
    }

    public function fetch(Request $request)
    {
        // TODO: Code here


        return [
            'data' => [],
            'meta' => [
                'page_count' => 0
            ]
        ];
    }

    public function fetchById(Request $request, $id)
    {
        // TODO: Code here
        return ['id' => $id];
    }

    public function store(Request $request)
    {
        // TODO: Code here
    }

    public function update(Request $request, $id)
    {
        // TODO: Code here
    }
}
