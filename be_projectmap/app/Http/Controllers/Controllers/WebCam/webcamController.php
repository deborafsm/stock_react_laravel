<?php

namespace App\Http\Controllers\Controllers\WebCam;

use App\Http\Controllers\Controller;
use App\Models\WebCam\webcam;
use Illuminate\Http\Request;

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
    function addWebCam(Request $request)
    {
        $webcam = new webcam();
        $webcam->webcam_marca = $request->webcam_marca;
        $webcam->quantidade = $request->quantidade;
        $webcam->cod_web = $request->cod_web;
        $result = $webcam->save();
        if ($result) {
            return ['result' => 'webcam adicionado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel salvar.'];
        }
    }
}
