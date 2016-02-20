<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'phone', 'phone2', 'address1street', 'address1city', 'address1state', 'address1zip', 'address2street', 'address2city', 'address2state', 'address2zip', 'about'
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
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The organizations that the user belongs to.
     */
    public function organizations()
    {
        return $this->belongsToMany(Organization::class);
    }

    /**
     * The groups this user belongs to.
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class);
    }

    /**
     * The roles that belong to the user.
     */
    public function roles()
    {
        return $this->belongsToMany(Role::class);
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

    /**
     * attach user to a group. (id or obj)
     */
    public function attachGroup($group)
    {
        return $this->groups()->attach($group);
    }

    /**
     * detach user to a group. (id or obj)
     */
    public function detachGroup($group)
    {
        return $this->groups()->detach($group);
    }

    /**
     * attach a role to the user.  (id or obj)
     * Delete all prev roles.
     */
    public function attachRole($role)
    {
//        $this->roles()->detach();

        return $this->roles()->attach($role);
    }

    /**
     * detach a role to the user.  (id or obj)
     * Delete all prev roles.
     */
    public function detachRole($role)
    {
        return $this->roles()->detach($role);
    }

    public function hasOrganization($organization)
    {
        if (is_string($organization)) {
            return $this->organizations->contains('name', $organization);
        }

        return !! $organization->intersect($this->organizations)->count();
    }

    public function hasGroup($group)
    {
        if (is_string($group)) {
            return $this->groups->contains('name', $group);
        }

        return !! $group->intersect($this->groups)->count();
    }

    public function hasRole($role)
    {
        if (is_string($role)) {
            return $this->roles->contains('name', $role);
        }

        return !! $role->intersect($this->roles)->count();
    }
}
