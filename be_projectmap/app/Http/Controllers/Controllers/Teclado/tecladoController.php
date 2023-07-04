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
        $teclado->marca = $request->marca;
        $teclado->modelo = $request->modelo;
        $teclado->codigo = $request->codigo;
        $teclado->status = $request->status ?? 1;
        $result = $teclado->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function tecladoUpdate(Request $request)
    {
        $teclado = teclado::find($request->id);
        $teclado->marca = $request->marca;
        $teclado->modelo = $request->modelo;
        $teclado->codigo = $request->codigo;
        $teclado->status = $request->status;
        $result = $teclado->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function tecladoDel(Request $request)
    {
        $teclado = teclado::find($request->id);
        $result = $teclado->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function searchTeclado($teclado_marca)
    {
        return teclado::where("teclado_marca", "like", "%" . $teclado_marca . "%")->get();
    }
}
