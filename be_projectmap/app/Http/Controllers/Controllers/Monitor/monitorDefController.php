<?php

namespace App\Http\Controllers\Controllers\Monitor;

use App\Http\Controllers\Controller;
use App\Models\Monitor\monitorDefModel;
use Illuminate\Http\Request;

class monitorDefController extends Controller
{
    function getMonitorDef()
    {
        return monitorDefModel::all();
    }
    function getMonitorDefBiId($id = null)
    {
        return $id ? monitorDefModel::find($id) : monitorDefModel::all();
    }
    function searchMonitorDef($cod_monitorDef)
    {
        return monitorDefModel::where("cod_monitorDef", "like", "%" . $cod_monitorDef . "%")->get();
    }

