<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Services\ArticleService;

/**
 * Article Controller
 * @author John Carlo Araman
 * @copyright (c) 2023
 */
class ArticleController extends Controller
{
    /**
     * @var ArticleService $oArticleService
     */
    protected $oArticleService;

    /**
     * Constructor
     * @param ArticleService $oArticleService
     */
    public function __construct(ArticleService $oArticleService)
    {
        $this->oArticleService = $oArticleService;
    }

    /**
     * Store the article to the database
     * @param StoreArticleRequest $oRequest
     * @return ArticleResource
     */
    public function store(StoreArticleRequest $oRequest)
    {
        $aArticleData = $oRequest->validated();
        $oArticle = $this->oArticleService->createArticle($aArticleData);
	    return new ArticleResource($oArticle);
    }

    /**
     * Show all the articles (without pagination, assuming the dataset is very small)
     * Not recommended for very large scale of data
     * For Test App Only
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function showAll()
    {
        $oArticles = $this->oArticleService->getAllArticles();
	    return ArticleResource::collection($oArticles);
    }

    /**
     * Show Specific Article with Comments
     * @param int $iArticleNo
     * @return ArticleResource
     */
    public function show(int $iArticleNo)
    {
        $oArticle = $this->oArticleService->getArticleByID($iArticleNo);
        return new ArticleResource($oArticle);
    }

    /**
     * Delete a Specific Article
     * @param int $iArticleNo
     * @return mixed
     */
    public function destroy(int $iArticleNo)
    {
        return $this->oArticleService->deleteArticleByID($iArticleNo);
    }
}
