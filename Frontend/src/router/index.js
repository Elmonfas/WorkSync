import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useUserStore } from '../stores/user_store'
import { nextTick } from 'vue'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from , next) => {

    const user_store = useUserStore()
    
    const required_auth = to.meta.auth

    // Si existe el token 
    if (user_store.token) {
      return next()
    }

    // Si no existe el token
    if (required_auth || localStorage.getItem('user')) {
      
      await user_store.key_token()

      if (user_store.token) {

        return next()
      
      }

      return next('login')
    
    }
    
    return next()
  
  })

  return Router
})
