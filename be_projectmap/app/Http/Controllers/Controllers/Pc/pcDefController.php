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
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover!"];
        }
    }
    function addDefPc(Request $request)
    {
        $pcDefModel = new pcDefModel();
        $pcDefModel->codigo = $request->codigo;
        $pcDefModel->descricao = $request->descricao;
        $pcDefModel->pc = $request->pc;
        $pcDefModel->operador = $request->operador;
        $pcDefModel->status_pc = $request->status_pc;

        $result = $pcDefModel->save();
        if ($result) {
            return ['result' => 'Inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }

    function upDefPc(Request $request)
    {
        $pcDefModel = pcDefModel::find($request->id);
        $pcDefModel->codigo = $request->codigo;
        $pcDefModel->descricao = $request->descricao;
        $pcDefModel->pc = $request->pc;
        $pcDefModel->operador = $request->operador;
        $pcDefModel->status_pc = $request->status_pc;
        $result = $pcDefModel->save();
        if ($result) {
            return ["result" => "Atualizado com sucesso!"];
        } else {
            return ["result" => "erro ao atualizar."];
        }
    }
}
