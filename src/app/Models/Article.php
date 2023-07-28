<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\ArticleComment;


class Article extends Model
{
    use HasFactory;

    protected $primaryKey = 'article_no';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content', 'user_no',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_no', 'user_no');
    }

    public function comments()
    {
        return $this->hasMany(ArticleComment::class, 'article_no', 'article_no');
    }
}
