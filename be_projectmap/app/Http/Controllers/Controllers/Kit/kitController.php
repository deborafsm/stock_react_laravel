<?php

namespace App\Http\Controllers\Controllers\Kit;

use App\Http\Controllers\Controller;
use App\Models\Kit\kitModel;
use Illuminate\Http\Request;

class kitController extends Controller
{
    function getKit()
    {
        return kitModel::all();
    }
    function getKitById($id = null)
    {
        return $id ? kitModel::find($id) : kitModel::all();
    }
    function searchKit($id)
    {
        return kitModel::where("id", "like", "%" . $id . "%")->get();
    }
}
