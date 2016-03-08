@extends('layouts.master')

@section('head')

@endsection

@section('breadcrumbs')

    <ol class="breadcrumb">
        <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
        <li><a href="/events"> Events</a></li>
        <li class="active">{{$model->name}}</li>
    </ol>

@endsection

@section('main-panel-title', $model->name)

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

    <div class="col-sm-12 content content-boxed">
        <div class="panel panel-default">
            <div style="padding:0;" class="panel-body">
                <div class="block">
                    <div class="bg-image" style="background-image: url('/img/stock/{{rand(1,15)}}.jpg');">
                        <div class="banner-img block-content bg-primary-dark-op text-center overflow-hidden">
                            <div class="top-avatar-slidein animated fadeInDown">
                                <img class="img-avatar-small center-block img-circle img-thumbnail img-responsive" src="http://lorempixel.com/200/200/nature" alt="">
                            </div>
                            <div class="bottom-avatar-slidein animated fadeInUp">
                                <h2 class="h4 font-600 text-white push-5">{{$model->title}}</h2>
                                <h5 style="color:#F0F0F0;">{{$model->label}}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="stats block-content text-center">
                        <div class="row items-push text-uppercase">

                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Days until event</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">
                                    <?php 
                                        $now = new \DateTime('now');
                                        $days = $model->event_date->diff($now)->days;
                                        if ($model->event_date >= $now) {
                                            echo $days;
                                        } else {
                                            echo 'past';
                                        }
                                    ?>
                                </a>
                            </div>

                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">{{($modelType == 'event') ? 'Attendees' : 'Members'}}</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">{{ count($model->users) }}</a>
                            </div>

                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">{{($modelType == 'event') ? 'Organizers' : 'Something'}}</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">{{ count($model->editors) }}</a>
                            </div>

                            

                            <div class="col-xs-6 col-sm-3">
                                <div class="font-700 text-gray-darker animated fadeIn">Comments</div>
                                <a class="h2 font-300 text-primary animated flipInX" href="javascript:void(0)">{{ count($model->comments) }}</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-sm-6">

        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <div class="title expand-card">{{ucfirst($modelType)}} Info</div>
                </div>
            </div>
            <div class="card-body" style="padding: 5px 0;">

                <div class="col-sm-12" >
                    <br>
                    <strong>ABOUT</strong>
                    <p>{{$model->label}}</p>
                    <p>{{$model->about or $model->body}}</p>

                    <hr>
                    @if(isset($model->event_date))

                        <strong>WHEN</strong>
                        <p><i class="fa fa-calendar"></i> {{$model->event_date->format('j M, Y')}} at 
                        {{$model->event_date->format('g:i a')}}</p>

                    @endif
                    
                    <hr>
                    @if(isset($model->street) && isset($model->city) && isset($model->state) && isset($model->zip))

                        <strong>WHERE</strong>
                        <p><i class="fa fa-map-marker"></i> {{$model->street}}<br>
                        {{$model->city}}, {{$model->state}} {{$model->zip}}</p>

                    @endif
                    
                    <hr>
                    <strong>CATEGORIES</strong>
                    <p>
                    <i class="fa fa-tags"></i> 
                        @foreach($model->tags as $k => $tag)
                                {{ $tag->name }}
                                @if(array_key_exists($k+1, $model->tags))
                                    {{' , '}}
                                @endif
                        @endforeach
                    </p>

                    
                    
                    @if(count($model->organizations))
                        <hr>
                        <strong>ORGANIZATIONS</strong>
                        <p>
                        <i class="fa fa-cubes"></i> 
                            @foreach($model->organizations as $k => $organization)
                                    {{ $organization->name }}
                                    @if(array_key_exists($k+1, $model->organizations))
                                        {{' , '}}
                                    @endif
                            @endforeach
                        </p>
                    @endif
                    
                    @if(count($model->groups))
                        <hr>
                        <strong>GROUPS</strong>
                        <p>
                        <i class="fa fa-users"></i> 
                            @foreach($model->groups as $k => $group)
                                    {{ $group->name }}
                                    @if(array_key_exists($k+1, $model->groups))
                                        {{' , '}}
                                    @endif
                            @endforeach
                        </p>
                    @endif

                    <br>

                </div>
            </div>
        </div>

        <div class="card" style="margin-top:40px;">
            <div class="card-header">
                <div class="card-title">
                    <div class="title expand-card">Organizers ({{ count($model->editors) }})</div>
                </div>
            </div>
            <div class="card-body" style="padding: 5px 0;">

                <div class="col-sm-12" style="margin-bottom:15px;">

                   @foreach($model->editors as $editor)

                        @include('components.thumbprint', [
                            'size' => 'sm',
                            'img' => 'http://api.randomuser.me/portraits/men/'.rand(1,21).'.jpg',
                            'title' => $editor->name,
                            'subtitle' =>  'Event organizer',
                        ])

                   @endforeach

                </div>
            </div>
        </div>

        <div class="card" style="margin-top:40px;">
            <div class="card-header">
                <div class="card-title">
                    <div class="title expand-card">Attendees ({{ count($model->users) }})</div>
                </div>
            </div>
            <div class="card-body" style="padding: 5px 0;">

                <div class="col-sm-12" style="margin-bottom:15px;">

                   @foreach($model->users as $user)

                        @include('components.thumbprint', [
                            'size' => 'sm',
                            'img' => 'http://api.randomuser.me/portraits/men/'.rand(1,21).'.jpg',
                            'title' => $user->name,
                            'subtitle' =>  'Event Attendee',
                        ])

                   @endforeach

                </div>
            </div>
        </div>

    </div>

    <div class="col-sm-6">

        

        <div class="card">
            <div class="card-header">
                <div class="card-title">
                    <div class="title expand-card">Comments <i class="fa fa-comments-o"></i></div>
                </div>
            </div>
            <div class="card-body" style="padding: 5px 0;">

                <div class="col-sm-12" style="margin-bottom:20px;">

                   @foreach($model->comments as $comment)

                        @include('components.thumbprint', [
                            'size' => 'sm',
                            'img' => 'http://api.randomuser.me/portraits/men/'.rand(1,21).'.jpg',
                            'title' => $comment->user->name,
                            'subtitle' =>  $comment->body,
                        ])

                    @endforeach

                </div>

                <div class="col-sm-12" style="margin-bottom:15px;">

                    <form id="leave-comment" action="/comments" method="POST" role="form">

                        {!! csrf_field() !!}

                        <input type="hidden" name="commentable_type" id="inputCommentable" class="form-control" value="App\Event">

                        <input type="hidden" name="commentable_id" id="inputCommentable" class="form-control" value="{{$model->id}}">

                        <div class="form-group">
                            <textarea name="body" class="form-control" rows="3" placeholder="Leave a comment" ></textarea>
                        </div>

                        <div class="text-right">
                            <button type="submit" class="btn btn-primary">Comment</button>
                        </div>

                    </form>

                </div>
            </div>
        </div>

        
    </div>
    

@endsection

@section('async-js')
<script type="text/javascript">
    
    (function() {
        

        function postToController(url, data, callback)
        {
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                url: url,
                data: data,
                type: "POST",
                dataType: 'json',
            })
            .fail(function(data) {

                console.log("could not post successfully to "+url);
            
            }).always(function(data) {

                callback(data);

            });
        }

        // $('#leave-comment').on('submit', function(e) {

        //     e.preventDefault();  //prevent form from submitting

        //     postToController('/comments', $( "#leave-comment" ).serialize(), function(data) {
        //         console.log(data);
        //     });


        // });

        


    })();

</script>

@endsection