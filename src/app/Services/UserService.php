<?php

namespace App\Services;

use App\Repositories\UserRepository;
use App\Exceptions\InvalidCredentialsException;
use Illuminate\Support\Facades\Auth;

/**
 * Service Class for User
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class UserService
{
    /**
     * @var UserRepository $oUserRepository
     */
    private $oUserRepository;

    /**
     * Constructor
     * @param UserRepository $oUserRepository
     */
    public function __construct(UserRepository $oUserRepository)
    {
        $this->oUserRepository = $oUserRepository;
    }

    /**
     * Register the User in the DB
     * Generate a token based on the User
     * @param array $aData
     * @return array
     */
    public function signUp(array $aUserData): array
    {
        $oUser = $this->oUserRepository->createUser($aUserData);
        $oToken = $oUser->createToken('main')->plainTextToken;

        return [
            'user'  => $oUser,
            'token' => $oToken,
        ];
    }

    /**
     * Logs in the user based on the credentials provided
     * @param array $aCredentials
     * @return array
     */
    public function login(array $aCredentials): array
    {
        $remember = $aCredentials['remember'] ?? false;
        unset($aCredentials['remember']);

        $oUser = $this->oUserRepository->findByEmailAddress($aCredentials['email']);
        if (!$oUser || !Auth::attempt($aCredentials, $remember)) {
            throw new InvalidCredentialsException();
        }

        $oToken = $oUser->createToken('main')->plainTextToken;

        return [
            'user'  => $oUser,
            'token' => $oToken,
        ];
    }
}
