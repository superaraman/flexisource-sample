<?php

namespace App\Repositories;

use App\Models\ArticleComment;

/**
 * Repository for Article Comments
 * All related database queries should be defined here
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleCommentRepository
{
    /**
     * Save Article to the database
     * @param array $aArticleData
     * @return ArticleComment
     */
    public function create(array $aCommentData) : ArticleComment
    {
        return ArticleComment::create($aCommentData);
    }
}
