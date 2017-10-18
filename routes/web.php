<?php

// Welcome route
Route::name('welcome')->get('/', function () {
    return view('welcome');
});   

// Auth routes
Auth::routes();

// Routes views
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/friends', 'HomeController@index')->name('friends');
Route::get('/findUsers', 'HomeController@index')->name('findUsers');
Route::get('/messages', 'HomeController@index')->name('messages');
Route::get('/newMessage', 'HomeController@index')->name('newMessage');
Route::get('/rate', 'HomeController@index')->name('rate');

// User / User friends routes
Route::get('/getUserInfo', 'HomeController@getUserInfo');
Route::get('/getUsers', 'HomeController@getUsers');
Route::get('/getUserFriends', 'HomeController@getUserFriends');
Route::post('/saveFriend', 'HomeController@saveFriend');
Route::post('/deleteFriend', 'HomeController@deleteFriend');

// Messages routes
Route::get('/getUserMessages', 'MessagesController@getUserMessages');
Route::post('/saveMessage', 'MessagesController@saveMessage');
Route::post('/deleteMessage', 'MessagesController@deleteMessage');