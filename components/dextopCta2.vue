<template>
    <section class="CTA2 hidden lg:flex flex-col items-start justify-start h-[40rem] md:h-136 lg:h-155 px-4 md:px-12 lg:px-20 relative">
    <div class="CTA flex flex-col items-start justify-start h-full w-full mt-12 lg:mt-28 space-y-4">
        <h2 class="CTA-TITLE text-5xl lg:text-6xl text-black font-bold md:max-w-sm lg:max-w-md">Free forever for your <span class="text-eazipeach">salary payment</span></h2>

        <div class="flex flex-col items-start justify-center h-full">
            <h5 class="CTA-SUBTITLE text-md text-black w-96 mt-4">Subscribe to the Eazilife today</h5>

            <div class="flex flex-row items-start h-full justify-between mt-2 space-x-2 md:space-x-4">

                <NuxtLink to="https://nuxtjs.org" class="DOWNLOAD-APPSTORE flex flex-row items-center justify-start space-x-2 h-16 shadow-2xl w-36 md:w-40 rounded-lg bg-white pl-2 md:pl-4 py-4">
                    
                    <div class="bg-slate-200 h-10 w-10 flex flex-row items-center justify-center rounded-full">
                        <img src="/apple.svg" class="scale-125" alt="Avatar" />
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <small class="text-eaziblack text-xs" style="font-size: 10px;">Download on the</small>
                        <h5 class="CTA-SUBTITLE text-sm text-eaziblack font-bold ">Appstore</h5>
                    </div>
                </NuxtLink>

                <NuxtLink to="https://nuxtjs.org" class="DOWNLOAD-APPSTORE flex flex-row items-center justify-start space-x-2 h-16 shadow-2xl w-30 md:w-40 rounded-lg bg-white px-2 py-4">
                    <div class="bg-slate-200 h-10 w-10 flex flex-row items-center justify-center rounded-full">
                        <img src="/playstore.svg" class="" alt="Avatar" />
                    </div>
                    <div class="flex flex-col items-start justify-center">
                        <small class="text-eaziblack text-xs" style="font-size: 10px;">Get on</small>
                        <h5 class="CTA-SUBTITLE text-sm text-eaziblack font-bold ">Google Play</h5>
                    </div>
                </NuxtLink>

            </div>
            

        </div>
    </div>
</section>
</template>
<style scoped>
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
.CTA2{
    background-image: url('/CTABG.svg');
    background-size: contain;
    background-position: center-center;
    background-repeat: no-repeat;
}
.HAMBURGER{
    overflow: hidden;
}
</style>