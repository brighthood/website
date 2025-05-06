import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const formfilds = [
    { name: "Email", type: "text", placeholder: "Email Adress" },

    { name: "Password", type: "password", placeholder: " Password" },
  ];
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center  w-[70%] sm:max-w-md mx-auto bg-dark-surface  px-5 py-5 rounded-xl sm:px-7 sm:py-10 gap-2   sm:w-[50%] shadow-2xl "
    >
      <div className="flex flex-col  mb-5">
        <h1 className="bg-gradient-to-tr font-extrabold   from-primary to-purple-500 text-xl sm:text-2xl  bg-clip-text inline-block text-transparent text-center ">
          Sign In
        </h1>
      </div>

      {formfilds.map((field) => (
        <Input
          type={field.type}
          placeholder={field.placeholder}
          register={register}
          name={field.name}
        />
      ))}

      <Button color="cta" className="w-full mt-7" size="sm">
        Sign In
      </Button>
      <div>
        <p className="text-dark-secondaryText text-sm mt-4">
          i have no account{" "}
          <Link to="/signup" className="text-primary font-semibold">
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
