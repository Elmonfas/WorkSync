<template>
  <q-page>
      <div class="w-full min-h-screen bg-[#001220] flex justify-center items-center">
      
      <div class="absolute w-60 h-60 rounded-xl bg-[#1F3A93] top-14 -left-24 z-0 transform rotate-45  md:block"></div>
      <div class="absolute w-48 h-48 rounded-xl bg-[#1F3A93] -bottom-6 -right-10 transform rotate-12  md:block"></div>

  <div class="w-1/3 py-0 px-5 bg-white rounded-2xl shadow-xl z-20 border-[4px] border-[#1F3A93] mb-[3em] ">
      

      <div class="flex flex-col items-center justify-center">
      <a class="flex items-center justify-center p-0 m-0 w-1/3" href="/"><img class="w-[80%]" src="../assets/WSYNC_png.png" alt=""></a>
      <h1 class="text-2xl font-bold text-center mb-4 cursor-pointer">Welcome to WorkSync 👋 !</h1>
      <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create a new account to enjoy all the services !</p>
    </div>
          <q-form 
          @submit.prevent="handle_submit"
          >

          <q-input
            v-model="name"
            type="text"
            label="Insert Name"
            :rules="[
              (val) => (val && val.length > 0) || 'Type your name'
            ]"
          ></q-input>

          <q-input
            v-model="surname"
            type="text"
            label="Insert Surname"
            :rules="[
              (val) => (val && val.length > 0) || 'Type ur surname'
            ]"
          ></q-input>

          <q-input
            v-model="email"
            type="text"
            label="Insert Email"
            :rules="[
              (val) => (val && val.length > 0) || 'Type your email',
              (val) =>
                /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) ||
                'Invalid email format',
            ]"
          ></q-input>

          <q-input
            v-model="password"
            type="password"
            label="Insert password"
            :rules="[
              (val) =>
                (val && val.length > 5) || 'more than 6 characters',
            ]"
          ></q-input>





      <div>
          <q-btn :loading=loading id="btn" type="submit" class="w-full py-2 text-xl text-white bg-[#1F3A93] rounded-lg hover:bg-[#1F3A93] mt-3 transition-all">CREATE ACCOUNT</q-btn>
      </div>

      <p class="text-center mt-[1em]">Already have an account ? <a class="text-blue-500 underline pounter" href="/login">Login</a></p>

          </q-form>
      </div>
      </div>
      
      <div class="w-20 h-40 absolute bg-[#5BC8AC] rounded-full bottom-20 left-10 transform rotate-45 md:block"></div>
      <div class="w-40 h-40 absolute bg-[#5BC8AC] rounded-full top-0 -right-12 md:block"></div>
  
  </q-page>
</template>

<script setup>
import { ref } from "vue"
import { useUserStore } from "../stores/user_store"
import { useRouter } from "vue-router"
import 'vue3-toastify/dist/index.css'
import {toast} from 'vue3-toastify'

const router = useRouter()
const userStore = useUserStore()

const name = ref("")
const surname = ref("")
const email = ref("")
const password = ref("")
const re_password = ref("")
const loading = ref(false)

const handle_submit = async () => {

try {
  
  loading.value = true

  const res = await userStore.register(name.value, surname.value, email.value, password.value)

  await userStore.access(name.value, surname.value, email.value, password.value)

  setTimeout(() => {

    if(userStore.token){

      toast(res+ " 👋 !", {
          "theme": "colored",
          "type": "success",
          "position": "top-right",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
      })

      loading.value = false

      setTimeout(() => router.push('/dashboard'), 3000)

      setTimeout(() => email.value = "", 4000)

      setTimeout(() => password.value = "", 4000)

}else {

    toast(res + " ✖️", {
        "theme": "colored",
        "type": "error",
        "autoClose": 3000,
        "dangerouslyHTMLString": true
    })

    loading.value = false

}

  }, 1500 )



    
  } catch (e) {

      console.log(e)

  }
};


</script>

<style>
h1{
  font-family: "Poppins", sans-serif !important;
  letter-spacing: 2px;
  font-weight: 800;
}
body{
  overflow: hidden;
}
#btn{
  width: 100%;
  color: white;
  background: #1F3A93;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 4px;
  margin-top: 1em;
  transition: 300ms all ease-in-out;
}

#btn:hover{

  background: #5BC8AC;

}
</style>