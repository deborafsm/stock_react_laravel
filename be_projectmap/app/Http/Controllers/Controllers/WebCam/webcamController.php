<?php

namespace App\Http\Controllers\Controllers\WebCam;

use App\Http\Controllers\Controller;
use App\Models\WebCam\webcam;
use Illuminate\Http\Request;
use App\Models\Kit;

class webcamController extends Controller
{
    function getWebCam()
    {
        return webcam::all();
    }
    function getWebcamById($id = null)
    {
        return $id ? webcam::find($id) : webcam::all();
    }
    function searchWebCam($webcam_marca)
    {
        return webcam::where("marca", "like", "%" . $webcam_marca . "%")->get();
    }
    function addWebCam(Request $request)
    {
        $webcam = new webcam();
        $webcam->marca = $request->marca;
        $webcam->modelo = $request->modelo;
        $webcam->codigo = $request->codigo;
        $webcam->status = $request->status;
        $result = $webcam->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updateWebCam(Request $request)
    {
        $webcam = webcam::find($request->id);
        $webcam->marca = $request->marca;
        $webcam->modelo = $request->modelo;
        $webcam->codigo = $request->codigo;
        $webcam->status = $request->status;
        $result = $webcam->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function delWebCam(Request $request)
    {
        $webcam = webcam::find($request->id);
        $result = $webcam->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
