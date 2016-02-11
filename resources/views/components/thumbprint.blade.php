<style>
    .thumbprint {
        padding: 2rem;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid transparent;
        line-height: 1.25rem !important;
        font-family: "Lato";
        -webkit-transition: all .2s; /* Safari */
        transition: all .2s;
    }
    .thumbprint.sm {
        padding: 1rem;
        cursor: pointer;
        border-radius: 3px;
        border: 1px solid transparent;
        line-height: 1rem !important;
        font-family: "Lato";
        -webkit-transition: all .2s; /* Safari */
        transition: all .2s;
    }
    .thumbprint a{
        color: #555459 !important;
        font-weight: 700 !important;
    }
    .thumbprint:hover {
        border-color: #d9d9d9;
    }
    .thumbprint.sm:hover {
        border-color: transparent;
        background-color:#F3F4FD;
    }
    .thumbprint_img {
        width: 72px;
        height: 72px;
        border-radius: 5px;
        margin-right:10px;
    }
    .sm .thumbprint_img {
        width: 32px;
        height: 32px;
    }
    .thumbprint_title {

        color:#555459;
        font-size: 20px;
        line-height: 24px;
        /*-webkit-font-smoothing: antialiased;*/
    }
    .sm .thumbprint_title {
        font-size: 16px;
        line-height: 18px;
    }
    .thumbprint_subtitle {
        font-size: 16px;
        line-height: 18px;
        color:grey;
    }
    .sm .thumbprint_subtitle {
        font-size: 13px;
        line-height: 16px;
    }
</style>
<div class="col-sm-12 thumbprint {{$size}}">
    <div class="">
        <img style="float: left;" src="{{$img}}" class="img-responsive thumbprint_img">
        <div class="member_name_and_title">
            <div class="">
                <a href="#" class="thumbprint_title">{{$title}}</a>
            </div>
            <div>
                <span class="thumbprint_subtitle">{{$subtitle}}</span>
            </div>
        </div>
    </div>
</div>