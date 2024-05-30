<template>
 <q-page padding>
  <q-btn @click="access">Login</q-btn>
  <q-btn @click="create_shift">Add shift</q-btn>
  <p>{{ token }}</p>
 </q-page>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { ref } from 'vue';

const token = ref(null)

const access = async () => {

  try {

    const res = await api.post('/login', {
      
      email : "jose@gmail.com",
      
      password : "jose123"
    
    })

    console.log(res.data)

    token.value = res.data.token
    
  } catch (e) {

    console.log(e)
    
  }

}

const create_shift = async () => {

  try {

    const res = await api({
      method : 'POST',
      url : '/shifts',
      headers : {
        Authorization : 'Bearer ' + token.value
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

const refresh_token = () => {
  setTimeout(() => {

    console.log('se refresco')

    key_token()

  }, 600 * 1000 - 6000)
}

const key_token = async () => {

  try {

    const res = await api.get('/lock')

    token.value = res.data.token

    refresh_token()
    
  } catch (e) {

    console.log(e)
    
  }
}

key_token()

</script>
