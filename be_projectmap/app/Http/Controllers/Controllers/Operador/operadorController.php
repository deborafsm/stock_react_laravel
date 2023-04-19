<?php

namespace App\Http\Controllers\Controllers\Operador;

use App\Http\Controllers\Controller;
use App\Models\Operador\operador;
use Illuminate\Http\Request;

class operadorController extends Controller
{
    function getOperador()
    {
        return operador::all();
    }
    function getOperadorById($id = null)
    {
        return $id ? operador::find($id) : operador::all();
    }
    function searchOperador($cod_operador)
    {
        return operador::where("cod_operador", "like", "%" . $cod_operador . "%")->get();
    }
    function delOperador(Request $req)

    {
        $operador = operador::find($req->id);
        $result = $operador::delete();
        if ($result) {
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover."];
        }
    }
}
