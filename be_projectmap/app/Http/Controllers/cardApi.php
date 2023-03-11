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
    function addCard(Request $req)
    {
        $card = new cards;
        $card->titulo = $req->titulo;
        $card->id = $req->id;
        $card->tag = $req->tag;
        $card->text_front = $req->text_front;
        $card->text_back = $req->text_back;
        $resut = $card->save();
        if ($resut) {
            return ["Result" => "o card inserido com sucesso!"];
        } else {
            return ["Result" => "Não foi possivel salvar o card!"];
        }
    }
}
