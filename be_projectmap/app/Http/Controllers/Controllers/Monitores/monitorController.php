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
    function getMonitorById($id = null)
    {
        return $id ? monitor::find($id) : monitor::all();
    }
    function addMonitor(Request $request)
    {
        $monitor = new monitor();
        $monitor->marca = $request->marca;
        $monitor->modelo = $request->modelo;
        $monitor->codigo = $request->codigo;
        $monitor->status = $request->status ?? 1;

        $result = $monitor->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function updateMonitor(Request $request)
    {
        $monitor = monitor::find($request->id);
        $monitor->marca = $request->marca;
        $monitor->modelo = $request->modelo;
        $monitor->codigo = $request->codigo;
        $monitor->status = $request->status ?? 1;
        $result = $monitor->save();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function delMonitor(Request $request)
    {
        $monitor = monitor::find($request->id);
        $result = $monitor->delete();
        if ($result) {
            return ["result" => "success"];
        } else {
            return ["result" => "error"];
        }
    }
    function searchMonitor($codigo)
    {
        return monitor::where("codigo", "like", "%" . $codigo . "%")->get();
    }
}
