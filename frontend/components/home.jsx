import CategoryCards from "./categoryCards";
import { SignIn, SignedOut } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react"


const Home = () => {
  const { userId, isLoaded } = useAuth()

  return (
    <>
      <SignedOut>
        <SignIn />
      </SignedOut>
      { userId ? <CategoryCards /> : null }
    </>
  );
};

export default Home;
