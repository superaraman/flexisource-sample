<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;

class ArticleController extends Controller
{
    public function create()
    {
        //show form to create a blog post
    }

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
        return Article::with(['comments', 'comments.user'])
            ->where('article_no', $iArticleNo)
            ->get()
            ->toArray();
    }

    public function destroy(Article $oArticle)
    {
        //delete a post
    }
}
