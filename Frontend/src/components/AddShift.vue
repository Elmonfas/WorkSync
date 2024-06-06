<template>
    <q-form @submit.prevent="create_shift" class="bg-[#5BC8AC] p-3 w-1/3 rounded">

        <p class="m-[10px] text-[#001220]">Add a work shift</p>

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

        <q-btn type="submit" class="mt-3 btn" >Add shift</q-btn>

    </q-form>
</template>

<script setup>
import { ref } from "vue"
import { useShiftsStore } from 'src/stores/shifts_store';
import 'vue3-toastify/dist/index.css'
import {toast} from 'vue3-toastify'
const shift_store = useShiftsStore()

const day = ref("")
const start_time = ref("")
const end_time = ref("")
const current_date = new Date().setHours(0, 0, 0, 0)

const create_shift = async () => {

    const selected_date = new Date(day.value).setHours(0, 0, 0, 0)

try {

    console.log(selected_date)
    console.log(current_date)

    if(selected_date >= current_date) {


        toast("Work shift added ✔️", {
            "theme": "colored",
            "type": "success",
            "position": "top-right",
            "autoClose": 3000,
            "dangerouslyHTMLString": true
            })

            await shift_store.create_shift(day.value, start_time.value, end_time.value)

            setTimeout(() =>  location.reload(), 3000)

    } else{

        toast("Work shift date is earlier than the current date ✖️", {
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