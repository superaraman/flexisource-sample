<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ArticleComment;

class ArticleCommentController extends Controller
{
    public function store(Request $oRequest)
    {
        return ArticleComment::create([
            'article_no'    => $oRequest->get('article_no'),
            'user_no'       => $oRequest->get('user_no'),
            'content'       => $oRequest->get('comment'),
        ]);
    }
}
