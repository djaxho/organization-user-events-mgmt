<?php

use App\User;
use App\Organization;

Route::get('/', function () {
    return view('welcome');
});



/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
*/
Route::group(['middleware' => 'web'], function () {
    Route::auth();

    Route::get('/home', 'HomeController@index');

//    // admin routes
//    Route::group(['prefix' => 'admin'], function () {
//
//        Route::get('organizations', 'AdminController@organizations');
//        Route::get('groups', 'AdminController@groups');
//        Route::get('users', 'AdminController@users');
//        Route::get('roles', 'AdminController@roles');
//        Route::get('permissions', 'AdminController@permissions');
//
//    });

    // Admin routes
    Route::get('/admin/{model}', 'AdminController@getModelAdmin');

    // profile routes
    Route::get('users/{id}', function ($id) {

        $data = ['user' => User::find($id)];
        return view('profiles.user', $data);

    });

    Route::get('organizations/{id}', function ($id) {

        $data = ['organization' => Organization::find($id)];
        return view('profiles.organization', $data);

    });

    // API Routes
    Route::resource('organization', 'OrganizationController');
    Route::resource('group', 'GroupController');
    Route::resource('user', 'UserController');
    Route::post('user/updateRole', 'UserController@updateRole');
    Route::resource('role', 'RoleController');
    Route::resource('permission', 'PermissionController');
});
