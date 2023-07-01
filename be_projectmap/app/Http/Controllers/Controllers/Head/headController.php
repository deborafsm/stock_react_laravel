<?php

namespace App\Http\Controllers\Controllers\Head;

use App\Models\Head\heads;
use App\Http\Controllers\Controller;

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
        $head->codigo = $request->codigo;
        $head->status = $request->status ?? 1;
        $result = $head->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updateHead(Request $request)
    {
        $head = heads::find($request->id);
        $head->marca = $request->marca;
        $head->modelo = $request->modelo;
        $head->codigo = $request->codigo;
        $head->status = $request->status;
        $result = $head->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function delHead(Request $request)
    {
        $head = heads::find($request->id);
        $result = $head->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function searchHead($head_marca)
    {
        return heads::where("head_marca", "like", "%" . $head_marca . "%")->get();
    }
}
