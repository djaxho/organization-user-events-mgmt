@extends('admin.layouts.dashboard')

	@section('breadcrumbs')

		<ol class="breadcrumb">
		    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
	        <li><a href="/groups"> System Admin</a></li>
			<li><a href="/groups"> Groups</a></li>
		</ol>
		
	@endsection

	@section('groupsActive', 'active')

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
					<tr ng-repeat="group in groups">
						<td ng-model="group.id">@{{group.id}}</td>

						<td ng-model="group.name">
							<a ng-hide="group.showEdit" href="/groups/@{{group.id}}">@{{group.name}}</a>
							<input ng-show="group.showEdit" class="form-control" ng-model="group.name">
							<span class="btn btn-info btn-sm" ng-show="dontEverShow">Not real</span>
						</td>
						
						<td ng-model="group.label">
							<span ng-hide="group.showEdit">@{{group.label}}</span>
							<input ng-show="group.showEdit" class="form-control" ng-model="group.label">
						</td>

						<td ng-model="group.about">
							<span ng-hide="group.showEdit">@{{group.about}}</span>
							<input ng-show="group.showEdit" class="form-control" ng-model="group.about">
						</td>
						
						<td class="text-right">
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-sm dropdown-toggle" ng-hide="group.showEdit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"></i> Options <span class="caret"></span></button>

                                <ul class="dropdown-menu">
                                    <li><a href="#" ng-click="group.showEdit = true"><i class="fa fa-fighter-jet"></i> Quick edit</a></li>
                                    <li><a href="/groups/@{{group.id}}/edit"><i class="fa fa-pencil-square-o"></i> Full edit</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#" ng-click="deleteGroup($index, group)"><i class="fa fa-trash-o"></i> Delete</a></li>
                                </ul>
                            </div>
							<span class="btn btn-default btn-sm" ng-show="group.showEdit" ng-click="group.showEdit = false"><i class="fa fa-times"></i> Done editing</span>
							<span ng-show="group.showEdit" class="btn btn-info btn-sm" ng-click="updateGroup(group)"><i class="fa fa-floppy-o"></i> @{{group.saveDetailsButton ? group.saveDetailsButton : "Save Details"}}</span>
{{--							<span class="btn btn-default btn-sm" ng-hide="group.showEdit" ng-click="group.showEdit = true"><i class="fa fa-pencil"></i> Quick Edit</span>
							<span class="btn btn-danger btn-sm" ng-click="deleteGroup($index, group)"><i class="fa fa-trash-o"></i> Delete</span>--}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div>
			@include('admin.partials.register.group')
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
				$scope.organizations = {!! $organizations !!};
				$scope.groups = {!! $groups !!};

		        $scope.init = function() {
		        	$('#model-data').fadeIn();
		        };

		        $scope.updateGroup = function(group) {
			 		
			 		group.saveDetailsButton = 'Saving...';

					$http.put('/groups/' + group.id, {
						name: group.name,
						label: group.label,
                        about: group.about,
						_token: "<?php echo csrf_token(); ?>"

					}).then(function successCallback(response) {

					    $timeout(function(){group.saveDetailsButton = 'Saved!';}, 700);
					  
					  }, function errorCallback(response) {

					    group.saveDetailsButton = 'Could not save!';
					  
					  });
					
					$timeout(function(){
						group.saveDetailsButton = 'Save Details';
						group.showEdit = false;
					}, 4000);
				};

				$scope.deleteGroup = function($index, group) {
			 
					$http.delete('/groups/' + group.id, {
						_token: "<?php echo csrf_token(); ?>"

					})
					.success(function(data, status, headers, config) {
							// group.role = data.roles.name;
							$scope.groups.splice($index,1);
							console.log(data);
			 
					})
					.error(function(data, status, headers, config) {
		                alert("AJAX failed!");
		            });
				};
		    });

		</script>
	@endsection