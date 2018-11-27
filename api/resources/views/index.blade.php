<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{env('APP_NAME')}}</title>
        <base href="/">
        <!-- Fonts -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="angular/styles.css"></head>
<body>
  <app-root></app-root>

  <script type="text/javascript" 
  src="angular/runtime.js"></script><script type="text/javascript" 
  src="angular/polyfills.js"></script><script type="text/javascript" 
  src="angular/styles.js"></script><script type="text/javascript" 
  src="angular/scripts.js"></script><script type="text/javascript" 
  src="angular/vendor.js"></script><script type="text/javascript" 
  src="angular/main.js"></script></body>
</html>
