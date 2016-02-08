<?php

namespace App\Repositories;

use App\Permission;

class PermissionRepository
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
        return Permission::with('roles.users')->get();
    }
}
