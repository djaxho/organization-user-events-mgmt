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
        'name', 'label',
    ];

    /**
     * The roles that own the permission.
     */
    public function roles()
    {
        return $this->belongsToMany('App\Role');
    }
}
