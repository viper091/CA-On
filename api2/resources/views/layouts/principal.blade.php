<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <!-- <script src="{{ asset('js/app.js') }}" defer></script> -->

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <!-- <link href="{{ asset('css/app.css') }}" rel="stylesheet"> -->

    <link href="{{ asset('css/bulma.css') }} " rel="stylesheet" type="text/css"/>
    <link href="{{ asset('css/newcss.css') }} " rel="stylesheet" type="text/css"/>
</head>
<body>
    <div id="app">


    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="imagens/logo_1.png" alt="Bulma: a modern CSS framework based on Flexbox" width="" height="">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <div class="level">
                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item" href="paginaInicial.html">
                            Ínicio 
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Noticias
                        </a>
                        <a class="navbar-item" href="vacinasUsuario.html">
                            Carteirinha
                        </a>
                        <a class="navbar-item" href="sobre.html">
                            Sobre
                        </a>
                        @auth
                        <a href="{{ url('/Painel') }}">Home</a>
                        @else
                        <a  class="navbar-item level-right " href="{{ route('login') }}">Entrar</a>
                        <a class="navbar-item level-right " href="{{ route('register') }}">Registrar</a>
                         @endauth
                
                    </div>
                </div>
            </div>
        </nav>
        <main class="py-4">
            @yield('content')
        </main

        <footer class="footer">
        <div class="content has-text-centered">
        <p>
        <strong>Vacina Online
        </strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
        </div>
        </footer>

    </div>
</body>
</html>
