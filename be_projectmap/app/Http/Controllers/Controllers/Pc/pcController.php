<?php

namespace App\Http\Controllers\Controllers\Pc;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pc\pc;

class pcController extends Controller
{
    function getPc()
    {
        return pc::all();
    }
    function getWebcamId($id_pc = null)
    {
        return $id_pc ? pc::find($id_pc) : pc::all();
    }
    function searchPc($codpc)
    {
        return pc::where("codigo", "like", "%" . $codpc . "%")->get();
    }
    function delPc(Request $request)
    {
        $pc = pc::find($request->id);
        $result = $pc->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function addPc(Request $request)
    {
        $pc = new pc();
        $pc->codigo = $request->codigo;
        $pc->nome = $request->nome;
        $pc->marca = $request->marca;
        $pc->modelo = $request->modelo;
        $pc->so = $request->so;
        $pc->garantia = $request->garantia;
        $pc->memoria = $request->memoria;
        $pc->processador = $request->processador;
        $pc->hd = $request->hd;
        $pc->status = $request->status ?? 1;
        $result = $pc->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updatePc(Request $request)
    {
        $pc = pc::find($request->id);
        $pc->codigo = $request->codigo;
        $pc->nome = $request->nome;
        $pc->marca = $request->marca;
        $pc->modelo = $request->modelo;
        $pc->so = $request->so;
        $pc->garantia = $request->garantia;
        $pc->memoria = $request->memoria;
        $pc->processador = $request->processador;
        $pc->hd = $request->hd;
        $pc->status = $request->status ?? 1;
        $result = $pc->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
