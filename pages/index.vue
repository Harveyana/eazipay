<template>
<section class="HERO-SECTION bg-white w-screen flex flex-col items-start justify-start h-[40rem] md:h-136 lg:h-155 px-4 md:px-12 lg:px-20 -z-10" style="border: 1px solid black;">

    <header class="NAVBAR flex flex-row flex-nowrap items-center justify-between lg:justify-around w-full h-24">
        <img src="/logo.svg" alt="Site logo" class="w-1/7 block "/>
        <div class="nav-links lg:w-1/3">
            <ul class="hidden lg:flex flex-row justify-between items-center space-x-2">
                <NuxtLink :to="navlink.link" target="_blank" v-for="navlink in navlinks" :key="navlink.label"><span class=" LINK-TEXT text-eaziblack text-sm">{{navlink.label}}</span></NuxtLink>
            </ul>
            <Icon class="lg:hidden rounded-full bg-eazigreen hover:bg-white" width="36" height="36" icon="ci:hamburger-md" @click="isOpen = true"/>
        </div>
        <div class="cta-btns hidden lg:flex w-1/3 px-2 flex-row items-center justify-around ml-20 space-x-2">
            <button class="px-12 py-2 text-xs text-eazigreen rounded-full border border-eazigreen hover:text-white hover:bg-eazigreen hover:border-transparent focus:outline-none focus:ring-2 focus:ring-eazigreen focus:ring-offset-2">Login</button>
            <button class="px-12 py-2 text-xs text-white rounded-full bg-eazigreen border border-eazigreen hover:text-eazigreen hover:bg-white hover:border-eazigreen focus:outline-none focus:ring-2 focus:ring-eazigreen focus:ring-offset-2">Register</button>
        </div>
    </header>

    <div class="CTA flex flex-col items-start justify-start h-full w-full mt-12 lg:mt-28 space-y-4">
        <h2 class="CTA-TITLE text-5xl lg:text-6xl text-black font-bold md:max-w-sm lg:max-w-md">Run your <span class="text-eazigreen">payroll</span> <span class="text-eazigold">easily</span> in <span class="text-eazipeach">seconds</span></h2>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-md text-eaziblack md:w-64 lg:w-96 ">We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</h5>

        <button class=" shadow-2xl shadow-black px-8 lg:px-12 py-4 lg:py-4 text-sm text-white rounded-full bg-eazigreen border border-eazigreen hover:text-eazigreen hover:bg-white hover:border-eazigreen focus:outline-none focus:ring-2 focus:ring-eazigreen focus:ring-offset-2">Start Using Free, Forever</button>
        <div class="flex flex-col items-start justify-center h-full">
            <h5 class="CTA-SUBTITLE text-md text-black w-96 mt-4">Download the Eazipay App</h5>

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
    <transition name="slide">
        <hamburger :isOpen="isOpen" @closeModal="isOpen = false"/>
    </transition>
    
</section>
 <!-- Second -->
 <!-- class="CTA-SECTION bg-white flex flex-col items-start justify-start md:px-12 lg:px-20 h-136 relative" -->
<section class="CTA-SECTION flex flex-row items-center justify-center h-[42rem] bottom-12 md:bottom-16 py-16 lg:py-32 relative z-10">
    <div>
      <div class="bg-image absolute left-0 top-0 bottom-0 right-0">
        <img src="/eazi-wave-green-mobile.f8c07e52.png" class="lg:hidden w-full h-full"/>
        <img src="/eazi-wave-green-desktop.591e7153.png" class="hidden lg:block w-full h-full"/>
      </div>
      <div class="bg-pattern absolute left-0 top-0 bottom-0 right-0 py-10">
        <img src="/audience-patterns.5d18a20d.png" class="w-full h-full object-cover"/>
      </div>
    </div>

    <SlidesDesktop class="hidden md:flex"/>
    <SlidesMobile class="md:hidden"/>

</section>
<!--  -->
<Tutorial style="border: 1px solid black;"/>
<!--  -->
<MobileCta style="border: 1px solid black;"/>
<!--  -->
<DextopCta2 style="border: 1px solid black;"/>
<!--  -->
<FormSection style="border: 1px solid black;"/>
<!--  -->
<footer class="relative " style="border:1px solid gray;">
    <div class="Footer flex flex-col items-start justify-start md:items-center md:justify-center md:flex-row space-y-4 md:space-x-12 lg:space-x-24 px-4 md:px-10 lg:px-28 py-8">
        <div class="Group1 flex flex-col  space-y-4 md:space-y-8">
            <img src="/logo.svg" alt="Site logo" class=" w-36 md:w-1/7 block "/>
            <h5 class="CTA-SUBTITLE text-xs text-black ">
                Copyright © 2023 Eazipay.<br> All rights reserved
            </h5>
            <div class="socials flex flex-row space-x-2">
                <img src="/instagram.svg" class="" alt="instagram" />
                <img src="/Twitter.svg" class="" alt="instagram" />
                <img src="/linkedin.svg" class="" alt="instagram" />
                <img src="/facebook.svg" class="" alt="instagram" />
            </div>

        </div>

        <div class="Group2 flex flex-col space-y-4">
            <h5 class="CTA-SUBTITLE text-lg text-eaziblack font-black ">Product</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Individual</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Businesses</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack">Request Demo</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Pricing</h5>
        
        </div>

        <div class="Group2 flex flex-col space-y-4">
            <h5 class="CTA-SUBTITLE text-lg text-eaziblack font-black ">Legal</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Privacy Policy</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Terms of service</h5>
        </div>

        <div class="Group2 flex flex-col space-y-4">
            <h5 class="CTA-SUBTITLE text-lg text-eaziblack font-black ">Resources</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Faqs</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Blogs</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack">Career</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">Customer Stories</h5>
        
        </div>

        <div class="Group2 flex flex-col space-y-4">
            <h5 class="CTA-SUBTITLE text-lg text-eaziblack font-black ">Contact Us</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">eazipay@gmail.com</h5>
            <h5 class="CTA-SUBTITLE text-xs lg:text-sm text-eaziblack ">+234 815 878 897</h5>
            <div class="flex items-center space-x-2">
                <input
                    type="text"
                    class="px-3 py-2 border- rounded-lg  w-34 md:w-20 lg:w-36 bg-white text-eaziblack text-sm"
                    placeholder="enter your email"
                />
                <Icon class="" color="black" width="24" height="24" icon="cil:send" />
            </div>
        
        </div>

    </div>
</footer>



</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';

const isOpen = ref<boolean>(false)


 const navlinks:{link:string,label:string}[]=[
    {
        label:'Individual',
        link:'https://twitter.com/nuxt_js'
    },
    {
        label:'Business',
        link:'https://twitter.com/nuxt_js'
    },
    {
        label:'Pricing',
        link:'https://twitter.com/nuxt_js'
    },
    {
        label:'Set your payroll',
        link:'https://twitter.com/nuxt_js'
    }
 ]

</script>
<style scoped>
/* @font-face {
    font-family: 'mellow';
    src: url('/assets/made_mellow/MADEMellowPERSONALUSE-Regular.otf')  format('opentype')
} */

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-leave-to {
  transform: translateX(100%); /* Start offscreen to the right */
}
.slide-enter-from{
    transform: translateX(100%);
}

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
    border: 0.5px solid rgb(175, 170, 170);
}
.bg-tab{
    background-color: rgb(227, 224, 224);
    color:black;
}
</style>