import { defineStore } from "pinia";

import { api } from "src/boot/axios";

import { ref } from "vue";

import { useUserStore } from './user_store'

export const useShiftsStore = defineStore('shift', () => {

    const user_store = useUserStore()

    const get_shifts = async () => {

        try {

            const res = await api({
                method : 'GET',
                url : '/shifts',
                headers : {
                Authorization : 'Bearer ' + user_store.token
                }
            })
            
            console.log(res.data.shifts)

            return res.data.shifts
            
        } catch (e) {

            console.log(e.response || e)
            
        }

    }

    const create_shift = async (day, start_time, end_time) => {

        try {

            const res = await api({
                method : 'POST',
                url : '/shifts',
                headers : {
                Authorization : 'Bearer ' + user_store.token
                },
                data:{
                    day : day,
                    start_time : start_time,
                    end_time : end_time
                }
            })
            
            console.log(res.data)

            return res.data
          
        } catch (e) {
        
          console.log(e.response || e)
          
        }
        
        }



    return {
        get_shifts,
        create_shift
        }
    
})