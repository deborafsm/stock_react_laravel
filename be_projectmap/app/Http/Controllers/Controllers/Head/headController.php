<?php

namespace App\Http\Controllers\Controllers\Head;

use App\Models\Head\heads;
use App\Http\Controllers\Controller;
use App\Models\Models\Head\head;
use Illuminate\Http\Request;

class headController extends Controller
{
    function getHead()
    {
        return heads::all();
    }
    function getHeadById($id_head = null)
    {

        return  $id_head ? heads::find($id_head) : heads::all();
    }
    function addHead(Request $request)
    {
        $head = new heads();
        $head->marca = $request->marca;
        $head->modelo = $request->modelo;
        $head->codigo = $request->cod_head;
        $head->status = $request->status;
        $result = $head->save();
        if ($result) {
            return ['result' => 'Head inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel salvar head.'];
        }
    }
    function updateHead(Request $request)
    {
        $head = heads::find($request->id);
        $head->marca = $request->marca;
        $head->modelo = $request->modelo;
        $head->codigo = $request->cod_head;
        $head->status = $request->status;
        $result = $head->save();
        if ($result) {
            return ['result' => 'Head atualizado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }
    function delHead(Request $request)
    {
        $head = heads::find($request->id);
        $result = $head->delete();
        if ($result) {
            return ['result' => 'Head removido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel remover.'];
        }
    }
    function searchHead($head_marca)
    {
        return heads::where("head_marca", "like", "%" . $head_marca . "%")->get();
    }
}
