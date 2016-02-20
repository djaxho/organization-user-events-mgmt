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

    Route::get('organizations/{id}', function ($id) {

        $data = ['organization' => Organization::find($id)];
        return view('profiles.organization', $data);

    });

    // API Routes
    Route::resource('organizations', 'OrganizationController');
    Route::resource('groups', 'GroupController');
    Route::resource('users', 'UserController');
    Route::post('users/updateRole', 'UserController@updateRole');
    Route::resource('roles', 'RoleController');
    Route::resource('permissions', 'PermissionController');
});
