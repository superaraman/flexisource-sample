<?php

namespace App\Repositories;

use App\Models\User;

/**
 * Repository for User
 * All related database queries should be defined here
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class UserRepository
{
    /**
     * Creates a new User
     * @param array $aData
     * @return \App\Models\User
     */
    public function createUser(array $aData): User
    {
        return User::create([
            'name'      => $aData['name'],
            'email'     => $aData['email'],
            'password'  => bcrypt($aData['password'])
        ]);
    }

    /**
     * Find the user by their email address
     * @param string $aCredentials
     * @return mixed
     */
    public function findByEmailAddress(string $sEmailAddress): ?User
    {
        return User::where('email', $sEmailAddress)->first();
    }
}
