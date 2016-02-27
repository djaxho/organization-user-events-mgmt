@extends('layouts.master')

	@section('head')
		
	@endsection

	@section('breadcrumbs')

        <ol class="breadcrumb">
            <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
            <li><a href="/users"> Users</a></li>
            <li>User Profile</li>
            <li class="active">{{$user->name}}</li>
        </ol>
		
	@endsection

	@section('main-panel-title', 'User Profile')

	@section('content')

        <style type="text/css">

            .profile-photo img {
                max-width:50%;
            }

            .profile-left-heading {
                background-color: #3B4354;
                padding-top: 39px;
                padding-bottom: 30px;
            }

            .profile-left-heading .profile-name {
                color: white;
                font-weight: 300;
                font-size: 20px;
                letter-spacing: 1px;
                text-align: center;
            }

            .profile-left-heading .profile-designation {
                color: #9fa8bc;
                font-weight: 300;
                font-size: 14px;
                letter-spacing: 1px;
                margin-bottom: 0;
                text-align: center;
            }

            .profile-left-body .panel-title {
                color: #fff;
                margin-bottom: 10px;
                font-weight: 600;
            }

            .panel-title {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 700;
                color: #313745;
                letter-spacing: .2px;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, sans-serif;
            }

            .profile-left-body {
                padding: 20px;
                background-color: #464f63;
                color: #9fa8bc;
                border-bottom-right-radius: 2px;
                border-bottom-left-radius: 2px;
            }

            .list-inline {
                padding-left: 0;
                list-style: none;
                margin-left: -5px;
            }

            hr.fadeout {
                border-color: #fff;
                opacity: .1;
            }

            .tab-pane {
                padding:30px 0;
            }

            .thumbnail img {
                max-height:195px;
                width: 100%;
            }

            .card {
                padding-bottom: 20px;
            }
            .small-card-container {
                -webkit-transition: all 1s;
                -moz-transition: all 1s;
                -ms-transition: all 1s;
                -o-transition: all 1s;
                transition: all 1s;
            }
            .card-header .card-title .title .title-option {
                float:right;
                font-size: 0.75em;
                line-height: 2.5em;
            }

        </style>
        

		
        <div class="row profile-wrapper">
            <div class="col-xs-12 col-md-3 profile-left">
                <div class="profile-left-heading">
                    <a href="" class="profile-photo">
                      <img class="center-block img-circle img-responsive" src="http://api.randomuser.me/portraits/men/{{rand(1,21)}}.jpg" alt="">
                    </a>
                    <h2 class="profile-name">{{$user->name}}</h2>
                    <h4 class="profile-designation">{{$user->profession}}</h4>
                    <br>
                </div>
                <div class="profile-left-body">
                    <h4 class="panel-title">About Me</h4>
                    <p>
                        {{$user->about}}
                    </p>

                    <hr class="fadeout">

                    <h4 class="panel-title">Location</h4>
                    <p><i class="glyphicon glyphicon-map-marker mr5"></i> {{$user->city}}, {{$user->state}}</p>

                    <hr class="fadeout">

                    <h4 class="panel-title">Organization</h4>
                    @foreach($user->organizations as $organization)
                        <a href="/organizations/{{ $organization->id }}"><p><i class="glyphicon glyphicon-briefcase mr5"></i> {{" ".$organization->name}}</p></a>
                    @endforeach

                    <hr class="fadeout">

                    <h4 class="panel-title">Contacts</h4>
                    <p><i class="glyphicon glyphicon-phone mr5"></i> {{" ".$user->phone}}</p>
                    <p><i class="glyphicon glyphicon-envelope mr5"></i> {{" ".$user->email}}</p>
                    <hr class="fadeout">

                    <h4 class="panel-title">Social</h4>
                    <ul class="list-inline profile-social">
                        <li><a href=""><i class="fa fa-facebook-official"></i></a></li>
                        <li><a href=""><i class="fa fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa fa-dribbble"></i></a></li>
                        <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                    </ul>

                </div>
            </div>

            <div class="col-sm-7">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title">
                                Groups
                                <span class="title-option"><i class="fa fa-plus-square-o"></i> Join Groups</span>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">

                        <div class="col-sm-6">
                            
                            @foreach($user->groups()->paginate(8) as $k => $group)

                                @include('components.thumbprint', [
                                    'size' => '',
                                    'img' => 'http://lorempixel.com/100/100/',
                                    'title' => $group->name,
                                    'subtitle' =>  $group->label,
                                    'url' => '/groups/'.$group->id
                                ])

                                @if($k > 2)

                                    </div>

                                    <div class="col-sm-6">

                                @endif

                            @endforeach

                        </div>

                        <div class="col-sm-12 text-right">
                            {{$user->groups()->paginate(4)->links()}}
                        </div>
                    </div>
                </div>



                <div class="card" style="margin-top:40px;">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title expand-card">Upcoming Events (3)</div>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 5px 0;">

                        <div class="col-sm-12" >

                            @foreach($user->events as $k => $event)
                                @include('components.thumbprint-event', [
                                    'size' => 'sm',
                                    'title' => $event->title,
                                    'date' => $event->event_date->format('j M, Y'),
                                    'subtitle' =>  $event->label,
                                    'url' => '/events/'.$event->id
                                ])

                            @endforeach

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-2 small-card-container">

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title expand-card">Notices (3)</div>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 5px 0;">

                        <div class="col-sm-12" >
                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => 'http://lorempixel.com/100/100/nature',
                                'title' => 'Hiking Club',
                                'subtitle' =>  'Get out on the weekends to enjoy the fresh air'
                            ])

                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => 'http://loremflickr.com/100/100/safety',
                                'title' => 'Safety Preparedness',
                                'subtitle' =>  'Ensure the safety of you and your loved ones'
                            ])

                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => '../../img/thumbnails/picjumbo.com_IMG_3241.jpg',
                                'title' => 'Business Club',
                                'subtitle' =>  'Meet young professionals in your area'
                            ])
                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => 'http://lorempixel.com/100/100/nature',
                                'title' => 'Hiking Club',
                                'subtitle' =>  'Get out on the weekends to enjoy the fresh air'
                            ])

                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => 'http://loremflickr.com/100/100/safety',
                                'title' => 'Safety Preparedness',
                                'subtitle' =>  'Ensure the safety of you and your loved ones'
                            ])

                            @include('components.thumbprint', [
                                'size' => 'sm',
                                'img' => '../../img/thumbnails/picjumbo.com_IMG_3241.jpg',
                                'title' => 'Business Club',
                                'subtitle' =>  'Meet young professionals in your area'
                            ])

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-2 small-card-container">

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title expand-card">Comments (3)</div>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 5px 0;">

                        <div class="col-sm-12" >

                            @foreach($user->comments()->paginate(8) as $k => $comment)

                                @include('components.thumbprint', [
                                    'size' => 'sm',
                                    'img' => 'http://lorempixel.com/100/100/nature',
                                    'title' => $comment->body,
                                    'subtitle' =>  'Your comment on '. $comment->commentable->title,
                                ])

                            @endforeach

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-2 small-card-container">

                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <div class="title expand-card">Likes (3)</div>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 5px 0;">

                        <div class="col-sm-12" >

                            @foreach($user->likes as $like)

                                @include('components.thumbprint', [
                                    'size' => 'sm',
                                    'img' => 'http://lorempixel.com/100/100/nature',
                                    'title' => 'You liked an '.$like->likeable_type,
                                    'subtitle' =>  'Made by '.$like->likeable->user->name,
                                ])

                            @endforeach

                        </div>
                    </div>
                </div>
            </div>

            <div class="col-sm-7 small-card-container">


            </div>
        </div>


                      {{--<div class="profile-right-body">
                      <!-- Nav tabs -->
                      <ul class="nav nav-tabs nav-line">
                        <li class="active"><a href="#activity" data-toggle="tab"><strong>Clubs (2)</strong></a></li>
                        <li><a href="#photos" data-toggle="tab"><strong>Photos (20)</strong></a></li>
                        <li><a href="#music" data-toggle="tab"><strong>Music (10)</strong></a></li>
                      </ul>

                      <!-- Tab panes -->
                      <div class="tab-content">
                        <div class="tab-pane active" id="activity">


                            <div class="col-sm-3">
                                <div class="thumbnail">
                                    <img src="http://loremflickr.com/800/533/safety" class="img-responsive">
                                    <div class="caption">
                                        <h3 id="thumbnail-label">Safety Preparedness<a class="anchorjs-link" href="#thumbnail-label"><span class="anchorjs-icon"></span></a></h3>
                                        <p>Ensure the safety of you and your loved ones</p>
                                        <p>
                                            <div class="btn-group">
                                            <a href="#" class="btn btn-primary" role="button">Enter</a>
                                            </div>
                                            <div class="btn-group">
                                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Options <span class="caret"></span></button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li><a href="#">Leave this group</a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#">Mark as favorite</a></li>
                                                    </ul>
                                                </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="thumbnail">
                                    <img src="../../img/thumbnails/picjumbo.com_IMG_3241.jpg" class="img-responsive">
                                    <div class="caption">
                                        <h3 id="thumbnail-label">Home Office Club<a class="anchorjs-link" href="#thumbnail-label"><span class="anchorjs-icon"></span></a></h3>
                                        <p>Interact with your neigbors who also have home offices</p>
                                        <p>
                                            <div class="btn-group">
                                            <a href="#" class="btn btn-primary" role="button">Enter</a>
                                            </div>
                                            <div class="btn-group">
                                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Options <span class="caret"></span></button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li><a href="#">Leave this group</a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#">Mark as favorite</a></li>
                                                    </ul>
                                                </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="thumbnail">
                                    <img src="http://lorempixel.com/800/533/nature" class="img-responsive">
                                    <div class="caption">
                                        <h3 id="thumbnail-label">Weekend Hiking Club<a class="anchorjs-link" href="#thumbnail-label"><span class="anchorjs-icon"></span></a></h3>
                                        <p>Enjoy some fresh-air with local friends and carpool!</p>
                                        <p>
                                            <div class="btn-group">
                                            <a href="#" class="btn btn-primary" role="button">Enter</a> 
                                            </div>
                                            <div class="btn-group">
                                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Options <span class="caret"></span></button>
                                                    <ul class="dropdown-menu" role="menu">
                                                        <li><a href="#">Leave this group</a></li>
                                                        <li class="divider"></li>
                                                        <li><a href="#">Mark as favorite</a></li>
                                                    </ul>
                                                </div>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div><!-- tab-pane -->

                        <div class="tab-pane" id="photos">

                          Panel content2

                        </div>
                        <div class="tab-pane" id="music">

                          Panel content3

                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>--}}

	@endsection

    @section('async-js')
    <script>

        $(document).ready(function() {

            $('.expand-card').click(function () {
                $('.small-card-container').removeClass('col-sm-2').addClass('col-sm-9');
            });

            $('[data-url]').click(function () {

                var url = $(this).data('url');

                document.location.href = url;
            });
        });




    </script>
    @endsection