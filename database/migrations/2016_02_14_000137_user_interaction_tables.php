<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserInteractionTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('postables', function (Blueprint $table) {
            $table->integer('post_id');
            $table->integer('postable_id');
            $table->string('postable_type');
            $table->timestamps();
        });

        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('eventables', function (Blueprint $table) {
            $table->integer('event_id');
            $table->integer('eventable_id');
            $table->string('eventable_type');
            $table->timestamps();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('commentable_id');
            $table->string('commentable_type');
            $table->timestamps();
        });

        Schema::create('replies', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('invites', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('connections', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
        });

        Schema::create('taggables', function (Blueprint $table) {
            $table->integer('tag_id');
            $table->integer('taggable_id');
            $table->string('taggable_type');
            $table->timestamps();
        });

        Schema::create('likes', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('likeable_id');
            $table->string('likeable_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('posts');
        Schema::drop('events');
        Schema::drop('comments');
        Schema::drop('replies');
        Schema::drop('invites');
        Schema::drop('connections');
        Schema::drop('tags');
        Schema::drop('likes');
    }
}
