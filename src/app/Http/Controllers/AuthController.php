<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserTokenResource;
use App\Services\UserService;

/**
 * Controller for Users Authentication
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class AuthController extends Controller
{
    /**
     * @var UserService $oUserService
     */
    private $oUserService;

    /**
     * Constructor
     * @param UserService $oUserService
     */
    public function __construct(UserService $oUserService)
    {
        $this->oUserService = $oUserService;
    }

    /**
     * Register the user based on the data provided
     * @param SignUpRequest $oRequest
     * @return UserTokenResource
     */
    public function signUp(SignUpRequest $oRequest)
    {
        $aUserData = $oRequest->validated();
        $aResult = $this->oUserService->signUp($aUserData);

        return new UserTokenResource($aResult);
    }

    /**
     * Logs in the user based on the credentials provided
     * @param \App\Http\Requests\LoginRequest $oRequest
     * @return UserTokenResource
     */
    public function login(LoginRequest $oRequest)
    {
        $aCredentials = $oRequest->validated();
        $aResult = $this->oUserService->login($aCredentials);

        return new UserTokenResource($aResult);
    }
}
