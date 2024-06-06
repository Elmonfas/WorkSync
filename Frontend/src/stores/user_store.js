import { defineStore } from "pinia";

import { api } from "src/boot/axios";

import { ref } from "vue";

export const useUserStore = defineStore('user', () => {

    const token = ref(null)

    const access = async (email, password) => {
  
        try {
      
          const res = await api.post('/login', {

            email,
            password
          
          })
      
          console.log(res.data)
      
          token.value = res.data.token

          localStorage.setItem("user", "activo papi 😎")

          refresh_token()

          return res.data.msg
          
        } catch (e) {
      
          return e.response.data.error
          
        }
      
      }

      const register = async (name, surname, email, password) => {
  
        try {
      
          const res = await api.post('/register', {
            
            name,
            surname,
            email,
            password
          
          })
      
          console.log(res.data)
      
          token.value = res.data.token

          localStorage.setItem("user", "activo papi 😎")

          refresh_token()

          return res.data.msg
          
        } catch (e) {
      
          return e.response.data.error
          
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

      const info_user = async () => {

        try {

          const res = await api({
            method : 'GET',
            url : '/protect',
            headers : {
            Authorization : 'Bearer ' + token.value
            }
        })

          return(res.data.user.Nombre)
          
        } catch (e) {

          console.log(e)
          
        }

      }

    return {
         token,   
         access,
         register,
         refresh_token,
         key_token,
         logout,
         info_user
        }
    
})