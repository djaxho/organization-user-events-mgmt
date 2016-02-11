<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
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
     * The permissions that are enjoyed by this role.
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    /**
     * The users that are assigned this role.
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }

    public function attachUser($user)
    {
        return $this->users()->attach($user);
    }

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

    public function attachPermission($permission)
    {
        return $this->permissions()->attach($permission);
    }

    public function detachPermission($permission)
    {
        return $this->permissions()->detach($permission);
    }

    public function hasPermission($permission)
    {
        if (is_string($permission)) {
            return $this->permissions->contains('name', $permission);
        }

        return !! $permission->intersect($this->permissions)->count();
    }


}
