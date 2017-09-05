<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

    Route::get('auth/login', [
        'as' => 'auth.login',
        'uses' => 'LoginController@hisokaLoginForm'
    ]);

    Route::post('login', [
        'as' => 'auth.login.post',
        'uses' => 'LoginController@login'
    ]);

    Route::post('logout', [
        'as' => 'auth.logout',
        'uses' => 'LoginController@logout'
    ]);
});
