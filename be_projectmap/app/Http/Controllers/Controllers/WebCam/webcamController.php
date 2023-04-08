<?php

namespace App\Http\Controllers\Controllers\WebCam;

use App\Http\Controllers\Controller;
use App\Models\WebCam\webcam;
use Illuminate\Http\Request;

class webcamController extends Controller
{
    function getWebCam()
    {
        return webcam::all();
    }
}
