<template>
    <div class="min-h-screen bg-gray-50 flex items-start justify-center px-2 sm:px-4 pt-24 sm:pt-28 md:pt-32 pb-4 sm:pb-8 md:pb-12">
        <div class="w-full max-w-6xl lg:max-w-7xl">
            <!-- Step Indicator -->
            <StepIndicator :steps="steps" :current-step="currentStep" />

            <!-- Main Form Content - Centered -->
            <div class="r-mt-15 bg-white rounded-lg overflow-hidden border border-gray-200 " 
                 style="scrollbar-width: thin; scrollbar-color: #9ca3af #f3f4f6;" >
                <div class="p-4 sm:p-6 md:p-12 lg:p-16 xl:p-20 " >
                    <div v-if="currentStep === 1" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <OwnerInformationSection
                            :form-data="formData"
                            @data-change="handleDataChange"
                        />
                        <PointOfContactSection
                            :form-data="formData"
                            @data-change="handleDataChange"
                        />
                        <MailingInformationSection
                            :form-data="formData"
                            @data-change="handleDataChange"
                        />
                    </div>
                    <div v-if="currentStep === 2" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <RentalPropertyInformationSection 
                            :on-back="handleBack" 
                            :on-next="handleNext" 
                            :form-data="formData" 
                            @data-change="handleDataChange" 
                        />
                    </div>
                    <div v-if="currentStep === 3" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <OccupancyAvailabilitySection 
                            :on-back="handleBack" 
                            :on-next="handleNext" 
                            :form-data="formData" 
                            @data-change="handleDataChange" 
                        />
                    </div>
                    <div v-if="currentStep === 4" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <UtilitiesInclusionsRestrictionsSection 
                            :on-back="handleBack" 
                            :on-next="handleNext" 
                            :form-data="formData" 
                            @data-change="handleDataChange" 
                        />
                    </div>
                    <div v-if="currentStep === 5" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <OtherDetailsSection 
                            :on-back="handleBack" 
                            :on-next="handleNext" 
                            :form-data="formData" 
                            @data-change="handleDataChange" 
                        />
                    </div>
                    <div v-if="currentStep === 6" class="p-4 space-y-5 sm:space-y-6 md:space-y-8">
                        <ReviewSection 
                            :data="formData" 
                            :on-back="handleBack" 
                            @submit="handleSubmit" 
                        />
                    </div>
                </div>

                <!-- Navigation Button -->
                <div v-if="currentStep === 1" class="p-4 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pb-6 sm:pb-8 md:pb-12 flex justify-end border-t border-gray-200 pt-6">
                    <button
                        @click="handleNext"
                        class="p-4 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        Rental Property Information & Features
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import StepIndicator from '@/components/advertising/StepIndicator.vue';
import OwnerInformationSection from '@/components/advertising/OwnerInformationSection.vue';
import PointOfContactSection from '@/components/advertising/PointOfContactSection.vue';
import MailingInformationSection from '@/components/advertising/MailingInformationSection.vue';
import RentalPropertyInformationSection from '@/components/advertising/RentalPropertyInformationSection.vue';
import OccupancyAvailabilitySection from '@/components/advertising/OccupancyAvailabilitySection.vue';
import UtilitiesInclusionsRestrictionsSection from '@/components/advertising/UtilitiesInclusionsRestrictionsSection.vue';
import OtherDetailsSection from '@/components/advertising/OtherDetailsSection.vue';
import ReviewSection from '@/components/advertising/ReviewSection.vue';

const currentStep = ref(1);
const steps = [
    { number: 1, title: 'Homeowner Details' },
    { number: 2, title: 'Rental Property Information & Features' },
    { number: 3, title: 'Occupancy and Property Availability' },
    { number: 4, title: 'Utilities, Inclusions, Restrictions' },
    { number: 5, title: 'Other Details' },
    { number: 6, title: 'Review' },
];

const formData = reactive({
    // Owner Information
    businessLegalName: '',
    ownerEmail: '',
    phone: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    residentStatus: 'Resident',
    coOwners: [],
    
    // Point of Contact
    pointOfContact: 'Same as Main Owner',
    otherPointOfContact: '',
    
    // Mailing Information
    unitSuite: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',

    // Step 2 - Rental Property Information & Features
    rental: {
        unitSuite: '',
        streetAddress: '',
        city: '',
        province: '',
        postalCode: '',
        neighborhood: '',
        yearBuilt: '',
        totalFloorArea: '',
        keys: '',
        bedrooms: '',
        bathrooms: '',
        den: '',
        balconyPatio: '',
        storage: '',
        fireplaceTypes: [],
        alarmCode: '',
        parking: [],
        laundry: '',
        heating: [],
    },

    // Step 3 - Occupancy & Availability
    occupancy: {
        availableAsap: '',
        renovationPlans: '',
        fixedTermOnly: '',
        boostAd: '',
        anticipatedDate: '',
        rentalTerm: '',
    },

    // Step 4 - Utilities/Inclusions/Restrictions
    utilities: {
        water: '',
        electricity: '',
        gas: '',
        heat: '',
        inclusions: [],
        furnishing: '',
        pets: '',
        propertyType: '',
    },

    // Step 5 - Other Details
    other: {
        strataCompany: '',
        strataManagerName: '',
        strataPhone: '',
        strataEmail: '',
        buildingManagerName: '',
        buildingManagerPhone: '',
        buildingManagerEmail: '',
        moveInFees: '',
        amenities: [],
        signUpFront: '',
        maintenance: [],
        sprinklersService: '',
        hasSelfContainedSuite: '',
        fuseBoxLocation: '',
        amenitiesFloor: '',
        bikeStorageLocation: '',
        garbageInfo: '',
        amenitiesNotes: '',
        virtualTour: '',
        listingUrl: '',
    },
});

const handleDataChange = (path, value) => {
    const keys = path.split('.');
    let obj = formData;
    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!obj[k] || typeof obj[k] !== 'object') {
            obj[k] = {};
        }
        obj = obj[k];
    }
    obj[keys[keys.length - 1]] = value;
};

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

const handleSubmit = () => {
    // TODO: submit handler
};
</script>

