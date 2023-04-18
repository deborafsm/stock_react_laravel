<?php

namespace App\Http\Controllers\Controllers\Operador;

use App\Http\Controllers\Controller;
use App\Models\Operador\operador;
use Illuminate\Http\Request;

class operadorController extends Controller
{
    function getOperador()
    {
        return operador::all();
    }
}
