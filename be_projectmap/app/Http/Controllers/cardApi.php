<?php

namespace App\Http\Controllers;

use App\Models\cards;
use Illuminate\Http\Request;

class cardApi extends Controller
{
    function getCard()
    {
        return cards::all();
    }
    function getCardId($id = null)
    {
        return $id ? cards::find($id) : cards::all();
    }
    function addCard(){
        $card = new cards;
        return "o card inserido com sucesso!";
    }
}
