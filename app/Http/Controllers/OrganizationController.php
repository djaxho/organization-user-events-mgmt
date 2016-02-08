<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Organization;
use App\User;
use App\Repositories\OrganizationRepository;
use App\Repositories\GroupRepository;

class OrganizationController extends Controller
{
    protected $organizations;
    protected $groups;

    public function __construct(OrganizationRepository $organizations, GroupRepository $groups)
    {
        $this->organizations = $organizations;
        $this->groups = $groups;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organizations = $this->organizations->all();

        $data['organizations'] = ($organizations) ? json_encode($organizations) : json_encode([]);

        return view('admin.organizations', $data);
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

            $organization = Organization::create([
                'name' => $name,
                'label' => $label,
                'about' => $about
            ]);

            if(!$organization) {
                $status = 'Failed to add organization to the system.';
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
        $organization = Organization::with('groups', 'users')->find($id);
        
        return response()->json($organization);
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

        $organization = Organization::with('groups')->find($id);
        $groups = $this->groups->all();

        $data['primaryModel'] = 'organization';
        $data['primaryModelData'] = $organization->toArray();
        $data['secondaryModelData'] = [
            'groups' => $groups->toArray()
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
        $organization = Organization::find($id);

        $organization->fill($request->all());

        $organization->groups()->detach();

        if(is_array($request->input('groups'))) {
            foreach($request->input('groups') as $id) {
                $organization->attachGroup($id);
            }
        }

        $organization->push();

        if($request->wantsJson()) {
            return $organization;
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
        return Organization::destroy($id);
    }
}
