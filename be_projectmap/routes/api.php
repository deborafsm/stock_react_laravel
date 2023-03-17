<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\cardApi;
use App\Http\Controllers\memberController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("card", [cardApi::class, 'getCard']);
Route::get("card_id/{id?}", [cardApi::class, 'getCardId']);
Route::post("cardAdd", [cardApi::class, 'addCard']);
Route::post("update", [cardApi::class, 'upCard']);
Route::post("delete/{id?}", [cardApi::class, 'delCard']);
Route::get("search/{tag}", [cardApi::class, 'findCard']);

Route::apiResource("member", memberController::class);
