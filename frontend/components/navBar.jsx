import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


const NavBar = () =>{


    return(
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/' className='text-3xl'>Home</Link></li>
        <li><Link to='/furniture/big-stuff' className='text-xl'>Big stuff</Link></li>
        <li><Link to='/furniture/not-so-big-stuff' className='text-xl'>Not so big stuff</Link></li>
        <li><Link to='/furniture/small-stuff' className='text-xl'>Small stuff</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to='/' className=" text-7xl pacifico-regular"><h1>MyFurniture</h1></Link>
  </div>
  <div className="navbar-end">
  <SignedOut>
        <SignInButton className='text-3xl' />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
  </div>
</div>
    )
}

export default NavBar