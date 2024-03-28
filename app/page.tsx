"use client";

import { signOut } from "next-auth/react";
import { SignOut } from "@phosphor-icons/react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center space-y-6">
      <p className="text-4xl text-white font-bold">Successful login!!</p>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white">Email: {session?.user?.email}</p>
        <p className="text-white">Name: {session?.user?.name}</p>
      </div>
      <button
        onClick={handleSignOut}
        className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded-md shadow"
      >
        <p>logout</p>
        <SignOut size={20} />
      </button>
    </main>
  );
}
