<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    protected $toTruncate = ['users'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    	// foreach ($this->toTruncate as $table) {
    	// 	DB::table($table)->truncate();
    	// }
         
        // Set up some roles/permissions
        factory('App\Role', 10)->create();
        factory('App\Permission', 20)->create();

        // Attach multiple(possibly single) permissions to each role
        foreach (\App\Role::get() as $role) {
            $alreadyAdded = [];
            for ($i=0; $i < rand(1,5); $i++) {
                $rand = rand(1, 20);
                if (!in_array($rand, $alreadyAdded)) {
                    $alreadyAdded[] = $rand;
                    $role->attachPermission($rand);
                }
            }            
        }

        
        // Create organizations
        factory('App\Organization', 30)->create();
        // Create users
        factory('App\Group', 60)->create();

        // Attach multiple(possibly single) Groups to each organization
        foreach (\App\Organization::get() as $organization) {
            $alreadyAdded = [];
            for ($i=0; $i < rand(1,25); $i++) {
                $rand = rand(1, 50);
                if (!in_array($rand, $alreadyAdded)) {
                    $alreadyAdded[] = $rand;
                    $organization->attachGroup($rand);
                }
            }            
        }

        // Create users
        factory('App\User', 100)->create();

        // Attach multiple(possibly single) roles to each user
        foreach (\App\User::get() as $user) {
            // Assign roles to user
            $alreadyAdded = [];
            for ($i=0; $i < rand(1,3); $i++) {
                $rand = rand(1, 10);
                if (!in_array($rand, $alreadyAdded)) {
                    $alreadyAdded[] = $rand;
                    $user->attachRole($rand);
                }
            }
            // Join organizations
            $alreadyAdded = [];
            for ($i=0; $i < 1; $i++) {
                $rand = rand(1, 20);
                if (!in_array($rand, $alreadyAdded)) {
                    $alreadyAdded[] = $rand;
                    $user->attachOrganization($rand);
                }
            }

            // Join clubs within the current organization
            $currentOrg = $user->organizations->first();

            $noOfGroupsToJoin = min(10, $currentOrg->groups->count());

            $randomGroupsToJoin = $currentOrg->groups->random($noOfGroupsToJoin);

            foreach ($randomGroupsToJoin as $group) {
                $user->detachGroup($group);
                $user->attachGroup($group);
            }
        }

        // get all organizations
        $organizations = \App\Organization::get();
        // use up to 10 organizations
        $noOfOrgsToUse = min(10, $organizations->count());
        // get random organizations
        $randomOrganizations = $organizations->random($noOfOrgsToUse);
        
        // Save an event for each of the organizations
        foreach ($randomOrganizations as $organization) {
            $organization->events()->save(
                factory('App\Event')->create()
            );
        }

        // get all groups
        $groups = \App\Group::get();
        // use up to 10 groups
        $noOfGroupsToUse = min(10, $groups->count());
        // get random groups
        $randomgroups = $groups->random($noOfGroupsToUse);
        
        // Save an event for each of the groups
        foreach ($randomgroups as $group) {
            $group->events()->save(
                factory('App\Event')->create()
            );
        }



        // add users in the organizations to some events
        $organizations = \App\Organization::get();

        foreach ($organizations as $organization) {
            
            if($organization->events->count() && $organization->users->count()) {

                foreach ($organization->events as $event) {

                    $usersToAddToEvent = $organization->users->random(min(5,$organization->users->count()));
                    
                    foreach ($usersToAddToEvent as $user) {
                        $user->detachEvent($event);
                        $user->attachEvent($event);
                    }

                }

            }
        }

        // add users in the groups to some events
        $groups = \App\Group::get();

        foreach ($groups as $group) {
            
            if($group->events->count() && $group->users->count()) {

                foreach ($group->events as $event) {
                    
                    $usersToAddToEvent = $group->users->random(min(5,$group->users->count()));
                    
                    foreach ($usersToAddToEvent as $user) {
                        $user->detachEvent($event);
                        $user->attachEvent($event);
                    }

                }

            }
        }

        // add editors to events
        $events = \App\Event::get();
        foreach ($events as $event) {
            
            if($event->users->count() > 0) {
                $usersToMakeIntoEditors = $event->users->random(min(2,$event->users->count()));
                if ($usersToMakeIntoEditors) {
                    foreach ($usersToMakeIntoEditors as $user) {
                        $event->attachEditor($user);
                    }
                }
            }
        }


        // $this->call(OrganizationsTableSeeder::class); 
        // $this->call(GroupsTableSeeder::class); 


    }
}
