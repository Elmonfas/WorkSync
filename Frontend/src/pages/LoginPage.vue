<template>
    <q-page>
        <div class="w-full min-h-screen bg-[#001220] flex justify-center items-center">
        
        <div class="absolute w-60 h-60 rounded-xl bg-[#5BC8AC] top-14 -left-24 z-0 transform rotate-45  md:block"></div>
        <div class="absolute w-48 h-48 rounded-xl bg-[#5BC8AC] -bottom-6 -right-10 transform rotate-12  md:block"></div>

    <div class="w-1/3 py-8 px-8 bg-white rounded-2xl shadow-xl z-20 border-[4px] border-[#5BC8AC]">
        

        <div class="flex flex-col items-center justify-center">
        <a class="flex items-center justify-center p-0 m-0 w-1/3" href="/"><img class="w-[100%]" src="../assets/WSYNC_png.png" alt=""></a>
        <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Hi again 👋 !</h1>
        <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Login with your account to enjoy all the services !</p>
      </div>
            <q-form 
            @submit.prevent="handle_submit"
            >

        <q-input
          v-model="email"
          type="text"
          label="Insert email"
          :rules="[
            (val) => (val && val.length > 0) || 'Type something',
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
            <button id="btn" type="submit" class="w-full py-2 text-xl text-white bg-[#5BC8AC] rounded-lg hover:bg-[#1F3A93] mt-3 transition-all">LOGIN</button>
        </div>
        
        <p class="text-center mt-[1em]">Don’t have an account ? <a class="text-blue-500 underline pounter" href="/register">Register</a></p>

            </q-form>
        </div>
        </div>
        
        <div class="w-20 h-40 absolute bg-[#1F3A93] rounded-full bottom-20 left-10 transform rotate-45 md:block"></div>
        
        <div class="w-40 h-40 absolute bg-[#1F3A93] rounded-full top-0 -right-12 md:block"></div>
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


const email = ref("")
const password = ref("")

const handle_submit = async () => {

  try {

    const res = await userStore.access(email.value, password.value)

    await userStore.access(email.value, password.value)

    if(userStore.token){

        toast(res+ " 👋 !", {
            "theme": "colored",
            "type": "success",
            "position": "top-right",
            "autoClose": 2000,
            "dangerouslyHTMLString": true
        })
    

      setTimeout(() => router.push('/dashboard'), 2000)
      
      setTimeout(() => email.value = "", 4000)
     
      setTimeout(() => password.value = "", 4000)

    }else {

        toast(res + " ✖️", {
            "theme": "colored",
            "type": "error",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
        })

        password.value = ""

    }

      
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

</style>