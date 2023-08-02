<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleCommentRequest;
use App\Http\Resources\ArticleCommentResource;
use App\Services\ArticleCommentService;

/**
 * Article Comment Controller
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleCommentController extends Controller
{
    /**
     * @var ArticleCommentService $oCommentService
     */
    protected $oCommentService;

    /**
     * Constructor
     * @param ArticleCommentService $oCommentService
     */
    public function __construct(ArticleCommentService $oCommentService)
    {
        $this->oCommentService = $oCommentService;
    }

    /**
     * Store the Article Comment to Database
     * @param StoreArticleCommentRequest $oRequest
     * @return ArticleCommentResource
     */
    public function store(StoreArticleCommentRequest $oRequest)
    {
        $aArticleCommentData = $oRequest->validated();
        $oArticleComment = $this->oCommentService->createComment($aArticleCommentData);

        return new ArticleCommentResource($oArticleComment);
    }
}
