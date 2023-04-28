<?php

namespace App\Http\Controllers\Controllers\Pc;

use App\Http\Controllers\Controller;
use App\Models\Pc\pcDefModel;
use Illuminate\Http\Request;

class pcDefController extends Controller
{
    function getPcDef()
    {
        return pcDefModel::all();
    }
    function getPcDefByid($id = null)
    {
        return $id ? pcDefModel::find($id) : pcDefModel::all();
    }
    function searchPcDef($id)
    {
        return pcDefModel::where("id", "like", "%" . $id . "%")->get();
    }
}
