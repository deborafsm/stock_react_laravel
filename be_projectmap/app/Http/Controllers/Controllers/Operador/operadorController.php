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
        return operador::where("email_operador", "like", "%" . $email_operador . "%")->get();
    }
    function delOperador(Request $req)

    {
        $operador = operador::find($req->id);
        $result = $operador->delete();
        if ($result) {
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover."];
        }
    }
    function addOperador(Request $request)
    {
        $operador = new operador();
        $operador->data_cad = $request->data_cad;
        $operador->nome_operador = $request->nome_operador;
        $operador->email_operador = $request->email_operador;
        $operador->tel = $request->tel;
        $operador->celular = $request->celular;
        $operador->endereco = $request->endereco;
        $operador->cep = $request->cep;
        $operador->numero = $request->numero;
        $operador->complemento = $request->complemento;
        $operador->referencia = $request->referencia;
        $operador->bairro = $request->bairro;
        $operador->cidade = $request->cidade;
        $operador->estado = $request->estado;
        $operador->setor = $request->setor;
        $operador->cargo = $request->cargo;
        $operador->status_operador = $request->status_operador;
        $operador->empresa = $request->empresa;
        $operador->supervisor = $request->supervisor;
        $operador->cpf = $request->cpf;
        $result = $operador->save();
        if ($result) {
            return ['result' => 'Operador inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi salvar.'];
        }
    }
    function updatePc(Request $request)
    {
        $operador = operador::find($request->id);
        $operador->data_cad = $request->data_cad;
        $operador->nome_operador = $request->nome_operador;
        $operador->email_operador = $request->email_operador;
        $operador->tel = $request->tel;
        $operador->celular = $request->celular;
        $operador->endereco = $request->endereco;
        $operador->cep = $request->cep;
        $operador->numero = $request->numero;
        $operador->complemento = $request->complemento;
        $operador->referencia = $request->referencia;
        $operador->bairro = $request->bairro;
        $operador->cidade = $request->cidade;
        $operador->estado = $request->estado;
        $operador->setor = $request->setor;
        $operador->cargo = $request->cargo;
        $operador->status_operador = $request->status_operador;
        $operador->empresa = $request->empresa;
        $operador->supervisor = $request->supervisor;
        $operador->cpf = $request->cpf;
        $result = $operador->save();
        if ($result) {
            return ['result' => 'Operador atualizado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }
}
