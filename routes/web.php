<?php

Route::name('welcome')->get('/', function () {
    return view('welcome');
});   

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/friends', 'HomeController@index')->name('friends');
Route::get('/findUsers', 'HomeController@index')->name('findUsers');
Route::get('/rate', 'HomeController@index')->name('rate');

Route::get('/getUserInfo', 'HomeController@getUserInfo');


Route::get('/getUsers', 'HomeController@getUsers');
Route::post('/saveFriend', 'HomeController@saveFriend');
Route::post('/deleteFriend', 'HomeController@deleteFriend');

Route::get('/getUserFriends', 'HomeController@getUserFriends');
