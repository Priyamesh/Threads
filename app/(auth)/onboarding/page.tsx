import { currentUser } from "@clerk/nextjs/server";
import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  const userInfo: any = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    userName: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className=" flex flex-col justify-start mx-auto max-w-3xl px-10 py-4">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete Your Profile Now to use Threads
      </p>

      <section className="mt-9 bg-dark-3 pt-10 pb-6 px-6 rounded-md">
        <AccountProfile user={userData} btnTitle="continue" />
      </section>
    </main>
  );
}

export default Page;
