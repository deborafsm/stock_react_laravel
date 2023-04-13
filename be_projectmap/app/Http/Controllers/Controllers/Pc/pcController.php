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
}
