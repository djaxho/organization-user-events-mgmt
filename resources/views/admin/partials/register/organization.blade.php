<div class="panel panel-default">
    <div style="cursor:pointer;" class="panel-heading text-center" onclick="$('.reg-form').slideToggle();"><i class="fa fa-plus-square-o"></i> Add Organization</div>
    <div class="panel-body reg-form" style="display:none;" {{--ng-show="showReg"--}}>

    @if (session('status'))
            <div class="alert alert-danger">
                {{ session('status') }}
            </div>
        @endif

        <form class="form-horizontal" role="form" method="POST" action="{{ url('/organizations') }}">

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

            <div class="form-group{{ $errors->has('label') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Label</label>

                <div class="col-md-6">
                    <input type="text" class="form-control" name="label" value="{{ old('label') }}">

                    @if ($errors->has('label'))
                        <span class="help-block">
                            <strong>{{ $errors->first('label') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('about') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">About</label>

                <div class="col-md-6">
                    <input type="text" class="form-control" name="about" value="{{ old('about') }}">

                    @if ($errors->has('about'))
                        <span class="help-block">
                            <strong>{{ $errors->first('about') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('users') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Add Users</label>

                <div class="col-md-6">
                    <select multiple name="users[]" style="width:25%">
                        <option ng-repeat="user in users" value="@{{user.id}}">@{{user.name}}</option>
                    </select>

                    @if ($errors->has('users'))
                        <span class="help-block">
                            <strong>{{ $errors->first('users') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group{{ $errors->has('groups') ? ' has-error' : '' }}">
                <label class="col-md-4 control-label">Add Groups</label>

                <div class="col-md-6">
                    <select multiple name="groups[]" style="width:25%">
                        <option ng-repeat="group in groups" value="@{{group.id}}">@{{group.name}}</option>
                    </select>

                    @if ($errors->has('groups'))
                        <span class="help-block">
                            <strong>{{ $errors->first('groups') }}</strong>
                        </span>
                    @endif
                </div>
            </div>

            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <button type="submit" class="btn btn-primary">
                        <i class="fa fa-btn fa-send"></i> Create Organization
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>