<?php

namespace App\Repositories;

use App\Models\Article;

/**
 * Repository for Articles
 * All related database queries should be defined here
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleRepository
{
    /**
     * Save Article to the database
     * @param array $aArticleData
     * @return Article
     */
    public function create(array $aArticleData) : Article
    {
        return Article::create($aArticleData);
    }

    /**
     * Return all the Article Available
     * @return \Illuminate\Database\Eloquent\Collection|array<Article>
     */
    public function getAll()
    {
        return Article::all();
    }

    /**
     * Get Specific Article with ID
     * @param int $iArticleNo
     * @return mixed
     */
    public function getByID(int $iArticleNo)
    {
        return Article::findOrFail($iArticleNo);
    }

    /**
     * Get Specific Article with Comments Data
     * @param int $iArticleNo
     * @return mixed
     */
    public function getByIDwithComments(int $iArticleNo)
    {
        return Article::with([
            'comments.user',
            'comments' => function ($query) {
                $query->orderBy('created_at', 'desc');
            }
        ])->findOrFail($iArticleNo);
    }

    /**
     * Delete a specific article using ID
     * @param int $iArticleNo
     * @return mixed
     */
    public function deleteByID(int $iArticleNo)
    {
        return $this->getById($iArticleNo)
            ->delete();
    }
}
