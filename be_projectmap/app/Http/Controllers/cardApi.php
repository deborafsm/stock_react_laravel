<?php

namespace App\Http\Controllers;
use App\Models\cards;
use Illuminate\Http\Request;

class cardApi extends Controller
{
    function getCard(){
        return cards::all();
    }
    function getCardId($id){
        return cards::find($id);
    }
}
