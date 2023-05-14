<?php

namespace App\Http\Controllers\Controllers\Teclado;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Teclado\teclado;

class tecladoController extends Controller
{
    function getTeclado()
    {
        return teclado::all();
    }
    function getTecById($id = null)
    {
        return $id ? teclado::find($id) : teclado::all();
    }
    function addTeclado(Request $request)
    {
        $teclado = new teclado();
        $teclado->teclado_marca = $request->teclado_marca;
        $teclado->modelo = $request->modelo;
        $teclado->cod_teclado = $request->cod_teclado;
        $teclado->kit = $request->kit;
        $result = $teclado->save();
        if ($result) {
            return ["result" => "o teclado inserido com sucesso!"];
        } else {
            return ["result" => "erro ao salvar."];
        }
    }
    function tecladoUpdate(Request $request)
    {
        $teclado = teclado::find($request->id);
        $teclado->teclado_marca = $request->teclado_marca;
        $teclado->modelo = $request->modelo;
        $teclado->cod_teclado = $request->cod_teclado;
        $teclado->kit = $request->kit;
        $result = $teclado->save();
        if ($result) {
            return ["result" => "o teclado atualizado com sucesso!"];
        } else {
            return ["result" => "erro ao atualizar."];
        }
    }
    function tecladoDel(Request $request)
    {
        $teclado = teclado::find($request->id);
        $result = $teclado->delete();
        if ($result) {
            return ["result" => "o teclado removido com sucesso!"];
        } else {
            return ["result" => "erro ao remover."];
        }
    }
    function searchTeclado($teclado_marca)
    {
        return teclado::where("teclado_marca", "like", "%" . $teclado_marca . "%")->get();
    }
}
