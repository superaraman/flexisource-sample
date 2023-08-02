<?php

namespace App\Services;

use App\Repositories\ArticleRepository;

/**
 * Service for Articles
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleService
{
    /**
     * @var ArticleRepository $oArticleRepository
     */
    protected $oArticleRepository;

    /**
     * Constructor
     * @param ArticleRepository $oArticleRepository
     */
    public function __construct(ArticleRepository $oArticleRepository)
    {
        $this->oArticleRepository = $oArticleRepository;
    }

    /**
     * Saves the Article to the Database
     * @param array $aArticleData
     * @return \App\Models\Article
     */
    public function createArticle(array $aArticleData)
    {
        return $this->oArticleRepository->create($aArticleData);
    }

    /**
     * Get All the Articles
     * @return \Illuminate\Database\Eloquent\Collection|array<\App\Models\Article>
     */
    public function getAllArticles()
    {
        return $this->oArticleRepository->getAll();
    }

    /**
     * Get Specific Article
     * @param mixed $id
     * @return mixed
     */
    public function getArticleByID(int $iArticleNo)
    {
        $oArticle = $this->oArticleRepository->getByIDwithComments($iArticleNo);
        return $oArticle;
    }

    /**
     * Delete a specific Article
     * @param int $iArticleNo
     * @return mixed
     */
    public function deleteArticleByID(int $iArticleNo)
    {
        return $this->oArticleRepository->deleteByID($iArticleNo);
    }
}
