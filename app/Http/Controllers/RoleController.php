<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\RoleRepository;
use App\Repositories\PermissionRepository;
use App\Repositories\UserRepository;

class RoleController extends Controller
{
    protected $roles;
    protected $permissions;

    public function __construct(RoleRepository $roles, PermissionRepository $permissions, UserRepository $users)
    {
        $this->roles = $roles;
        $this->permissions = $permissions;
        $this->users = $users;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permissions = $this->permissions->all();
        $roles = $this->roles->all();

        $data['permissions'] = ($permissions) ? json_encode($permissions) : json_encode([]);
        $data['roles'] = ($roles) ? json_encode($roles) : json_encode([]);

        return view('admin.roles', $data);
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
        $label = $request->input('label', '');
        $about = $request->input('about', '');

        if ($label && $name && $about) {

            $role = Role::create([
                'name' => $name,
                'label' => $label,
                'about' => $about
            ]);

            if(is_array($request->input('permissions'))) {
                foreach($request->input('permissions') as $id) {
                    $role->attachPermission($id);
                }
            }

            if(!$role) {
                $status = 'Failed to add role to the system.';
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
        $role = Role::with('permissions', 'users')->find($id);
        
        return response()->json($role);
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

        $role = Role::with('permissions', 'users')->find($id);
        $permissions = $this->permissions->all();
        $users = $this->users->all();

        $data['primaryModel'] = 'role';
        $data['primaryModelData'] = $role->toArray();
        $data['secondaryModelData'] = [
            'permissions' => $permissions->toArray(),
            'users' => $users->toArray()
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
        $role = Role::find($id);

        $role->fill($request->all());
        $role->permissions()->detach();
        $role->users()->detach();

        if(is_array($request->input('permissions'))) {
            foreach($request->input('permissions') as $id) {
                $role->attachPermission($id);
            }
        }

        if(is_array($request->input('users'))) {
            foreach($request->input('users') as $id) {
                $role->attachUser($id);
            }
        }

        $role->push();

        if($request->wantsJson()) {
            return $role;
        } else {
            return back()->withInput();
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
        return Role::destroy($id);
    }
}
