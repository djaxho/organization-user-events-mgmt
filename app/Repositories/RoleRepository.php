<?php

namespace App\Repositories;

use App\Role;

class RoleRepository
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
        return Role::with('permissions', 'users')->get();
    }
}
