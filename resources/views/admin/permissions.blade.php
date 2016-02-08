@extends('admin.layouts.dashboard')

	@section('breadcrumbs')

		<ol class="breadcrumb">
		    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
	        <li><a href="/admin/permissions"> Permissions</a></li>
		</ol>
		
	@endsection

	@section('permissionsActive', 'active')

	@section('model')
		<div class="table-responsive">
		  	<table datatable="ng" dt-options="dtOptions" class="table table-striped">

				<thead>
				  <tr>
				  	<th>Id</th>
				  	<th>Name</th>
				  	<th>Label</th>
				  	<th></th>
				  </tr>
				</thead>

				<tbody id="model-data" style="display:none">
					<tr ng-repeat="permission in permissions">
						<td ng-model="permission.id">@{{permission.id}}</td>

						<td ng-model="permission.name">
							<span ng-hide="permission.showEdit">@{{permission.name}}</span>
							<input ng-show="permission.showEdit" class="form-control" ng-model="permission.name">
							<span class="btn btn-info btn-sm" ng-show="dontEverShow">Not real</span>
						</td>
						
						<td ng-model="permission.label">
							<span ng-hide="permission.showEdit">@{{permission.label}}</span>
							<input ng-show="permission.showEdit" class="form-control" ng-model="permission.label">
						</td>
						
						<td class="text-right">
							<span class="btn btn-default btn-sm" ng-show="permission.showEdit" ng-click="permission.showEdit = false"><i class="fa fa-times"></i> Done editing</span>
							<span ng-show="permission.showEdit" class="btn btn-info btn-sm" ng-click="updatePermission(permission)"><i class="fa fa-floppy-o"></i> @{{permission.saveDetailsButton ? permission.saveDetailsButton : "Save Details"}}</span>
							<span class="btn btn-default btn-sm" ng-hide="permission.showEdit" ng-click="permission.showEdit = true"><i class="fa fa-pencil"></i> Quick Edit</span>
							<span class="btn btn-danger btn-sm" ng-click="deletePermission($index, permission)"><i class="fa fa-trash-o"></i> Delete</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			@include('admin.partials.register.permission')
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

		        $scope.permissions = [];
		        $scope.roles = [];

		        $scope.init = function() {
		        	$http.get("/permission")
		        	.success(function(data, status, headers, config) {
		                $scope.permissions = data;
		                console.log(data);
		            })
		            .error(function(data, status, headers, config) {
		                alert("finding permissions failed");
		            });

		            $('#model-data').fadeIn();

		        };

		        $scope.updatePermission = function(permission) {
			 		
			 		permission.saveDetailsButton = 'Saving...';

					$http.put('/permission/' + permission.id, {
						name: permission.name,
						label: permission.label,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {

					    $timeout(function(){permission.saveDetailsButton = 'Saved!';}, 700);
					  
					  }, function errorCallback(response) {

					    permission.saveDetailsButton = 'Could not save!';
					  
					  });
					
					$timeout(function(){
						permission.saveDetailsButton = 'Save Details';
						permission.showEdit = false;
					}, 4000);
				};

				$scope.deletePermission = function($index, permission) {
			 
					$http.delete('/permission/' + permission.id, {
						_token: "<?php echo csrf_token(); ?>"

					})
					.success(function(data, status, headers, config) {
							// permission.role = data.roles.name;
							$scope.permissions.splice($index,1);
							console.log(data);
			 
					})
					.error(function(data, status, headers, config) {
		                alert("AJAX failed!");
		            });
				};
		    });

		</script>
	@endsection