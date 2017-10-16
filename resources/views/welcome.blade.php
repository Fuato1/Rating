<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

        <title>Rating App</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="container">
            @if (Route::has('login'))
                <div class="row p-2">
                    <div class="col-md-12 d-flex justify-content-end">
                        @auth
                            <a class="btn btn-primary" href="{{ url('/home') }}">Home</a>
                        @else
                            <a class="btn btn-primary mr-3" href="{{ route('login') }}">Login</a>
                            <a class="btn btn-primary" href="{{ route('register') }}">Register</a>
                        @endauth
                    </div>                
                </div>
            @endif
        </div>
    </body>
</html>
