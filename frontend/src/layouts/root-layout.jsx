import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import NavBar from '../../components/navBar';
 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
export default function RootLayout() {
  const navigate = useNavigate();
  
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
            <NavBar />
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}