<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    /**
     * Get all of the posts that are assigned this tag.
     */
    public function comments()
    {
        return $this->morphedByMany('App\Comment', 'taggable');
    }

    /**
     * Get all of the events that are assigned this tag.
     */
    public function events()
    {
        return $this->morphedByMany('App\Event', 'taggable');
    }

    /**
     * Get all of the groups that are assigned this tag.
     */
    public function groups()
    {
        return $this->morphedByMany('App\Group', 'taggable');
    }

    /**
     * Get all of the organizations that are assigned this tag.
     */
    public function organizations()
    {
        return $this->morphedByMany('App\Organization', 'taggable');
    }

    /**
     * Get all of the posts that are assigned this tag.
     */
    public function posts()
    {
        return $this->morphedByMany('App\Post', 'taggable');
    }

    /**
     * Get all of the replies that are assigned this tag.
     */
    public function replies()
    {
        return $this->morphedByMany('App\Reply', 'taggable');
    }

    /**
     * Get all of the users that are assigned this tag.
     */
    public function users()
    {
        return $this->morphedByMany('App\User', 'taggable');
    }
}
