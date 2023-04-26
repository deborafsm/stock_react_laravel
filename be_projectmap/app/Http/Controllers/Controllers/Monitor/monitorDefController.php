<?php

namespace App\Http\Controllers\Controllers\Monitor;

use App\Http\Controllers\Controller;
use App\Models\Monitor\monitorDefModel;
use Illuminate\Http\Request;

class monitorDefController extends Controller
{
    function getMonitorDef()
    {
        return monitorDefModel::all();
    }
    function getMonitorDefBiId($id = null)
    {
        return $id ? monitorDefModel::find($id) : monitorDefModel::all();
    }
    function searchMonitorDef($cod_monitorDef)
    {
        return monitorDefModel::where("cod_monitorDef", "like", "%" . $cod_monitorDef . "%")->get();
    }

    function delMonitorDef(Request $req)
    {
        $monitorDefModel = monitorDefModel::find($req->id);
        $result = $monitorDefModel::delete();
        if ($result) {
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover."];
        }
    }
    function addMonitorDefModel(Request $request)
    {
        $monitorDefModel = new monitorDefModel();
        $monitorDefModel->data_defeito = $request->data_defeito;
        $monitorDefModel->descricao = $request->descricao;
        $monitorDefModel->statusm = $request->statusm;
        $monitorDefModel->monitor = $request->monitor;
        $monitorDefModel->operador = $request->operador;

        $result = $monitorDefModel->save();
        if ($result) {
            return ['result' => 'Inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }
    function upMonitorDefModel(Request $request)
    {
        $monitorDefModel = monitorDefModel::find($request->id);
        $monitorDefModel->data_defeito = $request->data_defeito;
        $monitorDefModel->descricao = $request->descricao;
        $monitorDefModel->statusm = $request->statusm;
        $monitorDefModel->monitor = $request->monitor;
        $monitorDefModel->operador = $request->operador;
        $result = $monitorDefModel->save();
        if ($result) {
            return ["result" => "o monitor atualizado com sucesso!"];
        } else {
            return ["result" => "erro ao atualizar."];
        }
    }
}
