import { defineStore } from "pinia";

import { api } from "src/boot/axios";

import { ref } from "vue";

export const useUserStore = defineStore('user', () => {

    const token = ref(null)

    const access = async () => {

        try {
      
          const res = await api.post('/login', {
            
            email : "jose@gmail.com",
            
            password : "jose123"
          
          })
      
          console.log(res.data)
      
          token.value = res.data.token

          localStorage.setItem("user", "activo papi 😎")

          refresh_token()
          
        } catch (e) {
      
          console.log(e)
          
        }
      
      }

      const logout = async () => {

        try {

            await api.get('/logout')
            
        } catch (e) {

            console.log(e)
            
        }finally {

            token.value = null

            localStorage.removeItem("user")

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

          localStorage.setItem("user", "activo papi 😎")
          
        } catch (e) {

          localStorage.removeItem("user")
      
          console.log(e)
          
        }
      }

    return {
         token,   
         access,
         refresh_token,
         key_token,
         refresh_token,
         logout
        }
    
})