@extends('layouts.master')

	@section('head')
		
	@endsection

	@section('breadcrumbs')

	<ol class="breadcrumb">
	    <li><a href="index.html"><i class="fa fa-home fa-fw"></i> Home</a></li>
        <li><a href="/admin/users"> Users</a></li>
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



    </style>
        
        <div class="card">
        <div class="card-header">

            <div class="card-title">
                <div class="title">@yield('main-panel-title', 'System Admin')</div>
            </div>
            
        </div>
        <div class="card-body">
		
                <div class="row profile-wrapper">
                  <div class="col-xs-12 col-md-3 col-lg-3 profile-left">
                    <div class="profile-left-heading">
                      <a href="" class="profile-photo"><img class="center-block img-circle img-responsive" src="http://api.randomuser.me/portraits/men/{{rand(1,21)}}.jpg" alt=""></a>
                      <h2 class="profile-name">{{$user->name}}</h2>
                      <h4 class="profile-designation">Software Engineer</h4>

                      <br>
                    </div>
                    <div class="profile-left-body">
                      <h4 class="panel-title">About Me</h4>
                      <p>Social media ninja. Pop culture enthusiast. Zombie fanatic. General tv evangelist.</p>
                      <p>Alcohol fanatic. Explorer. Passionate reader. Entrepreneur. Lifelong coffee advocate. Avid bacon aficionado. Travel evangelist.</p>

                      <hr class="fadeout">

                      <h4 class="panel-title">Location</h4>
                      <p><i class="glyphicon glyphicon-map-marker mr5"></i> San Francisco, CA, USA</p>

                      <hr class="fadeout">

                      <h4 class="panel-title">Company</h4>
                      <p><i class="glyphicon glyphicon-briefcase mr5"></i> Awesome Company, Inc.</p>

                      <hr class="fadeout">

                      <h4 class="panel-title">Contacts</h4>
                        <p><i class="glyphicon glyphicon-phone mr5"></i> +1 010 123 5678</p>
                        <p><i class="glyphicon glyphicon-envelope mr5"></i> &nbsp{{$user->email}}</p>
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
                  <div class="col-md-6 col-lg-9 profile-right">
                    <div class="profile-right-body">
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
            </div>
        </div>

	@endsection