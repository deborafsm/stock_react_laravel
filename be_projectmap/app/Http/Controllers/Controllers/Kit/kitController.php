<?php

namespace App\Http\Controllers\Controllers\Kit;

use App\Http\Controllers\Controller;
use App\Models\Kit\kitModel;
use Illuminate\Http\Request;

class kitController extends Controller
{
    function getKit()
    {
        return kitModel::all();
    }
    function getKitById($id = null)
    {
        return $id ? kitModel::find($id) : kitModel::all();
    }
    function searchKit($id)
    {
        return kitModel::where("id", "like", "%" . $id . "%")->get();
    }
    function delkit(Request $request)
    {
        $kitModel = kitModel::find($request->id);
        $result = $kitModel::delete();
        if ($result) {
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover!"];
        }
    }
    function addkit(Request $request)
    {
        $kitModel = new kitModel();
        $kitModel->data_kit = $request->data_kit;
        $kitModel->status_kit = $request->status_kit;
        $kitModel->qnt_vga = $request->qnt_vga;
        $kitModel->qnt_e = $request->qnt_e;
        $kitModel->rede = $request->rede;
        $kitModel->lacre = $request->lacre;
        $kitModel->operador = $request->operador;
        $kitModel->pc = $request->pc;
        $kitModel->foto = $request->foto;
        $result = $kitModel->save();
        if ($result) {
            return ['result' => 'Inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }
    function kitUp(Request $request)
    {
        $kitModel = new kitModel();
        $kitModel->data_kit = $request->data_kit;
        $kitModel->status_kit = $request->status_kit;
        $kitModel->qnt_vga = $request->qnt_vga;
        $kitModel->qnt_e = $request->qnt_e;
        $kitModel->rede = $request->rede;
        $kitModel->lacre = $request->lacre;
        $kitModel->operador = $request->operador;
        $kitModel->pc = $request->pc;
        $kitModel->foto = $request->foto;
        $result = $kitModel->save();
        if ($result) {
            return ['result' => 'Inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }
}
