<template>
 <q-page padding>
  <h1>Welcome to WorkSync</h1>
 </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user_store';

const use_store = useUserStore() 



</script>
