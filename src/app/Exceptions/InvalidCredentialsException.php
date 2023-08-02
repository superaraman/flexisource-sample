<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

/**
 * Error Exception
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class InvalidCredentialsException extends Exception
{
    const ERROR_CODE = 422;

    protected $sMessage = 'The provided credentials were not correct.';

    /**
     * Summary of render
     * @param Request $oRequest
     * @return JsonResponse|mixed
     */
    public function render(Request $oRequest)
    {
        return response()->json([
            'message' => $this->sMessage
        ], self::ERROR_CODE);
    }

}
