@extends('admin.layouts.dashboard')

	@section('breadcrumbs')

		<ol class="breadcrumb">
		    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
	        <li><a href="/roles"> Roles</a></li>
		</ol>
		
	@endsection

	@section('rolesActive', 'active')

	@section('model')
		<div class="table">
		  	<table datatable="ng" dt-options="dtOptions" class="table table-striped">

				<thead>
				  <tr>
					  <th>Id</th>
					  <th>Name</th>
					  <th>Label</th>
					  <th>Description</th>
					  <th></th>
				  </tr>
				</thead>

				<tbody id="model-data" style="display:none">
					<tr ng-repeat="role in roles">
						<td ng-model="role.id">@{{role.id}}</td>

						<td ng-model="role.name">
							<span ng-hide="role.showEdit">@{{role.name}}</span>
							<input ng-show="role.showEdit" class="form-control" ng-model="role.name">
							<span class="btn btn-info btn-sm" ng-show="dontEverShow">Not real</span>
						</td>
						
						<td ng-model="role.label">
							<span ng-hide="role.showEdit">@{{role.label}}</span>
							<input ng-show="role.showEdit" class="form-control" ng-model="role.label">
						</td>

						<td ng-model="role.about">
							<span ng-hide="role.showEdit">@{{role.about}}</span>
							<input ng-show="role.showEdit" class="form-control" ng-model="role.about">
						</td>
						
						<td class="text-center">
							<div class="btn-group">
								<button type="button" class="btn btn-default btn-sm dropdown-toggle" ng-hide="role.showEdit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> Options <span class="caret"></span></button>

								<ul class="dropdown-menu">
									<li><a href="#" ng-click="role.showEdit = true"><i class="fa fa-fighter-jet"></i> Quick edit</a></li>
									<li><a href="/roles/@{{role.id}}/edit"><i class="fa fa-pencil-square-o"></i> Full edit</a></li>
									<li role="separator" class="divider"></li>
									<li><a href="#" ng-click="deleteRole($index, role)"><i class="fa fa-trash-o"></i> Delete</a></li>
								</ul>
							</div>
							<span class="btn btn-default btn-sm" ng-show="role.showEdit" ng-click="role.showEdit = false"><i class="fa fa-times"></i> Done editing</span>
							<span ng-show="role.showEdit" class="btn btn-info btn-sm" ng-click="updateRole(role)"><i class="fa fa-floppy-o"></i> @{{role.saveDetailsButton ? role.saveDetailsButton : "Save Details"}}</span>
							{{--<span class="btn btn-default btn-sm" ng-hide="role.showEdit" ng-click="role.showEdit = true"><i class="fa fa-pencil"></i> Edit</span>--}}
							{{--<span class="btn btn-danger btn-sm" ng-click="deleteRole($index, role)"><i class="fa fa-trash-o"></i> Delete</span>--}}


						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			@include('admin.partials.register.role')
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

				$scope.roles = {!! $roles !!};

		        $scope.init = function() {
		        	$('#model-data').fadeIn();
		        };

		        $scope.updateRole = function(role) {
			 		
			 		role.saveDetailsButton = 'Saving...';

					$http.put('/roles/' + role.id, {
						name: role.name,
						label: role.label,
						about: role.about,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {

					    $timeout(function(){role.saveDetailsButton = 'Saved!';}, 700);
					  
					  }, function errorCallback(response) {

					    role.saveDetailsButton = 'Could not save!';
					  
					  });
					
					$timeout(function(){
						role.saveDetailsButton = 'Save Details';
						role.showEdit = false;
					}, 4000);
				};

				$scope.deleteRole = function($index, role) {
			 
					$http.delete('/roles/' + role.id, {
						_token: "<?php echo csrf_token(); ?>"

					})
					.success(function(data, status, headers, config) {
							// role.role = data.roles.name;
							$scope.roles.splice($index,1);
							console.log(data);
			 
					})
					.error(function(data, status, headers, config) {
		                alert("AJAX failed!");
		            });
				};
		    });

		</script>
	@endsection