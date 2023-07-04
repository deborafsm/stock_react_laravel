<?php

namespace App\Http\Controllers\Controllers\Pc;

use App\Http\Controllers\Controller;
use App\Models\Pc\pcDefModel;
use Illuminate\Http\Request;

class pcDefController extends Controller
{
    function getPcDef()
    {
        return pcDefModel::all();
    }
    function getPcDefByid($id = null)
    {
        return $id ? pcDefModel::find($id) : pcDefModel::all();
    }
    function searchPcDef($id)
    {
        return pcDefModel::where("id", "like", "%" . $id . "%")->get();
    }
    function delDefPc(Request $request)
    {
        $pcDef = pcDefModel::find($request->id);
        $result = $pcDef->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function addDefPc(Request $request)
    {
        $pcDefModel = new pcDefModel();
        $pcDefModel->descricao = $request->descricao;
        $pcDefModel->status = $request->status;
        $pcDefModel->pc = $request->pc;
        $pcDefModel->operador = $request->operador;
        $pcDefModel->data_reparo = $request->data_reparo;
        $pcDefModel->obsercacao = $request->obsercacao;
        $pcDefModel->tecnico_resp = $request->tecnico_resp;
        $pcDefModel->empresa_resp = $request->empresa_resp;
        $result = $pcDefModel->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }

    function upDefPc(Request $request)
    {
        $pcDefModel = pcDefModel::find($request->id);
        $pcDefModel->descricao = $request->descricao;
        $pcDefModel->status = $request->status;
        $pcDefModel->pc = $request->pc;
        $pcDefModel->operador = $request->operador;
        $pcDefModel->data_reparo = $request->data_reparo;
        $pcDefModel->obsercacao = $request->obsercacao;
        $pcDefModel->tecnico_resp = $request->tecnico_resp;
        $pcDefModel->empresa_resp = $request->empresa_resp;
        $result = $pcDefModel->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
