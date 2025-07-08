<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CharacterController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\EpisodeController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('characters',CharacterController::class);
Route::resource('locactions', LocationController::class);
Route::resource('episodes', EpisodeController::class);
