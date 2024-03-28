"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { SignIn } from "@phosphor-icons/react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type InputData = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<InputData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const submitHandler: SubmitHandler<InputData> = async (data) => {
    const response = await signIn("EmailAndPassword", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.ok) router.push("/");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col items-center space-y-6"
        >
          <p className="text-2xl font-bold">Login</p>
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register(`email`)}
            className="w-60 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register(`password`)}
            className="w-60 border border-gray-300 text-gray-900 text-sm rounded-md w-full p-2.5"
          />
          <button
            type="submit"
            className="flex justify-center items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded-md shadow"
          >
            <p>login</p>
            <SignIn size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
