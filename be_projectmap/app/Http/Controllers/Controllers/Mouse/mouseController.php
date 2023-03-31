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
    function searchMouse($mouse_marca)
    {
        return mouse::where("mouse_marca", "like", "%" . $mouse_marca . "%")->get();
    }
    function addMouse(Request $request)
    {
        $mouse = new mouse();
        $mouse->mouse_marca = $request->mouse_marca;
        $mouse->quantidade = $request->quantidade;
        $result = $mouse->save();
        if ($result) {
            return ['result' => 'Mouse inserido com sucesso.'];
        } else {
            return ['result' => 'Não foi possivel salvar mouse.'];
        }
    }

}
