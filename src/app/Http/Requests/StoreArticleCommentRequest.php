<?php

namespace App\Http\Requests;

use App\Traits\APIFailedValidationTrait;
use Illuminate\Foundation\Http\FormRequest;

class StoreArticleCommentRequest extends FormRequest
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
            'user_no'       => 'required|integer|exists:users,user_no',
            'article_no'    => 'required|integer|exists:articles,article_no',
            'content'       => 'required|string'
        ];
    }
}
