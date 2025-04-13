<?php

namespace App\Http\Controllers\API;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request-> all(),[
            'nome'=>'required|max:191',
            'email'=>'required|email|max:191|unique:users,email',
            'senha'=>'required|min:8|'
        ]);
        if($validator->fails()){
            return response()->json([
                'validation_error'=> $validator->messages(),
            ]);
        }
        else
        {
            $user=User::create([
                'nome'=>$request->nome,
                'email'=>$request->email,
                'senha'=> Hash::make($request->senha)
            ]);

          $token =  $user->createToken($user->email.'_Token')->plainTextToken;
        
          return response() -> json([
            'status'=>200,
            'username'=>$user->nome,
            'token'=>$token,
            'message'=>'Registrado com sucesso!',
          ]);

        }
    }
}
