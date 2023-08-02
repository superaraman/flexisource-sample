<?php

namespace App\Services;

use App\Repositories\ArticleCommentRepository;

/**
 * Service for Article Comments
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleCommentService
{
    /**
     * @var ArticleCommentRepository $oCommentRepository
     */
    protected $oCommentRepository;

    /**
     * Constructor
     * @param ArticleCommentRepository $oCommentRepository
     */
    public function __construct(ArticleCommentRepository $oCommentRepository)
    {
        $this->oCommentRepository = $oCommentRepository;
    }

    /**
     * Saves the Article Comment to the Database
     * @param array $aCommentData
     * @return \App\Models\ArticleComment
     */
    public function createComment(array $aCommentData)
    {
        return $this->oCommentRepository->create($aCommentData);
    }
}
