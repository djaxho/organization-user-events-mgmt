<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Group;
use App\Repositories\OrganizationRepository;
use App\Repositories\GroupRepository;

class GroupController extends Controller
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
        $groups = $this->groups->all();

        $data['groups'] = ($groups) ? json_encode($groups) : json_encode([]);

        return view('admin.groups', $data);
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

            $group = Group::create([
                'name' => $name,
                'label' => $label,
                'about' => $about
            ]);

            if(!$group) {
                $status = 'Failed to add group to the system.';
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
        $group = Group::with('organizations.users')->find($id);
        
        return response()->json($group);
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

        $group = Group::with('organizations')->find($id);
        $organizations = $this->organizations->all();

        $data['primaryModel'] = 'group';
        $data['primaryModelData'] = $group->toArray();
        $data['secondaryModelData'] = [
            'organizations' => $organizations->toArray()
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
        $group = Group::find($id);

        $group->fill($request->all());

        $group->organizations()->detach();

        if(is_array($request->input('organizations'))) {
            foreach($request->input('organizations') as $id) {
                $group->attachOrganization($id);
            }
        }

        $group->push();

        if($request->wantsJson()) {
            return $group;
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
        return Group::destroy($id);
    }
}
