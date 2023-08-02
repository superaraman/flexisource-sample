<?php

namespace App\Http\Requests;

use App\Traits\APIFailedValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    use APIFailedValidationTrait;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'user_no'   => 'required|integer|exists:users,user_no',
            'title'     => 'required|string',
            'content'   => 'required|string'
        ];
    }
}
