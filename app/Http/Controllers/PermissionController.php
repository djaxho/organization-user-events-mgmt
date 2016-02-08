<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Permission;
use App\Repositories\PermissionRepository;
use App\Repositories\RoleRepository;

class PermissionController extends Controller
{
    protected $permissions;
    protected $roles;

    public function __construct(PermissionRepository $permissions, RoleRepository $roles)
    {
        $this->permissions = $permissions;
        $this->roles = $roles;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permissions = $this->permissions->all();

        $data['permissions'] = ($permissions) ? json_encode($permissions) : json_encode([]);

        return view('admin.permissions', $data);
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

            $permission = Permission::create([
                'name' => $name,
                'label' => $label,
                'about' => $about
            ]);

            if(!$permission) {
                $status = 'Failed to add permission to the system.';
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
        $permission = Permission::with('roles.users')->find($id);
        
        return response()->json($permission);
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

        $permission = Permission::with('roles')->find($id);
        $roles = $this->roles->all();

        $data['primaryModel'] = 'permission';
        $data['primaryModelData'] = $permission->toArray();
        $data['secondaryModelData'] = [
            'roles' => $roles->toArray()
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
        $permission = Permission::find($id);

        $permission->fill($request->all());

        $permission->roles()->detach();

        if(is_array($request->input('roles'))) {
            foreach($request->input('roles') as $id) {
                $permission->attachRole($id);
            }
        }

        $permission->push();

        if($request->wantsJson()) {
            return $permission;
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
        return Permission::destroy($id);
    }
}
