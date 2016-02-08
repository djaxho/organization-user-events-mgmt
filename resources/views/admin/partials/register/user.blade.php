<div class="panel panel-default">
    <div style="cursor:pointer;" class="panel-heading text-center" onclick="$('.reg-form').slideToggle();"><i class="fa fa-plus-square-o"></i> Add User</div>
    <div class="panel-body reg-form" style="display:none;" {{--ng-show="showReg"--}}>

        @if (session('status'))
            <div class="alert alert-danger">
                {{ session('status') }}
            </div>
        @endif

        <form class="form-horizontal" role="form" method="POST" action="{{ url('/users') }}">

            {!! csrf_field() !!}

            <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Name</label>

                <div class="col-md-6">
                    <input type="text" class="form-control" name="name" value="{{ old('name') }}">

                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">E-Mail Address</label>

                <div class="col-md-6">
                    <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('role') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">User Role</label>

                <div class="col-md-6">
                    <select name="role" style="width:25%"> 
                            <option value="" selected disabled>Select Role</option>
                            <option ng-repeat="role in roles" value="@{{role.id}}">@{{role.label}}</option>
                    </select>

                    @if ($errors->has('role'))
                        <span class="help-block">
                            <strong>{{ $errors->first('role') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('organization') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">User Organization</label>

                <div class="col-md-6">
                    <select name="organization" style="width:25%"> 
                            <option value="" selected disabled>Select Organization</option>
                            <option ng-repeat="organization in organizations" value="@{{organization.id}}">@{{organization.name}}</option>
                    </select>

                    @if ($errors->has('organization'))
                        <span class="help-block">
                            <strong>{{ $errors->first('organization') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('group') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">User Group</label>

                <div class="col-md-6">
                    <select name="group" style="width:25%"> 
                            <option value="" selected disabled>Select Group</option>
                            <option ng-repeat="group in groups" value="@{{group.id}}">@{{group.name}}</option>
                    </select>

                    @if ($errors->has('group'))
                        <span class="help-block">
                            <strong>{{ $errors->first('group') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Password</label>

                <div class="col-md-6">
                    <input type="password" class="form-control" name="password">

                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Confirm Password</label>

                <div class="col-md-6">
                    <input type="password" class="form-control" name="password_confirmation">

                    @if ($errors->has('password_confirmation'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa fa-btn fa-user"></i> Register User
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>