<template>
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div class="container mx-auto px-4 py-16">
            <!-- Home page content -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { api, ApiError } from '@/lib/api.js';

const apiResponse = ref(null);
const error = ref(null);
const loading = ref(false);

const testApi = async () => {
    loading.value = true;
    error.value = null;
    apiResponse.value = null;

    try {
        const response = await api.get('/test');
        apiResponse.value = response;
    } catch (err) {
        if (err instanceof ApiError) {
            error.value = err.message || 'Failed to fetch from API. Make sure Laravel server is running on http://localhost:8000';
        } else {
            error.value = 'Failed to fetch from API. Make sure Laravel server is running on http://localhost:8000';
        }
    } finally {
        loading.value = false;
    }
};
</script>

