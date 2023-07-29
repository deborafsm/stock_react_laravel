<?php

// Arquivo: UserController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User\User;

class UserController extends Controller
{
    function create(Request $request)
    {
        $head = new User();
        $head->nome = $request->nome;
        $head->usuario = $request->usuario;
        $head->senha = $request->senha;
        $head->adm = $request->adm;
        $result = $head->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }

    public function read()
    {
        $users = User::all();
        return response()->json(['users' => $users]);
    }
}
