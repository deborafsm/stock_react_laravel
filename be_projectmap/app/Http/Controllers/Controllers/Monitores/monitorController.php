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
        $monitor->marca_monitor = $request->marca_monitor;
        $monitor->modelo_monitor = $request->modelo_monitor;
        $monitor->cod_monitor = $request->cod_monitor;
        $monitor->status_monitor = $request->status_monitor;
        $monitor->quantidade = $request->quantidade;
        $result = $monitor->save();
        if ($result) {
            return ["result" => "o monitor inserido com sucesso!"];
        } else {
            return ["result" => "erro ao salvar."];
        }
    }
    function updateMonitor(Request $request)
    {
        $monitor = monitor::find($request->id);
        $monitor->marca_monitor = $request->marca_monitor;
        $monitor->modelo_monitor = $request->modelo_monitor;
        $monitor->cod_monitor = $request->cod_monitor;
        $monitor->status_monitor = $request->status_monitor;
        $monitor->quantidade = $request->quantidade;
        $result = $monitor->save();
        if ($result) {
            return ["result" => "o monitor atualizado com sucesso!"];
        } else {
            return ["result" => "erro ao atualizar."];
        }
    }
    function delMonitor(Request $request)
    {
        $monitor = monitor::find($request->id);
        $result = $monitor->delete();
        if ($result) {
            return ["result" => "o monitor removido com sucesso!"];
        } else {
            return ["result" => "erro ao remover."];
        }
    }
    function searchMonitor($cod_monitor)
    {
        return monitor::where("cod_monitor", "like", "%" . $cod_monitor . "%")->get();
    }
}