<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Permission;
use App\Repositories\PermissionRepository;

class PermissionController extends Controller
{
    protected $permissions;

    public function __construct(PermissionRepository $permissions)
    {
        $this->permissions = $permissions;
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

        if ($label && $name) {

            $permission = Permission::create([
                'name' => $name,
                'label' => $label
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
        $permission = Permission::find($id);

        $name = $request->input('name', '');
        $label = $request->input('label', '');

        if ($name) {
            $permission->name = $name;
        }

        if ($label) {
            $permission->label = $label;
        }

        $permission->save();

        return $permission;
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
