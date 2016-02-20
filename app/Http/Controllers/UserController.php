<?php

namespace App\Http\Controllers;

use App\User;
use App\Role;
use App\Organization;
use App\Group;
use App\Http\Requests;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\Repositories\OrganizationRepository;
use App\Repositories\GroupRepository;
use App\Repositories\RoleRepository;





class UserController extends Controller
{
    protected $users;
    protected $roles;
    protected $organizations;
    protected $groups;

    /**
     * Create a new controller instance.
     *
     * @param  UserRepository  $users
     * @return void
     */
    public function __construct(UserRepository $users, RoleRepository $roles,  OrganizationRepository $organizations,  GroupRepository $groups)
    {
        $this->users = $users;
        $this->roles = $roles;
        $this->organizations = $organizations;
        $this->groups = $groups;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $users = $this->users->all();
        $organizations = $this->organizations->all();
        $groups = $this->groups->all();
        $roles = $this->roles->all();

        $data['users'] = ($users) ? json_encode($users) : json_encode([]);
        $data['organizations'] = ($organizations) ? json_encode($organizations) : json_encode([]);
        $data['groups'] = ($groups) ? json_encode($groups) : json_encode([]);
        $data['roles'] = ($roles) ? json_encode($roles) : json_encode([]);

        return view('admin.users', $data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request->input('name', '');
        $email = $request->input('email', '');
        $roles = $request->input('roles', '');
        $organizations = $request->input('organizations', '');
        $groups = $request->input('groups', '');
        $pswd = $request->input('password', '');
        $pswd_conf = $request->input('password_confirmation', '');

        if ($name && $email && $roles && $organizations && $groups && $pswd && $pswd_conf) {

            if ($pswd === $pswd_conf) {

                $user = User::create([
                    'name' => $name,
                    'email' => $email,
                    'password' => bcrypt($pswd),
                ]);

                if(is_array($request->input('roles'))) {
                    foreach($request->input('roles') as $id) {
                        $user->attachRole($id);
                    }
                }

                if(is_array($request->input('organizations'))) {
                    foreach($request->input('organizations') as $id) {
                        $user->attachOrganization($id);
                    }
                }

                if(is_array($request->input('groups'))) {
                    foreach($request->input('groups') as $id) {
                        $user->attachGroup($id);
                    }
                }

            } else {
                $status = 'The passwords entered did not match!';
            }

        } else {
            $status = 'You failed to fill out all fields';
        }

        if(isset($status)) {
            session()->flash('status', $status);
        }

        return back()->withInput();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $user = User::with('roles.permissions', 'organizations.groups', 'groups')->find($id);





//        echo '<pre>';
//        echo '<b>current Groups</b><br>';
//        print_r($user->toArray()['groups']);
//
//        echo '<b>current Organizations</b><br>';
//        print_r($user->toArray()['organizations']);





        $data = ['user' => $user];

        if($request->wantsJson()) {
            return response()->json($user);
        } else {
            return view('profiles.user', $data);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $data = [];

        $user = User::with('roles.permissions', 'organizations.groups', 'groups')->find($id);
        $roles = $this->roles->all();
        $organizations = $this->organizations->all();
        $groups = [];
        foreach($user->organizations as $organization){
            foreach($organization->groups as $group) {
                $groups[$group->id] = $group->toArray();
            }
        }

        $data['primaryModel'] = 'user';
        $data['primaryModelData'] = $user->toArray();
        $data['secondaryModelData'] = [
            'roles' => $roles->toArray(),
            'organizations' => $organizations->toArray(),
            'groups' => $groups
        ];

        unset($data['primaryModelData']['created_at'],$data['primaryModelData']['updated_at']);

        return view('admin.edit', $data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);

        $user->fill($request->all());

        $user->roles()->detach();
        $user->organizations()->detach();
        $user->groups()->detach();

        if(is_array($request->input('roles'))) {
            foreach($request->input('roles') as $id) {
                $user->attachRole($id);
            }
        }

        if(is_array($request->input('organizations'))) {
            foreach($request->input('organizations') as $id) {
                $user->attachOrganization($id);
            }
        }

        if(is_array($request->input('groups'))) {
            foreach($request->input('groups') as $id) {
                $user->attachGroup($id);
            }
        }

        $user->push();

        if($request->wantsJson()) {
            return $user;
        } else {
            return back()->withInput();
        }

    }

    public function updateRole(Request $request)
    {
        
        if ($request->isMethod('post')) {
    
            $contactId = $request->input('_contact_id', '');
            $roleId = $request->input('_role_id', '');

            if ($contactId && $roleId) {
                $user = User::find($contactId)->attachRole($roleId);
            }
                
            return $user;

        } else {
            
            return false;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::destroy($id);
    }
}
