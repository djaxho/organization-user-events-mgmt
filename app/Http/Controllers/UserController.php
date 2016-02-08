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
    /**
     * The user repository instance.
     *
     * @var UserRepository
     */
    protected $users;

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
        $role = $request->input('role', '');
        $organization = $request->input('organization', '');
        $group = $request->input('group', '');
        $pswd = $request->input('password', '');
        $pswd_conf = $request->input('password_confirmation', '');

        if ($name && $email && $role && $organization && $group && $pswd && $pswd_conf) {

            if ($pswd === $pswd_conf) {

                $user = User::create([
                    'name' => $name,
                    'email' => $email,
                    'password' => bcrypt($pswd),
                ]);
                $user->attachOrganization($organization);
                $user->attachGroup($group);
                $user->attachRole($role);

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
    public function show($id)
    {
        $user = User::with('roles.permissions', 'organizations.groups', 'groups')->find($id);
        
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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

        $name = $request->input('name', '');
        $email = $request->input('email', '');

        if ($name) {
            $user->name = $name;
        }

        if ($email) {
            $user->email = $email;
        }

        $user->save();

        return $user;
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
