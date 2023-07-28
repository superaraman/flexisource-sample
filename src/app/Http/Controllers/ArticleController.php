<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function store(Request $oRequest)
    {
        //store a new post
    }

    public function showAll()
    {
        $oArticles = Article::all();
	    return $oArticles;
    }

    public function show($iArticleNo)
    {
        return Article::with(['comments.user', 'comments' => function ($oQuery) {
                $oQuery->orderBy('created_at', 'desc');
            }])->where('article_no', $iArticleNo)
            ->first()
            ->toArray();
    }

    public function destroy(Article $oArticle)
    {
        return $oArticle->delete();
    }
}
