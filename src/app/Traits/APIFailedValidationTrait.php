<?php

namespace App\Traits;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;


trait APIFailedValidationTrait
{
    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        $oResponse = response()->json([
            'message'   => 'Unprocessable Entity.',
            'errors'    => $errors->messages(),
        ], 422);

        throw new HttpResponseException($oResponse);
    }
}
