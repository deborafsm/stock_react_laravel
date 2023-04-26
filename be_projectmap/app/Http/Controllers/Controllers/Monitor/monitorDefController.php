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
    function monitorDefModel(Request $request)
    {
        $monitorDefModel = new monitorDefModel();
        $monitorDefModel->data_defeito = $request->data_defeito;

        $result = $monitorDefModel->save();
        if ($result) {
            return ['result' => 'Operador inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }
}
