@extends('layouts.master')

	@section('head')
		
	@endsection

	@section('content')

	<div class="card">
        <div class="card-header">

            <div class="card-title">
                <div class="title">@yield('main-panel-title', 'System Admin')</div>
            </div>
            
        </div>
        <div class="card-body">
			<div ng-app="myapp" ng-controller="MyController" ng-init="init()">
				
				<ul class="nav nav-tabs">
	            	<li class="@yield('usersActive', '')"><a href="/admin/users">Users</a></li>
	            	<li class="@yield('organizationsActive', '')"><a href="/admin/organizations">Organizations</a></li>
	            	<li class="@yield('groupsActive', '')"><a href="/admin/groups">Groups</a></li>
	            	<li class="@yield('rolesActive', '')"><a href="/admin/roles">Roles</a></li>
	            	<li class="@yield('permissionsActive', '')"><a href="/admin/permissions">Permissions</a></li>
	            </ul>

	            <br><br>
				@yield('model')
					
			</div>
		</div>
    </div>
    
	@endsection