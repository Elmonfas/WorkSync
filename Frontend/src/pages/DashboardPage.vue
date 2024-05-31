<template>
    <q-page class="bg-[#001220] text-white flex ">

        <div class="container w-1/3 flex items-center justify-center">

            <div class="shifts bg-[#5BC8AC] p-3 rounded w-[70%] h-[70vh]">
            <p class="text-[#001220] font-semibold">Next work shifts:</p>
        
            <div class="shift bg-[#001220] flex items-center  rounded p-1 my-11" v-for="shift in shifts" :key="shift" >
        
            <div class="bg-[#5BC8AC] p-2 m-2 rounded text-center text-[#001220] w-[80px] h-[80px]">
            <h4 class="text-[3em] p-0 m-0">{{ shift.day.split('-')[2].split('T')[0]}}</h4>
            <h4 class="text-[2em] p-0 m-0 font-bold">{{  shift.day_of_week.slice(0,3) }}</h4>  
        </div>
            <p class="ml-[15%] text-[1.6em] font-semibold ">{{ shift.start_time.substring(0,5) }} - {{ shift.end_time.substring(0,5) }}</p>
        
            <div class="flex flex-col ml-12">
            <q-btn class="my-1 border-white">✍🏻</q-btn>
            <q-btn class="my-1 border-white">🚫</q-btn>
            </div>
        
        </div>
        </div>

        </div>
        <div class="container w-1/3">

            <q-btn class="m-2" color="blue" @click="create_shift">Add shift</q-btn>

        </div>
        <div class="container w-1/3"></div>


    </q-page>
</template>

<script setup>
import { useShiftsStore } from 'src/stores/shifts_store';
import { ref } from 'vue';

const shift_store = useShiftsStore()

const day = ref("2024-12-21")
const start_time = ref("05:45:00")
const end_time = ref("11:30:00")

const shifts = ref([])


const get_shifts = async () => {

    try {

       const api_shifts =  await shift_store.get_shifts()

       shifts.value = api_shifts.slice(-4)

       console.log(shifts)
        
    } catch (e) {

        console.log(e)
        
    }
}

get_shifts()














const create_shift = async () => {

    try {

        await shift_store.create_shift(day.value, start_time.value, end_time.value)
        
    } catch (e) {

        console.log(e)
        
    }

}


</script>

<style>
h4 {
    
    font-family: "Luckiest Guy", cursive;

}
</style>