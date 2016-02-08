@extends('admin.layouts.dashboard')

	@section('breadcrumbs')

		<ol class="breadcrumb">
		    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
	        <li><a href="/admin/organizations"> Organizations</a></li>
		</ol>
		
	@endsection

	@section('organizationsActive', 'active')

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
					<tr ng-repeat="organization in organizations">
						<td ng-model="organization.id">@{{organization.id}}</td>

						<td ng-model="organization.name">
							<a ng-hide="organization.showEdit" href="/organizations/@{{organization.id}}">@{{organization.name}}</a>
							<input ng-show="organization.showEdit" class="form-control" ng-model="organization.name">
							<span class="btn btn-info btn-sm" ng-show="dontEverShow">Not real</span>
						</td>
						
						<td ng-model="organization.label">
							<span ng-hide="organization.showEdit">@{{organization.label}}</span>
							<input ng-show="organization.showEdit" class="form-control" ng-model="organization.label">
						</td>
						
						<td class="text-right">
							<span class="btn btn-default btn-sm" ng-show="organization.showEdit" ng-click="organization.showEdit = false"><i class="fa fa-times"></i> Done editing</span>
							<span ng-show="organization.showEdit" class="btn btn-info btn-sm" ng-click="updateOrganization(organization)"><i class="fa fa-floppy-o"></i> @{{organization.saveDetailsButton ? organization.saveDetailsButton : "Save Details"}}</span>
							<span class="btn btn-default btn-sm" ng-hide="organization.showEdit" ng-click="organization.showEdit = true"><i class="fa fa-pencil"></i> Quick Edit</span>
							<span class="btn btn-danger btn-sm" ng-click="deleteOrganization($index, organization)"><i class="fa fa-trash-o"></i> Delete</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			@include('admin.partials.register.organization')
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

		        $scope.organizations = [];
		        $scope.roles = [];

		        $scope.init = function() {
		        	$http.get("/organization")
		        	.success(function(data, status, headers, config) {
		                $scope.organizations = data;
		                console.log(data);
		            })
		            .error(function(data, status, headers, config) {
		                alert("finding organizations failed");
		            });

		            $('#model-data').fadeIn();

		        };

		        $scope.updateOrganization = function(organization) {
			 		
			 		organization.saveDetailsButton = 'Saving...';

					$http.put('/organization/' + organization.id, {
						name: organization.name,
						label: organization.label,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {

					    $timeout(function(){organization.saveDetailsButton = 'Saved!';}, 700);
					  
					  }, function errorCallback(response) {

					    organization.saveDetailsButton = 'Could not save!';
					  
					  });
					
					$timeout(function(){
						organization.saveDetailsButton = 'Save Details';
						organization.showEdit = false;
					}, 4000);
				};

				$scope.deleteOrganization = function($index, organization) {
			 
					$http.delete('/organization/' + organization.id, {
						_token: "<?php echo csrf_token(); ?>"

					})
					.success(function(data, status, headers, config) {
							// organization.role = data.roles.name;
							$scope.organizations.splice($index,1);
							console.log(data);
			 
					})
					.error(function(data, status, headers, config) {
		                alert("AJAX failed!");
		            });
				};
		    });

		</script>
	@endsection