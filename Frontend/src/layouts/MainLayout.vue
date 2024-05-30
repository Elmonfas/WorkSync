<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>


        <q-toolbar-title>
          <img class="w-[5%]" src="../assets/WSYNC_png.png" alt="">
        </q-toolbar-title>
        <q-btn color="dark" class="m-3" to="/">Home</q-btn>
        <q-btn color="amber" class="m-3" @click="user_store.access" to="login" v-if="!user_store.token">Login</q-btn>
        <q-btn color="purple" class="m-3" to="about">About</q-btn>
        <q-btn color="green" class="m-3" to="dashboard" v-if="user_store.token">Dashboard</q-btn>
        <q-btn color="red" @click="user_store.logout" to="/" v-if="user_store.token" class="m-3">Logout</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useUserStore } from 'src/stores/user_store';

const user_store = useUserStore()

</script>
