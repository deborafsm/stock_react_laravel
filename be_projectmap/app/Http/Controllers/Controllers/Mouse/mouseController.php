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
}
