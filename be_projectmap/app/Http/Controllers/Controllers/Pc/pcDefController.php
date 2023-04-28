<?php

namespace App\Http\Controllers\Controllers\Pc;

use App\Http\Controllers\Controller;
use App\Models\Pc\pcDefModel;
use Illuminate\Http\Request;

class pcDefController extends Controller
{
    function getPcDef()
    {
        return pcDefModel::all();
    }
    function getPcDefByid($id = null)
    {
        return $id ? pcDefModel::find($id) : pcDefModel::all();
    }
    function searchPcDef($id)
    {
        return pcDefModel::where("id", "like", "%" . $id . "%")->get();
    }
    function delDefPc(Request $request)
    {
        $pcDef = pcDefModel::find($request->id);
        $result = $pcDef::delete();
        if ($result) {
            return ["result" => "Removido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel remover!"];
        }
    }
}
