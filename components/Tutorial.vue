<template>
    <section class="TUTORIAL bg-white h-[90rem] md:h-[70rem] lg:h-[75rem] py-56 md:py-48 bottom-36 relative z-2">
    <div class="Container flex flex-col items-center justify-center h-full lg:w-full justify-start space-y-4">
        <h2 class="CTA-TITLE text-5xl lg:text-6xl text-eazigreen font-bold text-center">How Eazipay Works</h2>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-lg text-eaziblack text-center">Get started in 3 simple steps.</h5>

        <div class="SLIDESHOW flex flex-col lg:flex-row items-center justify-center h-full w-full lg:space-x-12" >

            <div class=" MOBILE-ONLY lg:hidden flex flex-col md:flex-row justify-center items-center w-full md:w-[90%] space-y-8 md:space-x-8 my-12">
                <div class="STEP1 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 1">1</button>
                    <h5 class="CTA-SUBTITLE text-lg font-black text-eaziblack ">Create your free account</h5>
                    <h6 class="CTA-SUBTITLE text-xs text-eaziblack ">Click here to set up your Eazipay account.</h6>
                </div>

                <div class="STEP2 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 2">2</button>
                    <h5 class="CTA-SUBTITLE text-lg font-black text-eaziblack ">Add Employee Data</h5>
                    <h6 class="CTA-SUBTITLE text-xs text-eaziblack ">Your employee information is 100% safe and secure.</h6>
                </div>

                <div class="STEP3 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 3">3</button>
                    <h5 class="CTA-SUBTITLE text-lg font-black text-eaziblack ">Prepare your Transaction</h5>
                    <h6 class="CTA-SUBTITLE text-xs text-eaziblack ">Run payroll: Bulk Salaries and Compliance are done at once!</h6>
                </div>

            </div>


            <div class="MOBILE-SCREEN h-[30rem] md:h-[80%] flex flex-col items-center justify-center md:flex w-full md:w-1/2 lg:w-2/5">
                <img src="/onboardEazipay.gif" class="h-full bg-white" style="border: 15px solid rgba(245, 245, 245, 0);border-radius: 50px;" v-if="mobview == 1"/>
                <img src="/addEmployee.gif" class="h-full bg-white" style="border: 15px solid rgba(245, 245, 245, 0);border-radius: 50px;" v-else-if="mobview == 2"/>
                <img src="/payroll.gif" class="h-full bg-white" style="border: 15px solid rgba(245, 245, 245, 0);border-radius: 50px;" v-else="mobview == 3"/>
            </div>
 
            <div class="MOBILE-TIMELINE hidden lg:block h-[80%] md:w-2/5 space-y-12 pl-28 mb-16 relative">
                <svg class="absolute left-16 top-20" xmlns="http://www.w3.org/2000/svg" width="50" height="190" viewBox="0 0 50 222" fill="none">
                    <path ref="animatedPath" d="M27.9477 211C27.9477 216.891 32.7233 221.667 38.6144 221.667C44.5054 221.667 49.281 216.891 49.281 211C49.281 205.109 44.5054 200.333 38.6144 200.333C32.7233 200.333 27.9477 205.109 27.9477 211ZM38.6144 0H26.6144V4H38.6144V0ZM0.61438 26V187H4.61438V26H0.61438ZM26.6144 213H38.6144V209H26.6144V213ZM0.61438 187C0.61438 201.359 12.255 213 26.6144 213V209C14.4641 209 4.61438 199.15 4.61438 187H0.61438ZM26.6144 0C12.255 0 0.61438 11.6406 0.61438 26H4.61438C4.61438 13.8497 14.4641 4 26.6144 4V0Z" fill="#D9EBCD">
                        <animate
                            attributeName="stroke-dashoffset"
                            from="200"
                            to="0"
                            dur="2s"
                            begin="triggerAnimation"
                            fill="freeze"
                        />

                    </path>
                    <mask id="mask0_4797_462" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="222">
                        <path d="M27.9477 211C27.9477 216.891 32.7233 221.667 38.6144 221.667C44.5054 221.667 49.281 216.891 49.281 211C49.281 205.109 44.5054 200.333 38.6144 200.333C32.7233 200.333 27.9477 205.109 27.9477 211ZM38.6144 0H26.6144V4H38.6144V0ZM0.61438 26V187H4.61438V26H0.61438ZM26.6144 213H38.6144V209H26.6144V213ZM0.61438 187C0.61438 201.359 12.255 213 26.6144 213V209C14.4641 209 4.61438 199.15 4.61438 187H0.61438ZM26.6144 0C12.255 0 0.61438 11.6406 0.61438 26H4.61438C4.61438 13.8497 14.4641 4 26.6144 4V0Z" fill="#D9EBCD"/>
                    </mask>
                    <g mask="url(#mask0_4797_462)">
                        <rect x="47.6144" y="-6" width="5" height="13" fill="#11453B"/>
                    </g>

                </svg>
                <div class="STEP1 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 1">1</button>
                    <h5 class="CTA-SUBTITLE text-xl font-black text-eaziblack ">Create your free account</h5>
                    <h6 class="CTA-SUBTITLE text-sm text-eaziblack ">Click here to set up your Eazipay account.</h6>
                </div>

                <div class="STEP2 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 2">2</button>
                    <h5 class="CTA-SUBTITLE text-xl font-black text-eaziblack ">Add Employee Data</h5>
                    <h6 class="CTA-SUBTITLE text-sm text-eaziblack ">Your employee information is 100% safe and secure.</h6>
                </div>

                <div class="STEP3 flex flex-col items-start justifty-center w-[70%] space-y-4">
                    <button class="px-6 py-2 text-4xl font-bold text-eazigreen rounded-2xl bg-slate-200 border-eazigreen hover:text-white hover:bg-eazigreen shadow-2xl" @click="mobview = 3">3</button>
                    <h5 class="CTA-SUBTITLE text-xl font-black text-eaziblack ">Prepare your Transaction</h5>
                    <h6 class="CTA-SUBTITLE text-sm text-eaziblack ">Run payroll: Bulk Salaries and Compliance are done at once!</h6>
                </div>
                <svg class="absolute right-16 bottom-48" width="278" height="202" viewBox="0 0 302 245" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.281 234C22.281 239.891 17.5054 244.667 11.6144 244.667C5.72336 244.667 0.947723 239.891 0.947723 234C0.947723 228.109 5.72336 223.333 11.6144 223.333C17.5054 223.333 22.281 228.109 22.281 234ZM11.6144 0H275.614V4H11.6144V0ZM301.614 26V210H297.614V26H301.614ZM275.614 236H11.6144V232H275.614V236ZM301.614 210C301.614 224.359 289.974 236 275.614 236V232C287.765 232 297.614 222.15 297.614 210H301.614ZM275.614 0C289.974 0 301.614 11.6406 301.614 26H297.614C297.614 13.8497 287.765 4 275.614 4V0Z" fill="#D9EBCD"/>
                    <mask id="mask0_4797_493" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="302" height="245">
                    <path d="M22.281 234C22.281 239.891 17.5054 244.667 11.6144 244.667C5.72336 244.667 0.947723 239.891 0.947723 234C0.947723 228.109 5.72336 223.333 11.6144 223.333C17.5054 223.333 22.281 228.109 22.281 234ZM11.6144 0H275.614V4H11.6144V0ZM301.614 26V210H297.614V26H301.614ZM275.614 236H11.6144V232H275.614V236ZM301.614 210C301.614 224.359 289.974 236 275.614 236V232C287.765 232 297.614 222.15 297.614 210H301.614ZM275.614 0C289.974 0 301.614 11.6406 301.614 26H297.614C297.614 13.8497 287.765 4 275.614 4V0Z" fill="#D9EBCD"/>
                    </mask>
                    <g mask="url(#mask0_4797_493)">
                    </g>
                </svg>

            </div>

            

        </div>

    </div>
    </section>
</template>
<script setup lang="ts">
 const mobview = ref<number>(1)

 const animatedPath = ref(null)

//  const startAnimation = ()=>{
//     animatedPath.value.beginElement(); // Trigger the animation
//  }

</script>
<style scoped>
 .MOBILE-SCREEN{
    background-image: url('/BG.svg');
    background-size: contain;
    background-position: center-center;
    background-repeat: no-repeat;
}
.CTA-TITLE {
    font-family: 'mellow', Fallback, sans-serif;
    /* font-size: 60px; */
    /* line-height: 4rem; */
}
.CTA-SUBTITLE,.LINK-TEXT, button, .CTA-SUBTITLE, small{
    font-family: 'aeonik', Fallback, sans-serif;
}
.HERO-SECTION{
    background-image: url('/herobackground.svg');
    background-size: cover;
    background-position: center-center;
    background-repeat: no-repeat;
    overflow: hidden;
}
/* .MOBILE-SCREEN{
    background-image: url('/BG.svg');
    background-size: contain;
    background-position: center-center;
    background-repeat: no-repeat;
} */
.TUTORIAL{
    overflow-x:hidden
}
</style>