<?php

namespace App\Http\Controllers\Controllers\Head;
use App\Models\Head\heads;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class headController extends Controller
{
    function getHead()
    {
        return heads::all();
    }
}
