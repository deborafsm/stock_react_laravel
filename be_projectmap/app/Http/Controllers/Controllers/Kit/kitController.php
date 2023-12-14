<?php

namespace App\Http\Controllers\Controllers\Kit;

use App\Observers\KitObserver;


use App\Http\Controllers\Controller;
use App\Models\Kit\kitModel;
use Illuminate\Http\Request;

class kitController extends Controller
{
    function getKit()
    {
        // Obtendo todos os kits
        $kits = kitModel::all();

        // Transformando o array de kits
        $kits = $kits->transform(function ($kit) {
            return ['kit' => $kit];
        });

        // Convertendo o array de kits em JSON
        $json = json_encode($kits);
        return $json;
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
        $result = $kitModel->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function addkit(Request $request)
    {
        $kitModel = new kitModel();
        $kitModel->data_kit = $request->data_kit;
        $kitModel->status = $request->status;
        $kitModel->qnt_vga = $request->qnt_vga;
        $kitModel->qnt_e = $request->qnt_e;
        $kitModel->rede = $request->rede;
        $kitModel->lacre = $request->lacre;
        $kitModel->operador = $request->operador;
        $kitModel->pc = $request->pc;
        $kitModel->foto = $request->foto;
        $kitModel->monitor = $request->monitor;
        $kitModel->webcam = $request->webcam;
        $kitModel->mouse = $request->mouse;
        $kitModel->teclado = $request->teclado;
        $kitModel->head = $request->head;
        $result = $kitModel->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function kitUpdate(Request $request)
    {
        $kitModel = kitModel::find($request->id);
        $kitModel->data_kit = $request->data_kit;
        $kitModel->status = $request->status;
        $kitModel->qnt_vga = $request->qnt_vga;
        $kitModel->qnt_e = $request->qnt_e;
        $kitModel->rede = $request->rede;
        $kitModel->lacre = $request->lacre;
        $kitModel->operador = $request->operador;
        $kitModel->pc = $request->pc;
        $kitModel->foto = $request->foto;
        $kitModel->monitor = $request->monitor;
        $kitModel->webcam = $request->webcam;
        $kitModel->mouse = $request->mouse;
        $kitModel->teclado = $request->teclado;
        $kitModel->head = $request->head;
        $kitModel->save();
        // $kitModel->notify(new KitObserver($kitModel));
        if ($kitModel) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
