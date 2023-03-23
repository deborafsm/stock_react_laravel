<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controllers\Head\headController;
use App\Models\Models\Head\head;

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
// Route::get("card", [cardApi::class, 'getCard']);
// Route::get("card_id/{id?}", [cardApi::class, 'getCardId']);
// Route::post("cardAdd", [cardApi::class, 'addCard']);
// Route::post("update", [cardApi::class, 'upCard']);
// Route::post("delete/{id?}", [cardApi::class, 'delCard']);
// Route::get("search/{tag}", [cardApi::class, 'findCard']);
// Head
Route::get("head", [headController::class, 'getHead']);
Route::get("head_id/{id_head?}", [headController::class, 'getHeadById']);
Route::post("headAdd",[headController::class,'addHead']);
// Route::apiResource("member", memberController::class);
