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
     * Get the likes this user has contributed
     */
    public function likes()
    {
        return $this->hasMany('App\Like');
    }

    /**
     * Get all of the tags applied to this user
     */
    public function tags()
    {
        return $this->morphToMany('App\Tag', 'taggable');
    }

    /**
     * Get all of the comments made by user
     */
    public function comments()
    {
        return $this->hasMany('App\Comment');
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
     * The events this user can edit
     */
    public function editableEvents()
    {
        return $this->belongsToMany(Event::class, 'event_editors');
    }

    /**
     * The events this user is attending
     */
    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    /**
     * The roles this user has
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

    /**
     * When user commits to attending event (id or obj)
     */
    public function attachEvent($event)
    {
        return $this->events()->attach($event);
    }

    /**
     * When user Un-commits from attending event (id or obj)
     */
    public function detachEvent($event)
    {
        return $this->events()->detach($event);
    }

    /**
     * When user commits to attending event (id or obj)
     */
    public function attachEditableEvent($event)
    {
        return $this->editableEvents()->attach($event);
    }

    /**
     * When user Un-commits from attending event (id or obj)
     */
    public function detachEditableEvent($event)
    {
        return $this->editableEvents()->detach($event);
    }
}
