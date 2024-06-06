import { defineStore } from "pinia";

import { api } from "src/boot/axios";

import { ref } from "vue";

import { useUserStore } from './user_store'

export const useRequetsStore = defineStore('request', () => {

    const user_store = useUserStore()

    const get_requests = async () => {

        try {

            const res = await api({
                method : 'GET',
                url : '/requests',
                headers : {
                Authorization : 'Bearer ' + user_store.token
                }
            })
            
            console.log(res.data.requests[0])

            return res.data.requests
            
        } catch (e) {

            console.log(e.response || e)
            
        }

    }

    const create_request = async (request_date, requested_day, message, email) => {

        try {

            const res = await api({
                method : 'POST',
                url : '/requests',
                headers : {
                Authorization : 'Bearer ' + user_store.token
                },
                data:{
                    request_date,
                    requested_day,
                    message,
                    email
                }
            })
            
            console.log(res.data)

            return res.data
          
        } catch (e) {
        
          console.log(e.response || e)
          
        }
        
        }




    return {
        get_requests,
        create_request
        }
    
})