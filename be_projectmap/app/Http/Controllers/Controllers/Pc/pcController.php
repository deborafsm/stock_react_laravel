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
    function searchPc($codpc)
    {
        return pc::where("codpc", "like", "%" . $codpc . "%")->get();
    }
    function delPc(Request $request)
    {
        $pc = pc::find($request->id);
        $result = $pc->delete();
        if ($result) {
            return ['result' => 'Removido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel remover.'];
        }
    }
    function addPc(Request $request)
    {
        $pc = new pc();
        $pc->codpc = $request->codpc;
        $pc->datacad = $request->datacad;
        $pc->nome_pc = $request->nome_pc;
        $pc->marca_pc = $request->marca_pc;
        $pc->modelo = $request->modelo;
        $pc->so = $request->so;
        $pc->garantia = $request->garantia;
        $pc->memoria = $request->memoria;
        $pc->processador = $request->processador;
        $pc->hd = $request->hd;
        $pc->status_pc = $request->status_pc;
        $result = $pc->save();
        if ($result) {
            return ['result' => 'Mouse inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel salvar mouse.'];
        }
    }
    function updatePc(Request $request)
    {
        $pc = pc::find($request->id);
        $pc->codpc = $request->codpc;
        $pc->datacad = $request->datacad;
        $pc->nome_pc = $request->nome_pc;
        $pc->marca_pc = $request->marca_pc;
        $pc->modelo = $request->modelo;
        $pc->so = $request->so;
        $pc->garantia = $request->garantia;
        $pc->memoria = $request->memoria;
        $pc->processador = $request->processador;
        $pc->hd = $request->hd;
        $pc->status_pc = $request->status_pc;
        $result = $pc->save();
        if ($result) {
            return ['result' => 'Pc atualizado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }
}
