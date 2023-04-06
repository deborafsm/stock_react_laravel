<?php

namespace App\Http\Controllers\Controllers\Monitores;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Monitor\monitor;

class monitorController extends Controller
{
    function getMonitor()
    {
        return monitor::all();
    }
}
