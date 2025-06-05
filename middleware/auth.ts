export default defineNuxtRouteMiddleware((to, from) => {
  // Example: protect /users route
  // if (to.path.startsWith('/users') && !useAuth().isLoggedIn) {
  //   return navigateTo('/')
  // }
  
  // This is just a placeholder middleware
  console.log(`Navigating from ${from?.path} to ${to.path}`)
})
