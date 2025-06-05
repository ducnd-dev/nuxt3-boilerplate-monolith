export const useAuth = () => {
  // Example composable for authentication state
  const isLoggedIn = useState('isLoggedIn', () => false)
  return { isLoggedIn }
}
