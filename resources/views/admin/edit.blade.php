@extends('layouts.master')

    @section('head')

    @endsection

    @section('breadcrumbs')

        <ol class="breadcrumb">
            <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
            <li><a href="/{{$primaryModel}}s">System Admin</a></li>
            <li><a href="/{{$primaryModel}}s">{{ucfirst($primaryModel)}}s</a></li>
            <li><a href="">Edit</a></li>
        </ol>

    @endsection

    @section('usersActive', 'active')

    @section('content')

        <div class="card">
            <div class="card-header">

                <div class="card-title">
                    <div class="title">@yield('main-panel-title', 'System Admin - Edit '.ucfirst($primaryModel))</div>
                </div>

            </div>
            <div class="card-body">

                <form class="form-horizontal" action="/{{$primaryModel}}s/{{$primaryModelData['id']}}" method="POST">

                    {{ method_field('PUT') }}

                    {{ csrf_field() }}

                    @foreach($primaryModelData as $key => $value)

                            @if(!is_array($value))

                                <div class="form-group">
                                    <label for="{{ $key }}" class="col-sm-1 control-label">{{ ucfirst($key) }}</label>
                                    <div class="col-sm-6">
                                        @if($key == 'id')
                                           <span class="form-control">{{ $value }}</span>
                                        @else
                                            <input class="form-control" id="{{ $key }}" name="{{ $key }}" placeholder="{{ ucfirst($key) }}" value="{{ $value }}">
                                        @endif
                                    </div>
                                </div>

                            @else

                                <div class="form-group">

                                    <label for="{{ $key }}" class="col-sm-1 control-label">{{ ucfirst($key) }}</label>

                                    <div class="col-sm-6">

                                        <select multiple class="form-control" id="{{ $key }}" name="{{ $key }}[]" >

                                            @if(array_key_exists($key, $secondaryModelData))

                                                @foreach($secondaryModelData[$key] as $arrayval)

                                                    <option value="{{$arrayval['id']}}"

                                                            @foreach($value as $subkey => $subvalue)
                                                                @if(array_key_exists('id', $subvalue))
                                                                    @if($arrayval['id'] == $subvalue['id'])
                                                                        selected
                                                                    @endif
                                                                @endif
                                                            @endforeach
                                                    >
                                                        {{$arrayval['name']}}
                                                    </option>

                                                @endforeach

                                            @endif

                                        </select>

                                    </div>

                                </div>

                            @endif

                    @endforeach
                    <a class="btn btn-default" href="{{url("/$primaryModel")}}s"><i class="fa fa-long-arrow-left"></i> Back</a>
                    <button class="btn btn-primary" type="submit"><i class="fa fa-floppy-o"></i> Save {{ucfirst($primaryModel)}}</button>


                </form>

            </div>
        </div>

    @endsection

    @section('async-js')
    @endsection
