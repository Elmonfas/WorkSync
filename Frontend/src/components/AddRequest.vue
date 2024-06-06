<template>
    <q-form @submit.prevent="create_request" class="bg-[#5BC8AC] p-3 w-1/3 rounded ">

        <p class="m-[10px] text-[#001220]">Send a request</p>

        <q-input
        v-model="request_date"
        type="date"
        label="request date"
        class="input"
        :rules="[
              (val) =>
                (val && val.length > 1),
            ]"
        >
        </q-input>

        <q-input
        v-model="requested_day"
        type="date"
        label="requested day"
        class="input"
        :rules="[
              (val) =>
                (val && val.length > 1),
            ]"
        >
        </q-input>

        <q-input
        v-model="message"
        type="text"
        label="message"
        class="input"
        :rules="[
              (val) =>
                (val && val.length > 1),
            ]"
        >
        </q-input>

        <q-input
          v-model="email"
          type="text"
          label="Insert email"
          class="input"
          :rules="[
            (val) => (val && val.length > 0) || 'Type something',
            (val) =>
              /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(val) ||
              'Invalid email format',
          ]"
        ></q-input>

        <q-btn type="submit" class="mt-3 btn" >Add Request</q-btn>

    </q-form>
</template>

<script setup>
import { ref } from "vue"
import { useRequetsStore } from 'src/stores/requests_store';
import 'vue3-toastify/dist/index.css'
import {toast} from 'vue3-toastify'
const request_store = useRequetsStore()

const request_date = ref("")
const requested_day = ref("")
const message = ref("")
const email = ref("")

const current_date = new Date().setHours(0, 0, 0, 0)

const create_request = async () => {

    const selected_date = new Date(request_date.value).setHours(0, 0, 0, 0)

    console.log(current_date)
    console.log(selected_date)

try {

    if(selected_date >= current_date) {


        toast("Request sended successfully ✔️", {
            "theme": "colored",
            "type": "success",
            "position": "top-right",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
            })

            await request_store.create_request(request_date.value, requested_day.value, message.value, email.value)

            setTimeout(() =>  location.reload(), 3000)

    } else{

        toast("Request date is earlier than the current date ✖️", {
            "theme": "colored",
            "type": "error",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
          })

    }

} catch (e) {

    console.log(e)
    
}

}


</script>

<style lang="sass">
.btn
    width: 100%
    background: #001220

.input
    border-radius: 10px
    margin: 10px
    background: white
    color: red
    padding: 10px
    padding-bottom: 0

</style>