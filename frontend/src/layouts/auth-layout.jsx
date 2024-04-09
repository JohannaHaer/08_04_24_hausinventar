import * as React from 'react'
import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"
 
export default function AuthLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()
 
  console.log('test', userId)
 
  React.useEffect(() => {
    if (!userId) {
      navigate("/")
    }
  }, [])
 
  if (!isLoaded) return "Loading..."
 
  return (
    <Outlet />
  )
}