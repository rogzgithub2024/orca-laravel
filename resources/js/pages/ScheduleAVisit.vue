<template>
    <div class="min-h-screen bg-gray-50 flex items-start justify-center px-2 sm:px-4 pt-2 pb-4 sm:pb-8 md:pb-12">
        <div class="w-full max-w-4xl mt-8 sm:mt-12 md:mt-16">
            <!-- Success Message Screen -->
            <div v-if="isSubmitted" class="p-4 space-y-6">
                <div class="border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div class="p-6 sm:p-8 md:p-10">
                        <div class="flex items-center gap-3 mb-4">
                            <svg class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                            </svg>
                            <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-green-600">
                                Your visit request has been successfully submitted.
                            </h2>
                        </div>
                        <div class="space-y-2 text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed">
                            <p>
                                We will review your availability and contact you soon to confirm your visit.
                            </p>
                            <p>
                                Thank you for your interest in this property.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Form Content -->
            <div v-else class="border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <div class="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
                    <!-- Form Title -->
                    <div class="mb-6">
                        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Schedule a Visit
                        </h1>
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-6 sm:space-y-8">
                        <!-- Name Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label class="block mb-2 text-gray-800 font-medium">
                                    First Name <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    v-model="formData.firstName"
                                    required
                                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-gray-800 font-medium">
                                    Last Name <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    v-model="formData.lastName"
                                    required
                                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        <!-- Phone Number and Email -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div>
                                <label class="block mb-2 text-gray-800 font-medium">
                                    Phone Number <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    v-model="formData.phoneNumber"
                                    required
                                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                    placeholder="(778) 465-5658"
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-gray-800 font-medium">
                                    Email <span class="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    v-model="formData.email"
                                    required
                                    class="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                    placeholder="email@gmail.com"
                                />
                            </div>
                        </div>

                        <!-- Availability Section -->
                        <div class="space-y-4">
                            <div>
                                <label class="block mb-2 text-gray-800 font-medium">
                                    When are you available to view this property? <span class="text-red-500">*</span>
                                </label>
                                <p class="text-sm text-gray-600 mb-4">
                                    Please write a few times you are available to view this home over the next 3 days.
                                </p>
                            </div>

                            <!-- Availability 1 -->
                            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <label class="block mb-3 text-gray-800 font-medium">
                                    Availability 1 <span class="text-red-500">*</span>
                                </label>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">Date</label>
                                        <input
                                            type="date"
                                            v-model="formData.availability1.date"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">From</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability1.from"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">To</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability1.to"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Availability 2 -->
                            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <label class="block mb-3 text-gray-800 font-medium">
                                    Availability 2 
                                </label>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">Date</label>
                                        <input
                                            type="date"
                                            v-model="formData.availability2.date"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">From</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability2.from"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">To</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability2.to"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Availability 3 -->
                            <div class="border border-gray-200 rounded-lg p-4 bg-gray-50">
                                <label class="block mb-3 text-gray-800 font-medium">
                                    Availability 3 
                                </label>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">Date</label>
                                        <input
                                            type="date"
                                            v-model="formData.availability3.date"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">From</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability3.from"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-2 text-sm text-gray-700">To</label>
                                        <input
                                            type="time"
                                            v-model="formData.availability3.to"
                                            required
                                            class="w-full p-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 shadow-md focus:shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Message -->
                        <div>
                            <label class="block mb-2 text-gray-800 font-medium">
                                Message:
                            </label>
                            <textarea
                                v-model="formData.message"
                                rows="4"
                                class="w-full p-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl resize-y"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-4 flex justify-end">
                            <button
                                type="submit"
                                class="w-full sm:w-auto px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                            >
                                Schedule a Visit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScheduleAVisit',
    data() {
        return {
            isSubmitted: false,
            propertyAddress: '',
            formData: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                availability1: {
                    date: '',
                    from: '',
                    to: ''
                },
                availability2: {
                    date: '',
                    from: '',
                    to: ''
                },
                availability3: {
                    date: '',
                    from: '',
                    to: ''
                },
                message: ''
            }
        };
    },
    mounted() {
        // Get property address from route query parameter or use default
        const address = this.$route.query.address || '1227-1205 Howe St, Vancouver';
        this.propertyAddress = address;
        
        // Pre-populate message with property address
    },
    methods: {
        handleSubmit() {
            // Here you would typically send the form data to your backend API
            
            // For now, just show success message
            this.isSubmitted = true;
            
            // In a real application, you would do something like:
            // axios.post('/api/schedule-visit', this.formData)
            //     .then(response => {
            //         this.isSubmitted = true;
            //     })
            //     .catch(error => {
            //         console.error('Error submitting form:', error);
            //     });
        }
    }
};
</script>

