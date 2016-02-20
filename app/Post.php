<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Get all of the groups that are assigned this post
     */
    public function groups()
    {
        return $this->morphedByMany('App\Group', 'postable');
    }

    /**
     * Get all of the organizations that are assigned this post
     */
    public function organizations()
    {
        return $this->morphedByMany('App\Organization', 'postable');
    }

    /**
     * Get all of the likes
     */
    public function likes()
    {
        return $this->morphMany('App\Like', 'likeable');
    }

    /**
     * Get all of the tags
     */
    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }

    /**
     * Get all of the comments
     */
    public function comments()
    {
        return $this->morphMany('App\Comment', 'commentable');
    }
}
