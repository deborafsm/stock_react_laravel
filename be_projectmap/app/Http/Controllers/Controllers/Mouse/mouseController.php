<?php

namespace App\Http\Controllers\Controllers\Mouse;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mouse\mouse;

class mouseController extends Controller
{
    function getMouse()
    {
        return mouse::all();
    }
    function getMouseById($id_mouse = null)
    {
        return $id_mouse ? mouse::find($id_mouse) : mouse::all();
    }
    function searchMouse($marca_mouse)
    {
        return mouse::where("marca_mouse", "like", "%" . $marca_mouse . "%")->get();
    }
    function addMouse(Request $request)
    {
        $mouse = new mouse();
        $mouse->marca_mouse = $request->marca_mouse;
        $mouse->quantidade = $request->quantidade;
        $result = $mouse->save();
        if ($result) {
            return ['result' => 'Mouse inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel salvar mouse.'];
        }
    }
    function updateMouse(Request $request)
    {
        $mouse = mouse::find($request->id);
        $mouse->marca_mouse = $request->marca_mouse;
        $mouse->quantidade = $request->quantidade;
        $result = $mouse->save();
        if ($result) {
            return ['result' => 'Mouse atualizado com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel atualizar.'];
        }
    }

    function delMouse(Request $request)
    {
        $mouse = mouse::find($request->id);
        $result = $mouse->delete();
        if ($result) {
            return ['result' => 'Removido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel remover.'];
        }
    }
}
