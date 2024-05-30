<template>
    <q-page>
        <h3>welcome to dashboard</h3>
        <q-btn @click="create_shift">Add shift</q-btn>
    </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { useUserStore } from 'src/stores/user_store';

const user_store = useUserStore() 

const create_shift = async () => {

try {

  const res = await api({
    method : 'POST',
    url : '/shifts',
    headers : {
      Authorization : 'Bearer ' + user_store.token
    },
    data:{
      day : "2024-06-01",
      start_time : "19:00:00",
      end_time : "03:30:00"
    }
  })

  console.log(res.data)
  
} catch (e) {

  console.log(e)
  
}

}

</script>