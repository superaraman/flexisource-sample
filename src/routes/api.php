<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup1', function () {
    return 1;
});

Route::post('/signup', [AuthController::class, 'signUp']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/logout', [AuthController::class, 'logout']);


Route::get('/todos', [TodoController::class, 'index']);
Route::post('/todos', [TodoController::class, 'store']);
Route::get('/todos/{task_id}', [TodoController::class, 'show']);
Route::put('/todos/{task_id}/update', [TodoController::class, 'update']);


Route::get('/articles', [ArticleController::class, 'showAll']);
Route::get('/articles/{iArticleID}', [ArticleController::class, 'show']);
Route::post('/articles', [ArticleController::class, 'store']);
Route::delete('/articles/{oArticle}', [ArticleController::class, 'destroy']);
