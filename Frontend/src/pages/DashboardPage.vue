<template>
    <q-page class="bg-[#001220] text-white flex">

        <div class="container w-1/3 flex  flex-col">

            <h2 class="m-[1em] text-[3em]">Welcome {{ name }} 👋 !</h2>

            <div class="shifts bg-[#5BC8AC] p-4 rounded w-[75%] h-[70vh] ml-[5em]">
            <p class="text-[#001220] text-[2em] font-bold">Next work shifts:</p>

            <div v-if="shifts.length === 0" class="shift flex items-center justify-center rounded p-1 my-11" ><p class="text-[#001220] text-[1.5em] font-bold ">Add your work shifts to see them 📌</p></div>
        
            <div class="shift bg-[#001220] flex items-center  rounded p-1 my-5" v-for="shift in shifts" :key="shift" >


        
            <div class="bg-[#5BC8AC] p-2 m-2 rounded text-center text-[#001220] w-[75px] h-[75px]">
            <h4 class="text-[2.5em] p-0 m-0">{{ shift.day.split('-')[2].split('T')[0] }}</h4>
            <h4 class="text-[2em] p-0 m-0 font-bold ">{{  shift.day_of_week.slice(0,3) }}</h4>  
        </div>
            <p class="ml-[7%] text-[1.2em] font-semibold ">{{ shift.start_time.substring(0,5) }} - {{ shift.end_time.substring(0,5) }}</p>
        
            <div class="flex flex-col ml-12">
            <q-btn class="my-1 border-white" @click="open_editor(shift.shift_id)">✍🏻</q-btn>
            <q-btn class="my-1 border-white" @click="delete_shift(shift.shift_id)">🚫</q-btn>
            </div>
        
        </div>
        </div>

        </div>
        <div class="container w-2/3 flex flex-col mt-[1rem]">

            <div class="cointer w-full h-1/4 flex justify-around items-center ">

                <div class="container bg-[#1F3A93] w-[250px] h-[250px] p-3 rounded border-[#5BC8AC] border-2" v-for="request in requests" :key="request">
                    <h4 class="text-[#5BC8AC] text-[2em] tracking-widest">{{ request.day_of_week.slice(0,3) }}, {{ request.requested_day.split('-')[2].split('T')[0] }} of {{ request.month_requested }}</h4>
                    <hr class="border-[1px] border-[#001220] w-[70%] mt-[2%] ">
                    <p class="mt-[10%]">{{ request.message }}</p>
                </div>

                <div class="container bg-[#1F3A93] w-[250px] h-[250px] p-3 rounded border-[#5BC8AC] border-2" v-if="requests.length === 0">
                    <h4 class="text-[#5BC8AC] text-[2em] tracking-widest">Add Request</h4>
                    <hr class="border-[1px] border-[#001220] w-[70%] mt-[2%] ">
                    <p class="mt-[10%]">Currently you dont have any requests</p>
                </div>

            </div>

            <div class="cointer w-full h-3/4 flex justify-around items-center ">

                <AddShift id="shift_component"/>

                <add-request id="request_component"/>

                <q-form @submit.prevent="update_shift(id_picker)" id="editor" class="bg-[#1F3A93] p-3 w-1/3 rounded">

                    <p class="m-[10px] text-[#5BC8AC]">Update a work shift</p>

                    <q-input
                    v-model="day"
                    type="date"
                    label="work day"
                    class="input"
                    :rules="[
                        (val) =>
                            (val && val.length > 1),
                        ]"
                    >
                    </q-input>

                    <q-input
                    v-model="start_time"
                    type="time"
                    label="start time"
                    class="input"
                    :rules="[
                        (val) =>
                            (val && val.length > 1),
                        ]"
                    >
                    </q-input>

                    <q-input
                    v-model="end_time"
                    type="time"
                    label="end time"
                    class="input"
                    :rules="[
                        (val) =>
                            (val && val.length > 1),
                        ]"
                    >
                    </q-input>

                    <q-btn type="submit" class="mt-3 btn" >Upadete Shift</q-btn>

                </q-form>

            </div>

        </div>

    </q-page>
</template>

<script setup>
import { useShiftsStore } from 'src/stores/shifts_store'
import { useUserStore } from 'src/stores/user_store'
import { useRequetsStore} from '../stores/requests_store'
import { ref } from 'vue';
import 'vue3-toastify/dist/index.css'
import {toast} from 'vue3-toastify'

import AddShift from '../components/AddShift.vue'
import AddRequest from '../components/AddRequest.vue'

const shift_store = useShiftsStore()
const user_store = useUserStore()
const request_store = useRequetsStore()

const name = ref("")

const shifts = ref([])

const requests = ref([])

const id_picker = ref("")

const current_date = new Date().setHours(0, 0, 0, 0)

const day = ref("")
const start_time = ref("")
const end_time = ref("")

const get_shifts = async () => {

    try {

        const usefull_dates = []

       const api_shifts =  await shift_store.get_shifts()

       for(let i = 0; i < api_shifts.length; i++){

        if(new Date(api_shifts[i].day) >= current_date)

        usefull_dates.push(api_shifts[i])

       }

       shifts.value = usefull_dates.slice(0, 4)

       console.log(shifts.value)
        
    } catch (e) {

        console.log(e)
        
    }
}

get_shifts()

const get_info_user = async () => {

    try {

        name.value = await user_store.info_user()
        
    } catch (e) {

        console.log(e)
        
    }

}

get_info_user()


const get_requests = async () => {

try {

   const api_requests =  await request_store.get_requests()

   requests.value = api_requests.slice(-3)

   console.log(requests)
    
} catch (e) {

    console.log(e)
    
}
}

get_requests()

const delete_shift = async (id) => {

    try {

    await shift_store.delete_shift(id)

    toast("Work shift delete successfully ✔️", {
            "theme": "colored",
            "type": "success",
            "position": "top-right",
            "autoClose": 2000,
            "dangerouslyHTMLString": true
            })

    setTimeout(() => location.reload(), 2000)
        
    } catch (e) {

        console.log(e)
        
    }
}
const open_editor = async(id) => {

    try {

        let shift_component = document.getElementById('shift_component')

        let request_component = document.getElementById('request_component')

        let editor = document.getElementById('editor')

        shift_component.style.display = 'none'
        request_component.style.display = 'none'
        editor.style.display = 'block'

        id_picker.value = id
        
    } catch (e) {

        console.log(e)
        
    }
}

const update_shift = async (id) => {

    try {
        let shift_component = document.getElementById('shift_component')

        let request_component = document.getElementById('request_component')

        let editor = document.getElementById('editor')

        shift_component.style.display = 'block'
        request_component.style.display = 'block'
        editor.style.display = 'none'

        console.log(id)

        await shift_store.update_shift(id, day.value, start_time.value, end_time.value)

        toast("Work shift updated ✔️", {
            "theme": "colored",
            "type": "success",
            "position": "top-right",
            "autoClose": 2000,
            "dangerouslyHTMLString": true
            })

        setTimeout(() =>  location.reload(), 2000)
        
    } catch (e) {

        console.log(e)
        
    }
} 

</script>

<style>
h4, h2 {
    
    font-family: "Luckiest Guy", cursive;

}
body{
    overflow: hidden;
}
.btn{
    color: #5BC8AC;
    transition: 300ms all ease-in-out;
}
.btn:hover{
    background: #5BC8AC;
    color: #001220;
}
#editor{
    display: none;
}
</style>