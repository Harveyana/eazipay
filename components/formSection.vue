<template>
    <section class="FORM-SECTION bg-white flex flex-col items-center justify-start h-[50rem] py-8 lg:py-24 relative z-10">

<div class="container flex flex-col lg:flex-row items-center justify-center w-[100%] md:w-[80%] md:mt-12 lg:mt-8  space-y-8 lg:space-y-0">

    <div class="CTA bg-white flex flex-col items-center lg:items-center justify-center h-full w-[80%]  md:w-[50%]">
        <h2 class="CTA-TITLE text-4xl lg:text-6xl text-eazigreen font-bold text-center md:w-[30rem] lg:max-w-md">Get an Exclusive Demo of Eazipay</h2>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-lg text-eaziblack md:w-64 text-center lg:w-96 ">Our greatest priority is to put you and your business first. Let’s show you how we can help.</h5>
    </div>

    <div class="FORM bg-white shadow-2xl shadow-black flex flex-col items-center justify-center rounded-3xl w-[90%] md:w-[70%] lg:w-[50%] md:py-8 md:px-8">
        <h2 class="Form-title text-xl lg:text-xl text-black text-center font-bold md:max-w-sm lg:max-w-md mb-4">Get an Exclusive Demo of Eazipay</h2>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-lg text-center text-eaziblack w-[80%] md:w-64 lg:w-96 ">We want to serve you better. Tell us a bit about yourself or company</h5>

        <div class="max-w-md mx-auto p-4 w-full">
            <div class="flex felx-row items-center justify-center space-x-2 border rounded-3xl px-2 py-2" style="border: 1px solid gray;">
                <button class=" w-[50%] px-6 py-2 text-sm text-white rounded-3xl bg-eazigreen"
                :class="{ 'bg-tab': activeTab === 'Individual'}"
                    @click="activeTab = 'Individual'"
                >Individual</button>

                <button class=" w-[50%] px-6 py-2 text-sm text-white rounded-3xl bg-eazigreen"
                :class="{ 'bg-tab': activeTab === 'company'}"
                    @click="activeTab = 'company'"
                >Company</button>
            </div>

            <form class="mt-4" @submit.prevent="">
            <div class="space-y-4" v-if="activeTab === 'Individual'">
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="First name"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="last name"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Email"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Job Title"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Company Size"/>
            </div>
            <div class="space-y-4" v-else-if="activeTab === 'company'">
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Business name"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="number" placeholder=" Business Number"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder=" Business Email"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Current Title"/>
                <input class="w-full bg-gray-300 text-black h-[40px] border px-4 rounded-2xl" type="string" placeholder="Business Size"/>
            </div>

            <button class="bg-eazigreen text-white py-2 px-4 rounded-3xl mt-4 w-full" type="submit">
                Request Demo
            </button>
            </form>
        </div>
        
    </div>

</div>


</section>
</template>

<script setup lang="ts">

const activeTab = ref<string>('Individual')

// const submitForm = () =>{
//       // Handle form submission logic here
// }
</script>

<style scoped>
.CTA-TITLE {
    font-family: 'mellow', Fallback, sans-serif;
    /* font-size: 60px; */
    /* line-height: 4rem; */
}
.CTA-SUBTITLE,.LINK-TEXT, button, .CTA-SUBTITLE, small, .Form-title{
    font-family: 'aeonik', Fallback, sans-serif;
}
.HERO-SECTION{
    background-image: url('/herobackground.svg');
    background-size: cover;
    background-position: center-center;
    background-repeat: no-repeat;
    overflow: hidden;
}
.FORM-SECTION{
    background-image: url('/formBackground.svg');
    background-size: cover;
    background-position: center-center;
    background-repeat: no-repeat;
}
input{
    border: 0.5px solid rgb(186, 181, 181);
}
.bg-tab{
    background-color: rgb(227, 224, 224);
    color:black;
}
</style>