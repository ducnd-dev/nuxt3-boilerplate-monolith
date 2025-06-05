export default defineEventHandler((event) => {
  return {
    message: 'Hello from Nuxt 3 API!',
    timestamp: new Date().toISOString(),
    method: getMethod(event),
    url: getRequestURL(event).pathname
  }
})
