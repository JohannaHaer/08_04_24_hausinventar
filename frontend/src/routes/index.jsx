import { Link } from "react-router-dom";
import CategoryCards from "../../components/categoryCards";
import { SignIn, useAuth } from '@clerk/clerk-react';
 
export default function IndexPage() {
    const { userId } = useAuth();
  return (
    <>
    { userId ? <CategoryCards /> : <SignIn />}
    </>
  )
}