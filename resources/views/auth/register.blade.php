@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
            <form class="jumbotron mt-2" method="POST" action="{{ route('register') }}">
                {{ csrf_field() }}

                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    <label for="name" style="font-size: 14px;">Name</label>

                    <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}" required autofocus>

                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <label for="email" style="font-size: 14px;">E-Mail Address</label>

                    <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}" required>

                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="password" style="font-size: 14px;">Password</label>

                    <input id="password" type="password" class="form-control" name="password" required>

                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group">
                    <label for="password-confirm" style="font-size: 14px;">Confirm Password</label>

                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                </div>

                <hr>

                <div class="form-group d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary" style="font-size: 14px;">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

@endsection
