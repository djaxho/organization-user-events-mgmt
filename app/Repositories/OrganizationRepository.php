<?php

namespace App\Repositories;

use App\Organization;

class OrganizationRepository
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
        return Organization::with('groups', 'users')->get();
    }
}
