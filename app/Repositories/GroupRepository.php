<?php

namespace App\Repositories;

use App\Group;

class GroupRepository
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
        return Group::with('organizations.users')->get();
    }
}
