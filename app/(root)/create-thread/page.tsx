import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.action";
import PostThread from "@/components/forms/PostThread";

async function page() {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) {
    return redirect("/onboarding");
  }

  return (
    <>
      <div className="head-text">Create thread</div>
      <PostThread userId={userInfo._id} />
    </>
  );
}

export default page;
