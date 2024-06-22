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
    function searchOperador($email_operador)
    {
        return operador::where("email", "like", "%" . $email_operador . "%")->get();
    }
    function delOperador(Request $req)

    {
        $operador = operador::find($req->id);
        $result = $operador->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function addOperador(Request $request)
    {
        $operador = new operador();
        $operador->nome = $request->nome;
        $operador->email = $request->email;
        $operador->setor = $request->setor;
        $operador->cargo = $request->cargo;
        $operador->status = $request->status ?? 1;
        $operador->empresa = $request->empresa;
        $operador->supervisor = $request->supervisor;
       
        $result = $operador->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updatePc(Request $request)
    {
        $operador = operador::find($request->id);
        $operador->nome = $request->nome;
        $operador->email = $request->email;
        $operador->setor = $request->setor;
        $operador->cargo = $request->cargo;
        $operador->status = $request->status ?? 1;
        $operador->empresa = $request->empresa;
        $operador->supervisor = $request->supervisor;
        $result = $operador->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
