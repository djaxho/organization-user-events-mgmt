<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Repositories\RoleRepository;
use App\Repositories\PermissionRepository;

class RoleController extends Controller
{
    protected $roles;
    protected $permissions;

    public function __construct(RoleRepository $roles, PermissionRepository $permissions)
    {
        $this->roles = $roles;
        $this->permissions = $permissions;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $roles = $this->roles->all();

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

        $role = Role::with('permissions')->find($id);
        $permissions = $this->permissions->all();

        $data['primaryModel'] = 'role';
        $data['primaryModelData'] = $role->toArray();
        $data['secondaryModelData'] = [
            'permissions' => $permissions->toArray()
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

        if(is_array($request->input('permissions'))) {
            foreach($request->input('permissions') as $id) {
                $role->attachPermission($id);
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
