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
        $mouse->marca = $request->marca;
        $mouse->modelo = $request->modelo;
        $mouse->codigo = $request->codigo;
        $mouse->status = $request->status ?? 1;
        $result = $mouse->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updateMouse(Request $request)
    {
        $mouse = mouse::find($request->id);
        $mouse->marca = $request->marca;
        $mouse->modelo = $request->modelo;
        $mouse->codigo = $request->codigo;
        $mouse->status = $request->status;
        $result = $mouse->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }

    function delMouse(Request $request)
    {
        $mouse = mouse::find($request->id);
        $result = $mouse->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
}
