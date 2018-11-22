@extends('layouts.principal')

@section('content')

<div class="container">

    <h1 class="title has-text-success is-size-2">
        Bem Vindo (a)                        
    </h1>
    <h2 class="subtitle">
        Faça Login aqui
    </h2>

    <div class="columns">
        <div class="column ">
            <form method="POST" action="{{ route('login') }}">
                    @csrf

                    <div class="field ">
                        <label class="label has-text-success">Email</label>
                        <div class="control">
            
                            <input id="email" type="email" class="input is-medium is-hovered {{ $errors->has('email') ? ' is-danger' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                            @if ($errors->has('email'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                                @endif
                            </div>
                    </div>

                    <div class="field">
                        <label class="label has-text-success">Senha</label>
                        <div class="control">
                            <!-- <input class="input is-medium is-hovered" type="text" placeholder="Text input"> -->

                            <input id="password" type="password" class="input is-medium is-hovered{{ $errors->has('password') ? ' is-danger' : '' }}" name="password" required>

                            @if ($errors->has('password'))
                                <span class="invalid-feedback">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
                    <nav class="level">
                        <div class="control level-left">
                        <button type="submit" class="button is-primary">
                                    {{ __('Login') }}
                                </button>
                        </div>
                        <div class="level-right">
                            <a href="#">Esqueci minha senha</a>
                            
                            
                        </div>
                        <br><br><br><br>
                        <div class="level-left">
                            ainda não tem uma conta?         <a href=""> Cadastre-se aqui</a>
                        </div>
                    </nav>
                </form>
            </div>
     
        
        
        
        
            
        <div class="column">
            
            <img src="imagens/logo_1.png" alt="hero" width="500" height="800"/>
            <br>  
            
            
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
                            
        </div>
    </div> 
</div>
    
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-sm-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" required autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
