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
    function searchPc($cod_pc)
    {
        return pc::where("cod_pc", "like", "%" . $cod_pc . "%")->get();
    }
    function delPc(Request $request)
    {
        $pc = pc::find($request->id);
        $result = $pc::delete();
        if ($result) {
            return ['result' => 'Removido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel remover.'];
        }
    }
}
