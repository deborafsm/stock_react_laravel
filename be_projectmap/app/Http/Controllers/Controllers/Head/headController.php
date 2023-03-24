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
        $head->head_marca = $request->head_marca;
        $result = $head->save();
        if ($result) {
            return ['result' => 'head inserido com sucesso!'];
        } else {
            return ['result' => 'Não foi possivel salvar head.'];
        }
    }
    function updateHead(Request $request)
    {
        $head = heads::find($request->id);
        $head->head_marca = $request->head_marca;
        $result = $head->save();
        if ($result) {
            return ['result' => 'head atualizado com sucesso!'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }
}
