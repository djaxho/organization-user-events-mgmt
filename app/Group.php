<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'label', 'about'
    ];

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
     * Get all of the posts
     */
    public function posts()
    {
        return $this->morphToMany('App\Post', 'postable');
    }

    /**
     * Get all of the events
     */
    public function events()
    {
        return $this->morphToMany('App\Event', 'eventable');
    }

    /**
     * Get the organization that owns the group.
     */
    public function organizations()
    {
        return $this->belongsToMany('App\Organization');
    }

    /**
     * The users that are in this group.
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    /**
     * attach user to this organization. (id or obj)
     */
    public function attachUser($user)
    {
        return $this->users()->attach($user);
    }

    /**
     * detach user from this organization. (id or obj)
     */
    public function detachUser($user)
    {
        return $this->users()->detach($user);
    }

    public function hasUser($user)
    {
        if (is_string($user)) {
            return $this->users->contains('name', $user);
        }

        return !! $user->intersect($this->users)->count();
    }

    /**
     * attach user to an organization. (id or obj)
     */
    public function attachOrganization($org)
    {
        return $this->organizations()->attach($org);
    }

    /**
     * detach user to an organization. (id or obj)
     */
    public function detachOrganization($org)
    {
        return $this->organizations()->detach($org);
    }

    public function hasOrganization($organization)
    {
        if (is_string($organization)) {
            return $this->organizations->contains('name', $organization);
        }

        return !! $organization->intersect($this->organizations)->count();
    }
}
