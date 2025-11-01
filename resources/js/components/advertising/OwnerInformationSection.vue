<template>
    <div class="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div
            class="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
            @click="isOpen = !isOpen"
        >
            <div class="flex items-center gap-3 r-p-3">
                <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clip-rule="evenodd" />
                </svg>
                <h3 class="text-lg font-semibold text-black">Owner's Information</h3>
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
        <div v-if="isOpen" class="r-p-3 space-y-5 sm:space-y-6">
            <div class="space-y-5 sm:space-y-6">
                <h5 class="font-semibold text-gray-800 text-base sm:text-lg r-mb-2 r-mt-2">Owner</h5>
                <p class="text-red-400 text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 font-medium r-mb-2">
                    Please enter Owner Legal Name or Business Legal Name (if applicable)
                </p>
                <!-- Business Legal Name, Owner Email, Phone in one row -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-6 lg:gap-3">
                    <!-- Business Legal Name -->
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            Business Legal Name
                        </label>
                        <input
                            type="text"
                            :value="formData.businessLegalName"
                            @input="handleChange('businessLegalName', $event.target.value)"
                            placeholder="Business Legal Name"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>

                    <!-- Owner Email -->
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            Owner Email <span class="text-red-500 text-xl">*</span>
                        </label>
                        <input
                            type="email"
                            :value="formData.ownerEmail"
                            @input="handleChange('ownerEmail', $event.target.value)"
                            placeholder="Owner Email is required*"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>

                    <!-- Phone -->
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            Phone <span class="text-red-500 text-xl">*</span>
                        </label>
                        <input
                            type="tel"
                            :value="formData.phone"
                            @input="handleChange('phone', $event.target.value)"
                            placeholder="(000) 000-0000"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>
                </div>

                <!-- First Name, Last Name, Date of Birth in one row -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-6 lg:gap-3">
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            First Name <span class="text-red-500 text-xl">*</span>
                            <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            :value="formData.firstName"
                            @input="handleChange('firstName', $event.target.value)"
                            placeholder="First Name*"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            Last Name <span class="text-red-500 text-xl">*</span>
                            <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </label>
                        <input
                            type="text"
                            :value="formData.lastName"
                            @input="handleChange('lastName', $event.target.value)"
                            placeholder="Last Name*"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>
                    <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                        <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                            Date of Birth <span class="text-red-500 text-xl">*</span>
                            <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                        </label>
                        <input
                            type="date"
                            :value="formData.dateOfBirth"
                            @input="handleChange('dateOfBirth', $event.target.value)"
                            class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                        />
                    </div>
                </div>

                <!-- Resident Status -->
                <div class="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 r-p-3 r-mb-3">
                    <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-4 sm:mb-5 lg:mb-6">
                        Resident Status <span class="text-red-500 text-xl">*</span>
                    </label>
                    <p class="text-red-400 text-sm sm:text-base mb-4 sm:mb-5 lg:mb-6 font-medium r-mb-2">
                        [When filing your taxes do you claim you are a Resident or Non-resident?]
                    </p>
                    <div class="flex flex-wrap items-center gap-6">
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="residentStatus"
                                value="Resident"
                                :checked="formData.residentStatus === 'Resident'"
                                @change="handleChange('residentStatus', 'Resident')"
                                class="w-4 h-4 text-black focus:ring-black/10"
                            />
                            <span class="text-gray-800 font-medium">Resident</span>
                        </label>
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="residentStatus"
                                value="Non-Resident"
                                :checked="formData.residentStatus === 'Non-Resident'"
                                @change="handleChange('residentStatus', 'Non-Resident')"
                                class="w-4 h-4 text-black focus:ring-black/10"
                            />
                            <span class="text-gray-800 font-medium">Non-Resident</span>
                        </label>
                    </div>
                </div>

                <!-- Co-Owners -->
                <div v-if="formData.coOwners && formData.coOwners.length > 0" class="space-y-5 sm:space-y-6 pt-5 border-t border-gray-200 r-mb-3">
                    <h5 class="font-semibold text-gray-800 text-base sm:text-lg r-mb-2 r-mt-2">Co-Owners</h5>
                    <div v-for="(coOwner, index) in formData.coOwners" :key="index" class="r-p-3 bg-gray-100 p-5 sm:p-6 rounded-2xl space-y-5 border border-gray-200 r-mb-2">
                        <div class="flex justify-between items-center">
                            <h6 class="font-medium text-gray-800">Co-Owner {{ index + 1 }}</h6>
                            <button
                                type="button"
                                @click="removeCoOwner(index)"
                                class="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                                Remove
                            </button>
                        </div>

                        <p class="text-red-400 text-sm sm:text-base mb-1 font-medium r-mb-2">
                            Please enter Co-Owner Legal Name
                        </p>

                        <!-- Row 1: Email and Resident Status -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    Co-Owner Email is required<span class="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="email"
                                    :value="coOwner.ownerEmail || ''"
                                    @input="updateCoOwner(index, 'ownerEmail', $event.target.value)"
                                    placeholder="Co-Owner Email is required*"
                                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                                />
                            </div>
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    Resident Status <span class="text-red-500 text-xl">*</span>
                                </label>
                                <p class="text-red-400 text-sm sm:text-base mb-3 font-medium r-mb-2">
                                    [When filing your taxes do you claim you are a Resident or Non-resident?]
                                </p>
                                <div class="flex flex-wrap items-center gap-6">
                                    <label class="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            :name="`coOwner-${index}-residentStatus`"
                                            value="Resident"
                                            :checked="(coOwner.residentStatus || '') === 'Resident'"
                                            @change="updateCoOwner(index, 'residentStatus', 'Resident')"
                                            class="w-4 h-4 text-black focus:ring-black/10"
                                        />
                                        <span class="text-gray-800 font-medium">Resident</span>
                                    </label>
                                    <label class="flex items-center gap-3 cursor-pointer">
                                        <input
                                            type="radio"
                                            :name="`coOwner-${index}-residentStatus`"
                                            value="Non-Resident"
                                            :checked="(coOwner.residentStatus || '') === 'Non-Resident'"
                                            @change="updateCoOwner(index, 'residentStatus', 'Non-Resident')"
                                            class="w-4 h-4 text-black focus:ring-black/10"
                                        />
                                        <span class="text-gray-800 font-medium">Non-Resident</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Row 2: Phone, First Name, Last Name, DOB -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 r-mt-3">
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    Phone <span class="text-red-500 text-xl">*</span>
                                </label>
                                <input
                                    type="tel"
                                    :value="coOwner.phone || ''"
                                    @input="updateCoOwner(index, 'phone', $event.target.value)"
                                    placeholder="(000) 000-0000"
                                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                                />
                            </div>
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    First Name <span class="text-red-500 text-xl">*</span>
                                    <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg>
                                </label>
                                <input
                                    type="text"
                                    :value="coOwner.firstName"
                                    @input="updateCoOwner(index, 'firstName', $event.target.value)"
                                    placeholder="First Name*"
                                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                                />
                            </div>
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    Last Name <span class="text-red-500 text-xl">*</span>
                                    <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg>
                                </label>
                                <input
                                    type="text"
                                    :value="coOwner.lastName"
                                    @input="updateCoOwner(index, 'lastName', $event.target.value)"
                                    placeholder="Last Name*"
                                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                                />
                            </div>
                            <div>
                                <label class="flex items-center gap-2 text-base sm:text-lg lg:text-md text-gray-800 mb-2">
                                    Date of Birth <span class="text-red-500 text-xl">*</span>
                                    <svg class="w-5 h-5 text-black cursor-help" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg>
                                </label>
                                <input
                                    type="date"
                                    :value="coOwner.dateOfBirth"
                                    @input="updateCoOwner(index, 'dateOfBirth', $event.target.value)"
                                    placeholder="Date of Birth*"
                                    class="r-p-5 w-full px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base sm:text-lg lg:text-xl text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl font-medium"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Add Co-Owner Button -->
                <button
                    type="button"
                    @click="addCoOwner"
                    class="r-p-2 cursor-pointer flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Co-Owner/s
                </button>
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

const addCoOwner = () => {
    const newCoOwner = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        ownerEmail: '',
        phone: '',
        residentStatus: '',
    };
    const updated = [...(props.formData.coOwners || []), newCoOwner];
    emit('data-change', 'coOwners', updated);
};

const updateCoOwner = (index, field, value) => {
    const updated = [...(props.formData.coOwners || [])];
    updated[index] = { ...updated[index], [field]: value };
    emit('data-change', 'coOwners', updated);
};

const removeCoOwner = (index) => {
    const updated = (props.formData.coOwners || []).filter((_, i) => i !== index);
    emit('data-change', 'coOwners', updated);
};
</script>

