"use client";

import { db } from "@/db/db";
import { users } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function Page() {
  const { isSignedIn,user isLoaded } = useUser();

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

  const saveUser = async (userId: string) => {
    await db.insert(users).values({ userId });
  };

  // if (!user) {
  //   return <div>User not found</div>;
  // }else{
  //   console.log(user?.id)
  //   saveUser(user?.id);
  // }


  return <div>page</div>;
}

export default Page;