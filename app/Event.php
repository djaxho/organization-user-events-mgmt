<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at', 'deleted_at', 'event_date'];

    /**
     * The users that are able to edit this event
     */
    public function editors()
    {
        return $this->belongsToMany('App\User', 'event_editors');
    }

    /**
     * The users that are attending this event
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    /**
     * Get all of the groups that are assigned this event
     */
    public function groups()
    {
        return $this->morphedByMany('App\Group', 'eventable');
    }

    /**
     * Get all of the organizations that are assigned this event
     */
    public function organizations()
    {
        return $this->morphedByMany('App\Organization', 'eventable');
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

    /**
     * Register user for this event. (id or obj)
     */
    public function attachUser($user)
    {
        return $this->users()->attach($user);
    }

    /**
     * Unregister user from this event. (id or obj)
     */
    public function detachUser($user)
    {
        return $this->users()->detach($user);
    }

    // Check if user is attending this event
    public function hasUser($user)
    {
        if (is_string($user)) {
            return $this->users->contains('name', $user);
        }

        return !! $user->intersect($this->users)->count();
    }

    /**
     * Register user for this event. (id or obj)
     */
    public function attachEditor($user)
    {
        return $this->editors()->attach($user);
    }

    /**
     * Unregister user from this event. (id or obj)
     */
    public function detachEditor($user)
    {
        return $this->editors()->detach($user);
    }
}
