<template>
    <div class="HAMBURGER flex flex-col items-end justify-start w-full h-128 bg-white lg:hidden absolute left-0  space-y-6 py-4 px-4 rounded-md" v-if="props.isOpen">

        <Icon class="lg:hidden rounded-full bg-eazigreen hover:bg-white" width="36" height="36" icon="jam:close" @click="$emit('closeModal')"/>

        <div class="nav-links w-full flex flex-col items-center justify-center">
            <ul class=" lg:hidden flex flex-col justify-center items-center space-y-4">
                <NuxtLink :to="navlink.link" target="_blank" v-for="navlink in navlinks" :key="navlink.label"><span class=" LINK-TEXT text-eaziblack text-xl">{{navlink.label}}</span></NuxtLink>
            </ul>
        </div>

        <div class="cta-btns flex w-full px-2 flex-col items-center justify-center space-y-6">
            <button class="px-12 py-2 text-xs text-eazigreen rounded-full border border-eazigreen hover:text-white hover:bg-eazigreen hover:border-transparent focus:outline-none focus:ring-2 focus:ring-eazigreen focus:ring-offset-2">Login</button>
            <button class="px-12 py-2 text-xs text-white rounded-full bg-eazigreen border border-eazigreen hover:text-eazigreen hover:bg-white hover:border-eazigreen focus:outline-none focus:ring-2 focus:ring-eazigreen focus:ring-offset-2">Register</button>
        </div>

    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
const props = defineProps<{
    isOpen:boolean
}>()

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