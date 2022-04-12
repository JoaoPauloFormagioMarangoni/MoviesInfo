import { useEffect, useState } from "react"

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      //   api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  }, [])

  async function handleLogin() {
    setLoading(true)
    // const {
    //   data: { token },
    // } = await api.post('/authenticate')

    const token = '123456789'

    localStorage.setItem('token', JSON.stringify(token))
    // api.defaults.headers.Authorization = `Bearer ${token}`

    setAuthenticated(true)
    setLoading(false)
  }

  function handleLogout() {
    setAuthenticated(false)

    localStorage.removeItem('token')
    // api.defaults.headers.Authorization = undefined
  }

  return ({authenticated, loading, handleLogin, handleLogout})
}
