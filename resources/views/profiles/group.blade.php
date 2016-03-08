@extends('layouts.master')

@section('head')

@endsection

@section('breadcrumbs')

    <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
        <li><a href="/groups"> Groups</a></li>
        <li class="active">{{$group->name}}</li>
    </ol>

@endsection

@section('main-panel-title', $group->name)

@section('content')


    <style type="text/css">
        .banner-img {
            padding-top: 25px;
            padding-bottom: 1px;
        }
        .img-avatar-small {
            max-width: 100px;
        }
        .top-avatar-slidein img {
            margin-top: 30px;
            margin-bottom: 20px;
        }
        .bottom-avatar-slidein {
            margin-bottom: 30px;
        }
        .stats {
            margin-top:15px;
        }
        .font-700 {
            font-weight: 700;
            color: rgb(57, 57, 57);
            font-size: 14px;
        }
        .font-600 {
            font-weight: 600;
            font-size: 20px;
        }
        .font-300 {
            font-family: "Lato";
            font-weight: 300;
            color: rgb(92, 144, 210) !important;
            font-size: 30px;
        }
        .font-400 {
            font-weight: 400;
        }
        .text-white {
            color: white;
        }
        .sub-title {
            color:#F0F0F0;
            text-decoration: none;
        }

    </style>

    <div class="col-sm-10 col-sm-push-1 content content-boxed">
        <div class="panel panel-default">
            <div style="padding:0;" class="panel-body">
                <div class="block">
                    <div class="bg-image" style="background-image: url('/img/stock/{{rand(1,15)}}.jpg');">
                        <div class="banner-img block-content bg-primary-dark-op text-center overflow-hidden">
                            <div class="top-avatar-slidein animated fadeInDown">
                                <img class="img-avatar-small center-block img-circle img-thumbnail img-responsive" src="http://lorempixel.com/200/200/nature" alt="">
                            </div>
                            <div class="bottom-avatar-slidein animated fadeInUp">
                                <h2 class="h4 font-600 text-white push-5">{{$group->name}}</h2>
                                <h5 style="color:#F0F0F0;">{{$group->label}}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="stats block-content text-center">
                        <div class="row items-push text-uppercase">
                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Members</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">12</a>
                            </div>
                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Upcoming Speakers</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">2</a>
                            </div>
                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Upcoming Events</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">9</a>
                            </div>
                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Past Events</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">6</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-body">
                lalalala
            </div>
        </div>
    </div>

@endsection