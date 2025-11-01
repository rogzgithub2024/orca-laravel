<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center px-2 sm:px-4 py-4 sm:py-8 md:py-12">
        <!-- Top Accent Bar -->
        <div class="fixed top-0 left-0 right-0 bg-black h-2 z-10"></div>
        
        <!-- Main Content - Centered -->
        <div class="w-full max-w-6xl mt-2">
            <div class="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 flex flex-col">
                <!-- Header Section with Branding - Inside the box -->
                <div class="border-b border-gray-200 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-0 sm:pt-8 md:pt-12 lg:pt-16 pb-0 sm:pb-8 md:pb-12 lg:pb-16">
                    <div class="flex flex-col items-center gap-2 sm:gap-4 md:gap-6">
                        <StepIndicator :steps="steps" :current-step="currentStep" />
                    </div>
                </div>

                <div class="flex flex-col lg:flex-row flex-1 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
                    <!-- Left Panel - Information -->
                    <div class="r-p-3 bg-[#F3F2F3] lg:w-2/5 text-gray-900 relative overflow-hidden">
                        <div v-if="currentStep === 1" class="relative z-10 h-full flex flex-col px-4 py-4 sm:px-6 sm:py-6 md:px-12 md:py-12 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
                            <div class="mb-4 sm:mb-6 md:mb-10 lg:mb-14">
                                <div class="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                                    <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900 text-center">
                                        Orca Realty Inc.
                                    </h1>
                                </div>
                                <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-6 leading-tight mt-2 sm:mt-3 md:mt-4 text-center">
                                    Free Rental Consultation
                                </h2>
                                <p class="r-mb-3 r-mt-3 text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-2 sm:mt-3 md:mt-4 text-center">
                                    Get expert advice at no cost
                                </p>
                            </div>
                            
                            <div class="space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 text-gray-700 leading-relaxed flex-1 text-sm sm:text-base md:text-lg lg:text-xl">
                                <div class="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                                    <div class="flex-shrink-0 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                                        <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p class="pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                                        Tell us about your property, and one of our Property Management
                                        experts will prepare a <strong class="text-gray-900 font-bold">personalized Rental Evaluation</strong> for you
                                        — completely free.
                                    </p>
                                </div>
                                <div class="flex items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 r-mt-4">
                                    <div class="flex-shrink-0 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
                                        <svg class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <p class="pr-2 sm:pr-4 md:pr-6 lg:pr-8">
                                        Providing complete details ensures you receive the most
                                        accurate advice and recommendations tailored to your property.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <!-- Add step 2 content here -->
                        <div class="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-black/5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
                        <div class="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-black/5 rounded-full -ml-12 sm:-ml-18 md:-ml-24 -mb-12 sm:-mb-18 md:-mb-24"></div>
                    </div>

                    <!-- Right Panel - Form -->
                    <div class="r-p-3 lg:w-3/5 p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 bg-white flex flex-col lg:max-h-[650px] min-h-0">
                        <p class="text-center text-gray-600">Form content will be added here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import StepIndicator from '@/components/newbiz-organic/StepIndicator.vue';

const currentStep = ref(1);
const steps = [
    { number: 1, title: 'Property Location' },
    { number: 2, title: 'Property Information' },
];

const handleNext = () => {
    if (currentStep.value < steps.length) {
        currentStep.value++;
    }
};

const handleBack = () => {
    if (currentStep.value > 1) {
        currentStep.value--;
    }
};
</script>

