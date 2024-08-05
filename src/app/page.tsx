"use client";

import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function Page() {
  const { isSignedIn,user ,isLoaded } = useUser();

  if (isSignedIn) redirect("/home");

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn) {
    return <div>Please sign in</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }
  if (!user) throw new Error("User not found");




  return <div>page</div>;
}

export default Page;