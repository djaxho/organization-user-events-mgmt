@extends('admin.layouts.dashboard')

	@section('breadcrumbs')

		<ol class="breadcrumb">
		    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
	        <li><a href="/admin/users"> Users</a></li>
		</ol>
		
	@endsection

	@section('usersActive', 'active')

	@section('model')

		<div class="table-responsive">
		  	<table datatable="ng" dt-options="dtOptions" class="table table-striped">
				<thead>
				  <tr>
				  	<th>Id</th>
				  	<th>Name</th>
				  	<th>Email</th>
				  	<th>Role</th>
				  	<th>Organization</th>
				  	<th></th>
				  </tr>
				</thead>

				<tbody id="model-data" style="display:none">
					<tr ng-repeat="user in users">

						<td ng-model="user.id">@{{user.id}}</td>

						<td>
							<a  ng-hide="user.showEdit" href="/users/@{{user.id}}">@{{user.name}}</a>
							<input ng-show="user.showEdit" class="form-control" ng-model="user.name">
						</td>

						<td>
							<span ng-hide="user.showEdit">@{{user.email}}</span>
							<input ng-show="user.showEdit" class="form-control" ng-model="user.email">
						</td>

						<td>
							<span ng-hide="user.showEdit">@{{user.roles[0].label}}</span>
							<form ng-show="user.showEdit" class="form-inline">
								<select class="form-control"
										ng-model="user.role"
										ng-options="item.id as item.label for item in roles"
										ng-init="user.role = user.roles[0].id">
										<option value="">Select Role</option>
								</select>
								
							</form>
						</td>

						<td>
							<a href="/organizations/@{{user.organizations[0].id}}">@{{user.organizations[0].name}}</a>
						</td>

						<td class="text-right">
							<span class="btn btn-default btn-sm" ng-show="user.showEdit" ng-click="user.showEdit = false"><i class="fa fa-times"></i> Exit Edit Mode</span>
							<span ng-show="user.showEdit" class="btn btn-info btn-sm" ng-click="updateUser(user)"><i class="fa fa-floppy-o"></i> @{{user.saveDetailsButton ? user.saveDetailsButton : "Save"}}</span>
							<span class="btn btn-default btn-sm" ng-hide="user.showEdit" ng-click="user.showEdit = true"><i class="fa fa-pencil"></i> Quick Edit</span>
							<span class="btn btn-danger btn-sm" ng-click="deleteUser($index, user)"><i class="fa fa-trash-o"></i> Delete</span>
						</td>
					</tr>	
				</tbody>
			</table>
		</div>
		<div>
			@include('admin.partials.register.user')
		</div>
	@endsection

	@section('async-js')
		<script>
		    
		    myApp = angular.module("myapp", ['datatables'])
		    
		    myApp.controller("MyController", function($scope, $http, $timeout, DTOptionsBuilder) 
		    {
		        
		        // DataTables configurable options
			    $scope.dtOptions = DTOptionsBuilder.newOptions()
			        .withDisplayLength(8);

                $scope.users = {!! $users !!};
		        $scope.roles = {!! $roles !!};
		        $scope.organizations = {!! $organizations !!};
		        $scope.groups = {!! $groups !!};
		        $scope.saveRoleButton = 'Save';

		        $scope.init = function() {



		            $('#model-data').fadeIn();
		        };

		        var updateRole = function(user) {

					$http.post('/user/updateRole', {
						_contact_id: user.id,
						_role_id: user.role,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {
					  
					  }, function errorCallback(response) {

					    console.log('Could not save new user role');
					  
					  });
				};

		        $scope.updateUser = function(user) {
			 		
			 		user.saveDetailsButton = 'Saving...';

					$http.put('/user/' + user.id, {
						name: user.name,
						email: user.email,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {

						updateRole(user);
					    
					    $timeout(function(){user.saveDetailsButton = 'Saved!';}, 700);
					  
					  }, function errorCallback(response) {

					    user.saveDetailsButton = 'Could not save!';
					  
					  });
					
					$timeout(function(){
						user.saveDetailsButton = 'Save';
					}, 4000);
				};

				$scope.deleteUser = function($index, user) {
			 
					$http.delete('/user/' + user.id, {
						_token: "<?php echo csrf_token(); ?>"

					})
					.success(function(data, status, headers, config) {
							// user.role = data.roles.name;
							$scope.users.splice($index,1);
							console.log(data);
			 
					})
					.error(function(data, status, headers, config) {
		                alert("AJAX failed!");
		            });
				};
		    });

		</script>
	@endsection