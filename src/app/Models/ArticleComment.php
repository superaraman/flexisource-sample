<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Article;

class ArticleComment extends Model
{
    use HasFactory;

    protected $primaryKey = 'comment_no';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_no', 'user_no');
    }

    public function article()
    {
        return $this->belongsTo(Article::class, 'article_no', 'article_no');
    }
}
