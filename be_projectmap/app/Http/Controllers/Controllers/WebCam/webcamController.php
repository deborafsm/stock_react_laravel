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
    function searchWebCam($webcam_cod){
        return webcam::where("webcam_cod", "like", "%" . $webcam_cod . "%")->get();
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
    function updateWebCam(Request $request)
    {
        $webcam = webcam::find($request->id);
        $webcam->webcam_marca = $request->webcam_marca;
        $webcam->quantidade = $request->quantidade;
        $webcam->cod_web = $request->cod_web;
        $result = $webcam->save();
        if ($result) {
            return ['result' => 'webcam atualizado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }
    function delWebCam(Request $request){
        $webcam = webcam::find($request -> id);
        $result = $webcam->delete();
        if ($result) {
            return ['result' => 'Removido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel remover.'];
        }
    }
}
