<template>
    <div class="fixed top-0 left-0 right-0 w-full bg-white/90 backdrop-blur border-b border-gray-200 z-50">
        <div class="px-6 bg-gray-100 shadow-md">
            <div class="w-full max-w-6xl lg:max-w-[1900px] mx-auto" >
                <!-- Mobile/Small: scrollable with connectors -->
                <div class="flex md:hidden items-center justify-start gap-4 sm:gap-6 overflow-x-auto py-3">
                    <div v-for="step in steps" :key="step.number" class="flex items-center flex-shrink-0 w-20 sm:w-24">
                        <div class="flex flex-col items-center gap-2 w-full">
                            <div
                                :class="[
                                    'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300',
                                    step.number === currentStep
                                        ? 'bg-black text-white border-2 border-black'
                                        : step.number < currentStep
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                                ]"
                            >
                                <svg v-if="step.number < currentStep" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span v-else>{{ step.number }}</span>
                            </div>
                            <span :class="['text-xs font-semibold text-center w-full break-words', step.number === currentStep ? 'text-gray-900' : 'text-gray-500']">
                                {{ step.title }}
                            </span>
                        </div>
                    </div>
                </div>
                
                <!-- Desktop: horizontal tabs -->
                <div class="hidden md:flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 py-4">
                    <div v-for="(step, index) in steps" :key="step.number" class="flex items-center flex-shrink-0 flex-1 max-w-[140px] md:max-w-[260px]">
                        <!-- Step Circle and Title -->
                        <div class="flex flex-col items-center gap-2 w-full">
                            <div
                                :class="[
                                    'w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300',
                                    step.number === currentStep
                                        ? 'bg-black text-white border-2 border-black shadow-lg scale-110'
                                        : step.number < currentStep
                                        ? 'bg-gray-800 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-400 border-2 border-gray-300'
                                ]"
                            >
                                <svg v-if="step.number < currentStep" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                                <span v-else>{{ step.number }}</span>
                            </div>
                            <span :class="['text-xs sm:text-sm font-semibold text-center w-full break-words', step.number === currentStep ? 'text-gray-900' : 'text-gray-500']">
                                {{ step.title }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    steps: {
        type: Array,
        required: true,
    },
    currentStep: {
        type: Number,
        required: true,
    },
});
</script>

