<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Models\Head\head;
use App\Http\Controllers\Controllers\Head\headController;
use App\Http\Controllers\Controllers\Monitores\monitorController;
use App\Http\Controllers\Controllers\Teclado\tecladoController;
use App\Http\Controllers\Controllers\Mouse\mouseController;
use App\Http\Controllers\Controllers\Pc\pcController;
use App\Models\Teclado\teclado;
use App\Http\Controllers\Controllers\WebCam\webcamController;
use App\Models\WebCam\webcam;

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
// Card
// Route::get("card", [cardApi::class, 'getCard']);
// Route::get("card_id/{id?}", [cardApi::class, 'getCardId']);
// Route::post("cardAdd", [cardApi::class, 'addCard']);
// Route::post("update", [cardApi::class, 'upCard']);
// Route::post("delete/{id?}", [cardApi::class, 'delCard']);
// Route::get("search/{tag}", [cardApi::class, 'findCard']);
// Route::apiResource("member", memberController::class);
// Head
Route::get("head", [headController::class, 'getHead']);
Route::get("head_id/{id_head?}", [headController::class, 'getHeadById']);
Route::post("headAdd", [headController::class, 'addHead']);
Route::post("headUpdate", [headController::class, 'updateHead']);
Route::post("headDel/{id?}", [headController::class, 'delHead']);
Route::get("searchHead/{head_marca}", [headController::class, 'searchHead']);
// Teclado
Route::get("teclado", [tecladoController::class, 'getTeclado']);
Route::get("teclado_id/{id_teclado?}", [tecladoController::class, 'getTecById']);
Route::post("tecladoAdd", [tecladoController::class, 'addTeclado']);
Route::post("tecladoUpdate", [tecladoController::class, 'tecladoUpdate']);
Route::post("tecladoDel/{id?}", [tecladoController::class, 'tecladoDel']);
Route::get("searchTel/{teclado_marca", [tecladoController::class, 'searchTeclado']);
//Mouse
Route::get("mouse", [mouseController::class, 'getMouse']);
Route::get("mouse_id/{id_mouse?}", [mouseController::class, 'getMouseById']);
Route::post("mouseAdd", [mouseController::class, 'addMouse']);
Route::post("mouseUpdate", [mouseController::class, 'updateMouse']);
Route::post("mouseDel/{id?}", [mouseController::class, 'delMouse']);
Route::get("search/{mouse_marca", [mouseController::class, 'searchMouse']);
// Monitores
Route::get("monitor", [monitorController::class, 'getMonitor']);
Route::get("monitor_id/{id_monitor?}", [monitorController::class, 'getMonitorById']);
Route::post("monitorAdd", [monitorController::class, 'addMonitor']);
Route::post("monitorUp", [monitorController::class, 'updateMonitor']);
Route::post("monitorDel/{id?}", [monitorController::class, 'delMonitor']);
Route::get("searchMonitor", [monitorController::class, 'searchMonitor']);
// Web Cam
Route::get("webcam", [webcamController::class, 'getWebCam']);
Route::get("webcam_id/{id?}", [webcamController::class, 'getWebcamById']);
Route::post("webcamAdd", [webcamController::class, 'addWebCam']);
Route::post("webcamUpdate", [webcamController::class, 'updateWebCam']);
Route::post("webcamDel/{id?}", [webcamController::class, 'delWebCam']);
Route::get("searchWebCam", [webcamController::class, 'searchWebCam']);
// PC
Route::get("", []);
Route::get("pc", [pcController::class, 'getPc']);
Route::get("pc_id/{id?}", [pcController::class, 'getWebcamId']);
Route::post("searchPc/{cod_pc?}", [pcController::class, 'searchPc']);
Route::post("pcDel/{id?}", [pcController::class, 'delPc']);
