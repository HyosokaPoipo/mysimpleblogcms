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

Route::get('/', function () {
    return view('welcome');
});


Route::get('auth/login', [
    'as' => 'auth.login',
    'uses' => 'Auth\LoginController@hisokaLoginForm'
]);

Route::post('login', [
    'as' => 'auth.login.post',
    'uses' => 'LoginController@login'
]);

Route::post('logout', [
    'as' => 'auth.logout',
    'uses' => 'LoginController@logout'
]);

Route::get('password/reset', [
    'as' => 'password.reset',
    'uses' => 'ForgotPasswordController@showLinkRequestForm'
]);

Route::post('password/email', [
    'as' => 'password.email',
    'uses' => 'ForgotPasswordController@sendResetLinkEmail'
]);
Route::get('password/reset/{token}', [
    'as' => 'password.reset.token',
    'uses' => 'ResetPasswordController@showResetForm'
]);
Route::post('password/reset', [
    'as' => 'password.reset.post',
    'uses' => 'ResetPasswordController@reset'
]);

