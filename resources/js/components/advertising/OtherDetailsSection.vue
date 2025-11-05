<template>
    <div class="space-y-6">
        <div class="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div
                class="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                @click="isOpen = !isOpen"
            >
                <div class="flex items-center gap-3 r-p-3">
                    <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clip-rule="evenodd" />
                    </svg>
                    <h3 class="text-lg font-semibold text-black">Other Details</h3>
                </div>
                <button
                    type="button"
                    class="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
                    @click.stop="isOpen = !isOpen"
                >
                    <svg
                        :class="`w-5 h-5 transform transition-transform duration-200 text-gray-400 ${isOpen ? 'rotate-180' : ''}`"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            <div v-if="isOpen" class="p-2 lg:p-5 space-y-5 sm:space-y-3">
                <!-- Other Details header note -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <div class="space-y-1">
                        <p class="text-gray-800 font-medium">OTHER DETAILS</p>
                        <p class="text-sm text-red-400">If rental unit is Condo kindly provide following data. If property is a house, please proceed to next page.</p>
                    </div>

                    <!-- Strata company -->
                    <div class="r-mt-2">
                        <label class="block mb-2 text-gray-800">Name of Strata Property Management Company.</label>
                        <input
                            type="text"
                            :value="d.other?.strataCompany || ''"
                            @input="handleDataChange('other.strataCompany', $event.target.value)"
                            class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                        />
                    </div>
                </div>

                <!-- Contacts -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <p class="text-sm text-red-400">Kindly provide names and means of contact (email and/or number, if unable to provide please skip to next section)</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 r-mt-2">
                        <div>
                            <label class="block mb-2 text-gray-800">Strata Manager Name</label>
                            <input
                                type="text"
                                :value="d.other?.strataManagerName || ''"
                                @input="handleDataChange('other.strataManagerName', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-gray-800">Strata Phone</label>
                            <input
                                type="tel"
                                :value="d.other?.strataPhone || ''"
                                @input="handleDataChange('other.strataPhone', $event.target.value)"
                                placeholder="(000) 000-0000"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-gray-800">Strata Email Address</label>
                            <input
                                type="email"
                                :value="d.other?.strataEmail || ''"
                                @input="handleDataChange('other.strataEmail', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-gray-800">Building Manager Name</label>
                            <input
                                type="text"
                                :value="d.other?.buildingManagerName || ''"
                                @input="handleDataChange('other.buildingManagerName', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-gray-800">Phone</label>
                            <input
                                type="tel"
                                :value="d.other?.buildingManagerPhone || ''"
                                @input="handleDataChange('other.buildingManagerPhone', $event.target.value)"
                                placeholder="(000) 000-0000"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                        <div>
                            <label class="block mb-2 text-gray-800">Email Address</label>
                            <input
                                type="email"
                                :value="d.other?.buildingManagerEmail || ''"
                                @input="handleDataChange('other.buildingManagerEmail', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                <!-- Move in fees -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <label class="block mb-1 text-gray-800">Move In Fees</label>
                    <p class="text-sm text-red-400 r-mb-1">Kindly provide amount of move in fees.</p>
                    <div class="relative w-full sm:w-80">
                        <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium text-base sm:text-lg lg:text-xl">$</span>
                        <input
                            type="text"
                            :value="formatMoveInFees(d.other?.moveInFees)"
                            @input="handleMoveInFeesChange($event.target.value)"
                            placeholder="0.00"
                            class="w-full pl-8 pr-4 p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                        />
                    </div>
                </div>

                <!-- Amenities checklist -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <label class="block text-gray-800 font-medium">Kindly tick utilities/other items available in the rental property.</label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <label
                            v-for="label in amenitiesOptions"
                            :key="label"
                            class="flex items-center gap-3 text-gray-800 cursor-pointer"
                        >
                            <input
                                type="checkbox"
                                class="w-5 h-5 accent-black cursor-pointer"
                                :checked="(d.other?.amenities || []).includes(label)"
                                @change="handleAmenityChange(label, $event.target.checked)"
                            />
                            <span>{{ label }}</span>
                        </label>
                    </div>
                    <div v-if="(d.other?.amenities || []).includes('Other')" class="mt-4 space-y-2">
                        <label class="block mb-2 text-gray-800 font-medium">Utilities/Other Items <span class="text-red-500">*</span></label>
                        <p class="text-red-500 text-sm">Please provide the Utilities/Other Items</p>
                        <textarea
                            :value="d.other?.amenitiesOtherDetail || ''"
                            @input="handleDataChange('other.amenitiesOtherDetail', $event.target.value)"
                            rows="4"
                            class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl resize-y"
                        ></textarea>
                    </div>
                </div>

                <!-- Sign up front -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <label class="block text-gray-800">Is it okay to put a sign up front? <span class="text-xs text-gray-500">(highly recommend as it increases inquiries up to 20%)</span></label>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                        <label
                            v-for="label in ['Yes', 'No']"
                            :key="label"
                            class="flex items-center gap-3 text-gray-800 cursor-pointer"
                        >
                            <input
                                type="radio"
                                name="signUpFront"
                                class="w-5 h-5 accent-black cursor-pointer"
                                :checked="d.other?.signUpFront === label"
                                @change="handleDataChange('other.signUpFront', label)"
                            />
                            <span>{{ label }}</span>
                        </label>
                    </div>
                </div>

                <!-- Ongoing maintenance -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                    <label class="block text-gray-800 font-medium">ONGOING MAINTENANCE</label>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div
                            v-for="label in maintenanceOptions"
                            :key="label"
                            class="flex items-center gap-3"
                        >
                            <label class="flex items-center gap-2 text-gray-800 min-w-fit cursor-pointer">
                                <input
                                    type="checkbox"
                                    class="w-5 h-5 accent-black cursor-pointer"
                                    :checked="(d.other?.maintenance || []).includes(label)"
                                    @change="handleMaintenanceChange(label, $event.target.checked)"
                                />
                                <span class="whitespace-nowrap">{{ label }}</span>
                            </label>
                            <div v-if="(d.other?.maintenance || []).includes(label)" class="relative flex-1">
                                <select
                                    :value="d.other?.maintenanceFrequencies?.[label] || ''"
                                    @change="handleMaintenanceFrequencyChange(label, $event.target.value)"
                                    class="w-full p-2 pr-8 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                >
                                    <option value="">-- Select --</option>
                                    <option v-if="label === 'Heating system' || label === 'Chimney'" value="Annual maintenance is preferred">Annual maintenance is preferred</option>
                                    <option v-if="label === 'Heating system' || label === 'Chimney'" value="No, I will inform Orca Realty if I want it serviced in the future">No, I will inform Orca Realty if I want it serviced in the future</option>
                                    <option v-if="label === 'Garden Maintenance Seasonal'" value="Monthly gardening, Spring">Monthly gardening, Spring</option>
                                    <option v-if="label === 'Garden Maintenance Seasonal'" value="Autumn Only, No gardening included.">Autumn Only, No gardening included.</option>
                                    <option v-if="label === 'Lawn Maintenance'" value="Full mowing services included Lawnmower included">Full mowing services included Lawnmower included</option>
                                    <option v-if="label === 'Lawn Maintenance'" value="Nothing included">Nothing included</option>
                                    <option v-if="label !== 'Heating system' && label !== 'Chimney' && label !== 'Garden Maintenance Seasonal' && label !== 'Lawn Maintenance'" value="Once a year">Once a year</option>
                                    <option v-if="label !== 'Heating system' && label !== 'Chimney' && label !== 'Garden Maintenance Seasonal' && label !== 'Lawn Maintenance'" value="Twice a year">Twice a year</option>
                                    <option v-if="label !== 'Heating system' && label !== 'Chimney' && label !== 'Garden Maintenance Seasonal' && label !== 'Lawn Maintenance'" value="NA">NA</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sprinklers and suite -->
                <div class="grid grid-cols-1 gap-5 r-mt-3">
                    <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                        <label class="block mb-2 text-gray-800">Inground Sprinklers that need servicing?</label>
                        <div class="relative w-full sm:w-80">
                            <select
                                :value="d.other?.sprinklersService || ''"
                                @change="handleDataChange('other.sprinklersService', $event.target.value)"
                                class="w-full p-2 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            >
                                <option value="">-- Select --</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm">
                        <label class="block mb-2 text-gray-800">Has self-contained suite?</label>
                        <div class="relative w-full sm:w-80">
                            <select
                                :value="d.other?.hasSelfContainedSuite || ''"
                                @change="handleDataChange('other.hasSelfContainedSuite', $event.target.value)"
                                class="w-full p-2 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            >
                                <option value="">-- Select --</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                        <div v-if="d.other?.hasSelfContainedSuite === 'Yes'" class="mt-4 space-y-4">
                            <div>
                                <label class="block mb-2 text-gray-800">Bedrooms:</label>
                                <input
                                    type="text"
                                    :value="d.other?.suiteBedrooms || ''"
                                    @input="handleDataChange('other.suiteBedrooms', $event.target.value)"
                                    placeholder="Bedrooms"
                                    class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                />
                            </div>
                            <div>
                                <label class="block mb-2 text-gray-800">Is self-contained suite tenanted?</label>
                                <div class="relative">
                                    <select
                                        :value="d.other?.suiteTenanted || ''"
                                        @change="handleDataChange('other.suiteTenanted', $event.target.value)"
                                        class="w-full p-2 pr-12 sm:pr-14 md:pr-16 lg:pr-20 xl:pr-24 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 bg-white appearance-none cursor-pointer hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Self-Contained Suite Tenant Section -->
                            <div v-if="d.other?.suiteTenanted === 'Yes'" class="mt-6 space-y-4">
                                <div class="border border-gray-100 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div
                                        class="flex items-center justify-between p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
                                        @click="isSuiteTenantOpen = !isSuiteTenantOpen"
                                    >
                                        <div class="flex items-center gap-3 r-p-3">
                                            <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                            </svg>
                                            <h3 class="text-lg font-semibold text-black">Self-Contained Suite Tenant</h3>
                                        </div>
                                        <button
                                            type="button"
                                            class="flex items-center gap-2 text-black hover:text-gray-700 font-medium text-sm r-mr-3"
                                            @click.stop="isSuiteTenantOpen = !isSuiteTenantOpen"
                                        >
                                            <svg
                                                :class="`w-5 h-5 transform transition-transform duration-200 text-gray-400 ${isSuiteTenantOpen ? 'rotate-180' : ''}`"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div v-if="isSuiteTenantOpen" class="p-2 lg:p-5 space-y-5 sm:space-y-3">
                                        <div v-for="(tenant, index) in suiteTenants" :key="index" class="space-y-4" :class="{ 'pt-5 mt-5 border-t border-gray-200': index > 0 }">
                                            <div class="flex items-center justify-between mb-2">
                                                <h4 class="text-gray-800 font-medium">Tenant {{ index + 1 }}</h4>
                                                <button
                                                    v-if="suiteTenants.length > 1"
                                                    type="button"
                                                    @click="removeSuiteTenant(index)"
                                                    class="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm px-3 py-1 rounded-lg hover:bg-red-50 transition-colors"
                                                >
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                                <div>
                                                    <label class="block mb-2 text-gray-800">Tenant Name <span class="text-red-500">*</span></label>
                                                    <input
                                                        type="text"
                                                        :value="tenant.name || ''"
                                                        @input="handleSuiteTenantChange(index, 'name', $event.target.value)"
                                                        placeholder="Tenant Name"
                                                        class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="block mb-2 text-gray-800">Tenant Phone <span class="text-red-500">*</span></label>
                                                    <input
                                                        type="tel"
                                                        :value="tenant.phone || ''"
                                                        @input="handleSuiteTenantChange(index, 'phone', $event.target.value)"
                                                        placeholder="(000) 000-0000"
                                                        class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="block mb-2 text-gray-800">Tenant Email Address <span class="text-red-500">*</span></label>
                                                    <input
                                                        type="email"
                                                        :value="tenant.email || ''"
                                                        @input="handleSuiteTenantChange(index, 'email', $event.target.value)"
                                                        placeholder="Tenant Email Address"
                                                        class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            @click="addSuiteTenant"
                                            class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
                                        >
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                            Add Another Tenant Info
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="block mb-2 text-gray-800">Other details you'd like to share about the suite?</label>
                                <textarea
                                    :value="d.other?.suiteOtherDetails || ''"
                                    @input="handleDataChange('other.suiteOtherDetails', $event.target.value)"
                                    rows="4"
                                    class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl resize-y"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Property Details Section -->
                <div class="space-y-3 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm r-mt-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <!-- Fuse Box -->
                        <div>
                            <label class="block mb-2 text-gray-800 font-medium">Fuse Box</label>
                            <p class="text-sm text-red-500 mb-2">Please specify the fuse box location</p>
                            <input
                                type="text"
                                :value="d.other?.fuseBox || ''"
                                @input="handleDataChange('other.fuseBox', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>

                         <!-- Garbage: Location, Disposal & Restrictions -->
                         <div>
                            <label class="block mb-2 text-gray-800 font-medium">Garbage: Location, Disposal & Restrictions</label>
                            <p class="text-sm text-red-500 mb-2">For Houses, please specify days / schedule for pick up</p>
                            <input
                                type="text"
                                :value="d.other?.garbageInfo || ''"
                                @input="handleDataChange('other.garbageInfo', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>

                        <!-- What floor are the amenities on? -->
                        <div>
                            <label class="block mb-2 text-gray-800 font-medium">What floor are the amenities on?</label>
                            <input
                                type="text"
                                :value="d.other?.amenitiesFloor || ''"
                                @input="handleDataChange('other.amenitiesFloor', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>

                       

                        <!-- Which Floor/Stall/Locker is the Bike Storage at? -->
                        <div>
                            <label class="block mb-2 text-gray-800 font-medium">Which Floor/Stall/Locker is the Bike Storage at?</label>
                            <input
                                type="text"
                                :value="d.other?.bikeStorageLocation || ''"
                                @input="handleDataChange('other.bikeStorageLocation', $event.target.value)"
                                class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl"
                            />
                        </div>
                    </div>

                    <!-- Notes about location of building amenities -->
                    <div class="mt-4">
                        <label class="block mb-2 text-gray-800 font-medium">Any information that you could share with your future Tenants about the location of the building amenities?</label>
                        <textarea
                            :value="d.other?.amenitiesNotes || ''"
                            @input="handleDataChange('other.amenitiesNotes', $event.target.value)"
                            rows="5"
                            class="w-full p-2 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-black/10 focus:border-black transition-all duration-300 text-base text-gray-900 placeholder-gray-400 bg-white hover:border-gray-400 hover:shadow-lg shadow-md focus:shadow-xl resize-y"
                        ></textarea>
                    </div>
                </div>
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
                Utilities, Inclusions, Restrictions
            </button>

            <button
                v-if="onNext"
                @click="onNext"
                class="r-p-3 cursor-pointer bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold flex items-center gap-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
                Review
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    onBack: Function,
    onNext: Function,
    formData: {
        type: Object,
        default: () => ({}),
    },
});

const emit = defineEmits(['data-change']);

const isOpen = ref(true);
const isSuiteTenantOpen = ref(true);

const amenitiesOptions = [
    'Gym',
    'Pool',
    'Hot Tub',
    'Sauna',
    'Concierge',
    'Board Rooms',
    'Social Rooms',
    'Guest Rooms',
    'Bike Storage',
    'Visitor Parking',
    'Other',
];

const maintenanceOptions = [
    'Gutter Maintenance',
    'Heating system',
    'Chimney',
    'Garden Maintenance Seasonal',
    'Lawn Maintenance',
];

const d = computed(() => props.formData || {});

// Handle suite tenants array
const suiteTenants = computed(() => {
    const other = d.value.other || {};
    
    // If suiteTenants array already exists, use it
    if (Array.isArray(other.suiteTenants)) {
        return other.suiteTenants.length > 0 ? other.suiteTenants : [{ name: '', phone: '', email: '' }];
    }
    
    // If old format exists (single tenant fields), convert to array
    if (other.suiteTenantName || other.suiteTenantPhone || other.suiteTenantEmail) {
        return [{
            name: other.suiteTenantName || '',
            phone: other.suiteTenantPhone || '',
            email: other.suiteTenantEmail || ''
        }];
    }
    
    // Default: return array with one empty tenant
    return [{ name: '', phone: '', email: '' }];
});

const handleDataChange = (path, value) => {
    emit('data-change', path, value);
};

const handleSuiteTenantChange = (index, field, value) => {
    const currentTenants = [...suiteTenants.value];
    currentTenants[index] = {
        ...currentTenants[index],
        [field]: value
    };
    emit('data-change', 'other.suiteTenants', currentTenants);
};

const addSuiteTenant = () => {
    const currentTenants = [...suiteTenants.value];
    currentTenants.push({ name: '', phone: '', email: '' });
    emit('data-change', 'other.suiteTenants', currentTenants);
};

const removeSuiteTenant = (index) => {
    const currentTenants = [...suiteTenants.value];
    currentTenants.splice(index, 1);
    emit('data-change', 'other.suiteTenants', currentTenants);
};

const handleAmenityChange = (label, checked) => {
    const prev = d.value.other?.amenities || [];
    const next = checked ? [...prev, label] : prev.filter(x => x !== label);
    handleDataChange('other.amenities', next);
};

const handleMaintenanceChange = (label, checked) => {
    const prev = d.value.other?.maintenance || [];
    const next = checked ? [...prev, label] : prev.filter(x => x !== label);
    handleDataChange('other.maintenance', next);
};

const handleMaintenanceFrequencyChange = (label, value) => {
    const frequencies = { ...(d.value.other?.maintenanceFrequencies || {}) };
    frequencies[label] = value;
    handleDataChange('other.maintenanceFrequencies', frequencies);
};

const formatMoveInFees = (value) => {
    if (!value) return '';
    // Return the raw value for easier editing
    return value.toString();
};

const handleMoveInFeesChange = (value) => {
    // Remove all non-numeric characters except decimal point
    let cleaned = value.replace(/[^0-9.]/g, '');
    // Remove extra decimal points
    const parts = cleaned.split('.');
    if (parts.length > 2) {
        cleaned = parts[0] + '.' + parts.slice(1).join('');
    }
    // Limit to 2 decimal places
    if (parts.length === 2 && parts[1].length > 2) {
        cleaned = parts[0] + '.' + parts[1].substring(0, 2);
    }
    handleDataChange('other.moveInFees', cleaned);
};
</script>

