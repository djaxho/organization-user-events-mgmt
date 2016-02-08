<?php

namespace App\Repositories;

use App\User;

class UserRepository
{
    /**
     * Get all of the users
     *
     * @param  User  $user
     * @return Collection
     */
    public function all()
    {
        // find all users with their associations
        return User::with('roles.permissions', 'organizations')->get();
    }
}
