<template>
  <q-layout view="lHh Lpr lFf">
    <header class="flex h-[7vh] items-center justify-around bg-[#001220] w-full">
      <a href="/"><img class="w-[7%]  cursor-pointer" src="../assets/WSYNC_png.png" alt=""></a> 
      <a  class=" enlace text-white  hover:text-[#5BC8AC]" href="/">Home</a>
      <a class=" enlace text-white  hover:text-[#5BC8AC]" href="/about">About</a>
      <a class=" enlace text-white  hover:text-[#5BC8AC]" href="/register" v-if="!user_store.token" >Register</a>
      <a class=" enlace text-underline text-white  hover:text-[#5BC8AC]" href="/login" v-if="!user_store.token" >Login</a>
      <a class=" enlace text-underline text-white  hover:text-[#5BC8AC]" href="/dashboard" v-if="user_store.token" >Dashboard</a>
      <a class=" enlace text-underline text-white  hover:text-[#5BC8AC]" href="/" v-if="user_store.token" @click="user_store.logout" >Logout</a>
    </header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useUserStore } from 'src/stores/user_store';

const user_store = useUserStore()

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        z-index: 999;
    }

    h1 {
        font-family: "Luckiest Guy", cursive;


    }

    .enlace::after {
        content: "";
        display: block;
        height: 2px;
        background-color: #5BC8AC;
        transform: scale(0, 1);
        transform-origin: center;
        transition: transform .25s;

    }

    .enlace:hover::after {
        transform: scale(1, 1);
    }
    .enlace{
        transition: all 300ms ease-in-out;
        
    }

</style>