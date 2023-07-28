<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signUp(SignUpRequest $oRequest)
    {
        $aData = $oRequest->validated();

        $oUser = User::create([
            'name' => $aData['name'],
            'email' => $aData['email'],
            'password' => bcrypt($aData['password'])
        ]);

        $sToken = $oUser->createToken('main')->plainTextToken;
        return response([
            'user'  => $oUser,
            'token' => $sToken
        ]);
    }

    public function login(LoginRequest $oRequest)
    {
        $aCredentials = $oRequest->validated();
        $bRemember = $aCredentials['remember'] ?? false;
        unset ($aCredentials['remember']);

        if (!Auth::attempt($aCredentials, $bRemember)) {
            return response([
                'error' => 'The provided credentials are not correct'
            ], 422);
        }

        /** @var \App\Models\User $oUser **/
        $oUser = Auth::user();
        $sToken = $oUser->createToken('main')->plainTextToken;
        return response([
            'user'  => $oUser,
            'token' => $sToken
        ]);
    }
}
