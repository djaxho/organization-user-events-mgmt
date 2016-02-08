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
