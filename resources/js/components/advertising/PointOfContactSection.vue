<template>
    <div class="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div
            class="flex items-center justify-between bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
            @click="isOpen = !isOpen"
        >
            <div class="flex items-center gap-3 r-p-3">
                <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clip-rule="evenodd" />
                </svg>
                <h3 class="text-lg font-semibold text-black">Point of Contact</h3>
            </div>
            <button
                type="button"
                class="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
                @click.stop="isOpen = !isOpen"
            >
                <svg
                    :class="`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
        <div v-if="isOpen" class="bg-gray-50 p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3">
            <div class="space-y-3">
                <label class="flex items-center gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="pointOfContact"
                        value="Same as Main Owner"
                        :checked="formData.pointOfContact === 'Same as Main Owner'"
                        @change="handleChange('pointOfContact', 'Same as Main Owner'); handleChange('otherPointOfContact', '')"
                        class="w-4 h-4 text-black focus:ring-black/10"
                    />
                    <span class="text-gray-800 font-medium">Same as Main Owner</span>
                </label>
                <label class="flex items-center gap-3 cursor-pointer">
                    <input
                        type="radio"
                        name="pointOfContact"
                        value="Other(Specify)"
                        :checked="formData.pointOfContact === 'Other(Specify)'"
                        @change="handleChange('pointOfContact', 'Other(Specify)')"
                        class="w-4 h-4 text-black focus:ring-black/10"
                    />
                    <span class="text-gray-800 font-medium">Other(Specify)</span>
                </label>
            </div>

            <div v-if="formData.pointOfContact === 'Other(Specify)'" class="mt-5 sm:mt-6">
                <input
                    type="text"
                    :value="formData.otherPointOfContact"
                    @input="handleChange('otherPointOfContact', $event.target.value)"
                    placeholder="Please specify"
                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    formData: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(['data-change']);

const isOpen = ref(true);

const handleChange = (field, value) => {
    emit('data-change', field, value);
};
</script>

