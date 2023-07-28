<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticleCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_comments', function (Blueprint $table) {
            $table->id('comment_no');
            $table->unsignedBigInteger('user_no');
            $table->unsignedBigInteger('article_no');
            $table->text('content');
            $table->timestamps();

            // Add foreign key constraints for user_no and article_no columns
            $table->foreign('user_no')->references('user_no')->on('users')->onDelete('cascade');
            $table->foreign('article_no')->references('article_no')->on('articles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article_comments');
    }
}
