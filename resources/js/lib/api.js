// API utility functions for Laravel backend

const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export class ApiError extends Error {
    constructor(message, status, data) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

async function request(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    
    const config = {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new ApiError(
                errorData.message || `HTTP error! status: ${response.status}`,
                response.status,
                errorData
            );
        }

        return await response.json();
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(
            error instanceof Error ? error.message : 'Network error occurred',
            0,
            error
        );
    }
}

export const api = {
    get: (endpoint) => {
        return request(endpoint, { method: 'GET' });
    },

    post: (endpoint, body) => {
        return request(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    put: (endpoint, body) => {
        return request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    },

    delete: (endpoint) => {
        return request(endpoint, { method: 'DELETE' });
    },
};

