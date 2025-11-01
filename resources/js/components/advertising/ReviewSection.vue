<template>
    <div class="space-y-6">
        <div class="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                <div class="flex items-center gap-3 r-p-3">
                    <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clip-rule="evenodd" />
                    </svg>
                    <h3 class="text-lg font-semibold text-black">Review</h3>
                </div>
            </div>
            <div class="r-p-3 space-y-6 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10">
                <p class="text-gray-600">Review section will display all form data here</p>
            </div>
        </div>

        <!-- Buttons -->
        <div class="flex-shrink-0 r-mt-3 r-pt-3 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
            <button
                v-if="onBack"
                @click="onBack"
                class="r-p-3 cursor-pointer bg-white text-black border border-gray-300 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Other Details
            </button>

            <button
                v-if="onSubmit"
                @click="onSubmit"
                class="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
                Submit
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    onBack: Function,
    onSubmit: Function,
    data: {
        type: Object,
        default: () => ({}),
    },
});
</script>

