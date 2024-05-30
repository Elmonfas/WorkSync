<template>
    <q-page>
        <h1>Login {{ user_store.token }}</h1>
    </q-page>
</template>

<script setup>
import { useUserStore } from 'src/stores/user_store';

const user_store = useUserStore()

</script>
