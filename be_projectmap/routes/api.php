<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Models\Head\head;
use App\Http\Controllers\Controllers\Head\headController;
use App\Http\Controllers\Controllers\Kit\kitController;
use App\Http\Controllers\Controllers\Monitor\monitorDefController;
use App\Http\Controllers\Controllers\Monitores\monitorController;
use App\Http\Controllers\Controllers\Teclado\tecladoController;
use App\Http\Controllers\Controllers\Mouse\mouseController;
use App\Http\Controllers\Controllers\Operador\operadorController;
use App\Http\Controllers\Controllers\Pc\pcController;
use App\Http\Controllers\Controllers\Pc\pcDefController;
use App\Models\Teclado\teclado;
use App\Http\Controllers\Controllers\WebCam\webcamController;
use App\Models\Monitor\monitor;
use App\Models\WebCam\webcam;
use App\Http\Controllers\UserController;
use App\Http\Controllers\API\AuthController;
 

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

// //Usuario
// Route::post('/register', [Auth::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

// Route::middleware('auth:api')->group(function () {
//     Route::get('/user', [UserController::class, 'user']);
//     Route::post('/logout', [AuthController::class, 'logout']);
// });
// Route::post('/users', [UserController::class, 'create']);
// Route::get('/read', [UserController::class, 'read']);
// Card
// Route::get("card", [cardApi::class, 'getCard']);
// Route::get("card_id/{id?}", [cardApi::class, 'getCardId']);
// Route::post("cardAdd", [cardApi::class, 'addCard']);
// Route::post("update", [cardApi::class, 'upCard']);
// Route::post("delete/{id?}", [cardApi::class, 'delCard']);
// Route::get("search/{tag}", [cardApi::class, 'findCard']);
// Route::apiResource("member", memberController::class);
Route::post("register", [AuthController::class,'register']);
// Head
Route::get("head", [headController::class, 'getHead']);
Route::get("head_id/{id_head?}", [headController::class, 'getHeadById']);
Route::post("headAdd", [headController::class, 'addHead']);
Route::post("headUpdate", [headController::class, 'updateHead']);
Route::get("headDel/{id?}", [headController::class, 'delHead']);
Route::get("searchHead/{head_marca?}", [headController::class, 'searchHead']);
// Teclado
Route::get("teclado", [tecladoController::class, 'getTeclado']);
Route::get("teclado_id/{id_teclado?}", [tecladoController::class, 'getTecById']);
Route::post("tecladoAdd", [tecladoController::class, 'addTeclado']);
Route::post("tecladoUpdate", [tecladoController::class, 'tecladoUpdate']);
Route::get("tecladoDel/{id?}", [tecladoController::class, 'tecladoDel']);
Route::get("searchTel/{teclado_marca?}", [tecladoController::class, 'searchTeclado']);
//Mouse
Route::get("mouse", [mouseController::class, 'getMouse']);
Route::get("mouse_id/{id_mouse?}", [mouseController::class, 'getMouseById']);
Route::post("mouseAdd", [mouseController::class, 'addMouse']);
Route::post("mouseUpdate", [mouseController::class, 'updateMouse']);
Route::get("mouseDel/{id?}", [mouseController::class, 'delMouse']);
Route::get("search/{mouse_marca?}", [mouseController::class, 'searchMouse']);
// Monitores
Route::get("monitor", [monitorController::class, 'getMonitor']);
Route::get("monitor_id/{id_monitor?}", [monitorController::class, 'getMonitorById']);
Route::post("monitorAdd", [monitorController::class, 'addMonitor']);
Route::post("monitorUp", [monitorController::class, 'updateMonitor']);
Route::get("monitorDel/{id?}", [monitorController::class, 'delMonitor']);
Route::get("searchMonitor/{cod_monitor?}", [monitorController::class, 'searchMonitor']);
// Web Cam
Route::get("webcam", [webcamController::class, 'getWebCam']);
Route::get("webcam_id/{id?}", [webcamController::class, 'getWebcamById']);
Route::post("webcamAdd", [webcamController::class, 'addWebCam']);
Route::post("webcamUpdate", [webcamController::class, 'updateWebCam']);
Route::get("webcamDel/{id?}", [webcamController::class, 'delWebCam']);
Route::get("searchWebCam/{webcam_marca?}", [webcamController::class, 'searchWebCam']);
// PC
Route::get("", []);
Route::get("pc", [pcController::class, 'getPc']);
Route::get("pc_id/{id?}", [pcController::class, 'getWebcamId']);
Route::get("searchPc/{codpc?}", [pcController::class, 'searchPc']);
Route::get("pcDel/{id?}", [pcController::class, 'delPc']);
Route::post("pcAdd", [pcController::class, 'addPc']);
Route::post("pcUpdate", [pcController::class, 'updatePc']);
// Operador
Route::get("operador", [operadorController::class, 'getOperador']);
Route::get("operador/{id?}", [operadorController::class, 'getOperadorById']);
Route::get("searchOperador/{email_operador?}", [operadorController::class, 'searchOperador']);
Route::get("operadorDel/{id?}", [operadorController::class, 'delOperador']);
Route::post("operadorAdd", [operadorController::class, 'addOperador']);
Route::post("operadorUpdate", [operadorController::class, 'updatePc']);
// Monitor com Defeito
Route::get("monitorDef", [monitorDefController::class, 'getMonitorDef']);
Route::get("monitorDef/{id?}", [monitorDefController::class, 'getMonitorDefBiId']);
Route::get("searchMonitorDef/{cod_monitor?}", [monitorDefController::class, 'searchMonitorDef']);
Route::get("MonitorDel/{id?}", [monitorDefController::class, 'delMonitorDef']);
Route::post("defMonitorAdd", [monitorDefController::class, 'addMonitorDefModel']);
Route::post("defMonitorUpdate", [monitorDefController::class, 'upMonitorDefModel']);
// PC com defeito
Route::get("pcDef", [pcDefController::class, 'getPcDef']);
Route::get("pcDef/{id?}", [pcDefController::class, 'getPcDefByid']);
Route::get("searchPcDef/{codPcDef?}", [pcDefController::class, 'searchPcDef']);
Route::get("pcDefDel/{id?}", [pcDefController::class, 'delDefPc']);
Route::post("pcDefAdd", [pcDefController::class, 'addDefPc']);
Route::post("upDefPc", [pcDefController::class, 'upDefPc']);
// Kit
Route::get("kit", [kitController::class, 'getKit']);
Route::get("kit/{id?}", [kitController::class, 'getKitById']);
Route::get("searchKit/{cod_kit?}", [kitController::class, 'searchKit']);
Route::get("kitDel/{id?}", [kitController::class, 'delkit']);
Route::post("kitAdd", [kitController::class, 'addkit']);
Route::post("kitUp", [kitController::class, 'kitUpdate']);
