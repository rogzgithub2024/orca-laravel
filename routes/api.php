<?php

use Illuminate\Support\Facades\Route;

// Example API routes
Route::get('/test', function () {
    return response()->json([
        'message' => 'Hello from Laravel API!',
        'status' => 'success',
        'timestamp' => now()->toDateTimeString(),
    ]);
});

Route::get('/user', function () {
    return response()->json([
        'message' => 'User endpoint - this would return user data',
        'status' => 'success',
    ]);
});

