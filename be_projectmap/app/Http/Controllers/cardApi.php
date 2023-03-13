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
        $result = $card->save();
        if ($result) {
            return ["result" => "o card inserido com sucesso!"];
        } else {
            return ["result" => "Não foi possivel salvar o card!"];
        }
    }
    function upCard(Request $req)
    {

        $card = cards::find($req->id);
        $card->titulo = $req->titulo;
        $card->id = $req->id;
        $card->tag = $req->tag;
        $card->text_front = $req->text_front;
        $card->text_back = $req->text_back;
        $result = $card->save();
        if ($result) {
            return ["result" => "Card atualizado com sucesso!"];
        } else {
            return ["result" => "Não foi possível atualizar!"];
        }
    }
    function upDel(Request $req)
    {
        $card = cards::find($req->id);
        $result = $card->delete();
        if ($result) {
            return ["result" => "Card removido com sucesso!"];
        } else {
            return ["result" => "Não foi possível remover!"];
        }
    }
}
