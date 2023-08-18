<template>
    <div class="AUDIENCE flex flex-col items-center justify-start h-full px-2 py-4 space-y-8 lg:space-y-4 absolute top-10 lg:top-32">
        <h2 class="CTA-TITLE text-5xl lg:text-6xl text-eazigreen font-bold text-center">For Individuals and Businesses</h2>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-lg text-eaziblack text-center">Join 200+ businesses using Eazipay's easy solution.</h5>
        <div class="CARDS w-full flex flex-col md:flex-row md:nowrap justify-center items-center relative h-[15rem]">

            <div class="CARD1 SHADOWCAST shadow-2xl shadow-black z-2 absolute left-0 flex flex-col justify-center items-start py-8 px-8 space-y-4 bg-eazigreen rounded-2xl w-[15rem] lg:w-[22rem]">
                <h5 class="CTA-SUBTITLE  font-bold text-lg text-white ">Tamper-proof Payroll for LIfe</h5>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Your staff payroll history is kept in one place forever.</h6>
                <h6 class="CTA-SUBTITLE text-xs text-white ">No more excel sheet or manual records.</h6>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Download your payroll history anytime you need it.</h6>
            </div>

            <div class="CARD2 SHADOWCAST shadow-2xl shadow-black z-4 top-28 absolute flex flex-col justify-center items-start py-8 px-8 space-y-4 bg-eazigreen rounded-2xl w-[15rem] lg:w-[22rem]">
                <h5 class="CTA-SUBTITLE  font-bold text-lg text-white ">All Payroll, Anytime Anywhere</h5>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</h6>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Wherever you are Eazipay has got you covered on ALL your Payroll tasks..</h6>
                <!-- <h6 class="CTA-SUBTITLE text-xs text-white ">Download your payroll history anytime you need it.</h6> -->
            </div>

            <div class="CARD3 SHADOWCAST shadow-2xl shadow-black z-6 absolute top-48 right-0 flex flex-col justify-center items-start py-8 px-8 space-y-4 bg-eazigreen rounded-2xl w-[15rem] lg:w-[22rem] shadow-2xl shadow-black">
                <h5 class="CTA-SUBTITLE  font-bold text-lg text-white ">Payroll in Seconds</h5>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Never again wil you spend more than 2 minutes on payroll.</h6>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Just click on your staff annd bulk-pay them at once..</h6>
                <h6 class="CTA-SUBTITLE text-xs text-white ">Payment is done permanently.</h6>
            </div>

        </div>
        <h5 class="CTA-SUBTITLE md:text-sm lg:text-lg text-eaziblack text-center w-64 md:w-1/2">We are happy to answer your queries. Please, reach us at <span class="text-eazipeach">hello@myeazipay.com</span> and expect our response shortly after.</h5>

    </div>
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
/* .CTA-SECTION{
    background-color: #F0F7EB;
} */
.HAMBURGER{
    overflow: hidden;
}

.SHADOWCAST {
  /* box-shadow: 10px 10px 10px rgba(16, 15, 15, 0.2); */
  transition: transform 0.3s;
}

.SHADOWCAST:hover ~ .SHADOWCAST {
  transform: translateY(110px);
}

</style>