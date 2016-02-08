<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\User;
use App\Role;

class AdminController extends Controller
{
    private $request;
    private $modelName;
    private $validModels = ['organizations', 'groups', 'users', 'roles', 'permissions'];

    public function __construct(Request $request, UserRepository $users)
    {
        $this->request = $request;
        $this->users = $users;
    }

    private function modelRequestGate($model)
    {
        if(!in_array($model, $this->validModels)) {
            abort(404);
        }
    }

    public function getModelAdmin($model)
    {
        $this->modelName = $model;

        $this->modelRequestGate($this->modelName);

        return call_user_func(array($this, $this->modelName));
    }

    public function organizations()
    {
    	return view('admin.organizations');
    }

    public function groups()
    {
    	return view('admin.groups');
    }

    public function users()
    {
        $data = [];

        $data['users'] = json_encode($this->users->allUsers());
        $data['roles'] = json_encode([1,2,3]);

        return view('admin.users', $data);
    }

    public function roles()
    {
    	return view('admin.roles');
    }

    public function permissions()
    {
    	return view('admin.permissions');
    }
}
