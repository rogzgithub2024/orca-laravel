<?php

use Illuminate\Support\Facades\Route;

// API routes are in routes/api.php and automatically prefixed with /api
// All other routes should return the Vue app for client-side routing
Route::get('/{any?}', function () {
    return view('app');
})->where('any', '.*')->name('vue');
