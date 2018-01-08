<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="{{ asset('img/logo.svg') }}" rel="icon" type="image/svg">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <title>Rating App</title>
    </head>
    <body>
        <div class="container">
            @if (Route::has('login'))
                <div class="row p-2">
                    <div class="col-md-12 d-flex justify-content-end p-3">
                        @auth
                            <a class="btn btn-primary" href="{{ url('/home') }}">Home</a>
                        @else
                            <a class="btn btn-primary mr-3" href="{{ route('login') }}">Login</a>
                            <a class="btn btn-primary" href="{{ route('register') }}">Register</a>
                        @endauth
                    </div>                
                </div>
                <div class="col-md-12 d-flex justify-content-center mt-5">
                    <h1 class="text-center" style="font-size: 60px;">Rating App</h1>
                </div>
            @endif
        </div>
    </body>
</html>
