<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
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
     * The roles that own the permission.
     */
    public function roles()
    {
        return $this->belongsToMany('App\Role');
    }

    public function attachRole($role)
    {
        return $this->roles()->attach($role);
    }

    public function detachRole($role)
    {
        return $this->roles()->detach($role);
    }
}
