import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  Name: Yup.string()
    .required("Full name is required")
    .min(2, "Name must be at least 2 characters"),

  Email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  School: Yup.string()
    .required("School name is required")
    .min(2, "School name must be at least 2 characters"),

  Phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),

  Password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("Password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const formfilds = [
    {
      name: "Name",
      type: "text",
      placeholder: "Full Name",
    },
    {
      name: "Email",
      type: "email",
      placeholder: "Email Adress",
    },
    {
      name: "School",
      type: "text",
      placeholder: "School Name",
    },
    {
      name: "Phone",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      name: "Password",
      type: "password",
      placeholder: " Password",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center my-5  max-w-md  mx-auto bg-dark-surface  px-6 py-5 rounded-xl sm:px-7 sm:py-6 gap-2   sm:w-full shadow-2xl "
    >
      <div className="flex flex-col gap-2 mb-2">
        <h1 className="bg-gradient-to-tr font-extrabold   from-primary to-purple-500 text-xl sm:text-2xl  bg-clip-text inline-block text-transparent text-center ">
          Register to our platform
        </h1>
        <p className="text-dark-darkText text-sm  text-center mt-1">
          Join our tech journey and start learning today.
        </p>
      </div>

      {formfilds.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          placeholder={field.placeholder}
          register={register}
          name={field.name}
          errors={errors}
        />
      ))}

      <Button color="cta" className="w-full mt-7" size="sm">
        Register
      </Button>
      <div>
        <p className="text-dark-secondaryText text-sm mt-4">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
