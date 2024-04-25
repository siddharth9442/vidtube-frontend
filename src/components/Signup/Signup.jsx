import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { getCurrentUser, registerUser } from "../conf/User";

const Signup = () => {
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm();

  const createAccount = async (data) => {
    setError("");

    try {
      const formData = new FormData();
      formData.append("username", data.username);
      formData.append("email", data.email);
      formData.append("fullName", data.fullName);
      formData.append("avatar", data.avatar[0]);
      formData.append("coverImage", data?.coverImage[0]);
      formData.append("password", data.password);

      const response = await registerUser(formData).then(
        (data) => data.data.data
      );
      if (response) {
        const user = await getCurrentUser().then((data) => data.data.data);
        if (user) dispatch(authLogin(user));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-100 p-10 rounded-lg border border-black/10">
        <div className="flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center font-bold">Sign Up to create account</h2>
        <p className="text-center text-black/60">
          Already have an account ?&nbsp;
          <Link to={"/login"}>Signin</Link>
        </p>
        {error && <p className="text-center text-red-600 mt-8">{error}</p>}
        <form
          onSubmit={handleSubmit(createAccount)}
          className="flex flex-col space-y-3 mt-8"
          encType="multipart/form-data"
        >
          <div className="space-y-5">
            <Input
              label="Username: "
              name="username"
              placeholder="Enter your username"
              {...register("username", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              type="email"
              name="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email must be valid email address";
                  },
                },
              })}
            />
            <Input
              label="Full Name: "
              name="fullName"
              placeholder="Enter your fullname"
              {...register("fullName", {
                required: true,
              })}
            />
            <Input
              label="Avatar: "
              type="file"
              name="avatar"
              {...register("avatar", {
                required: true,
              })}
            />
            <Input
              label="Cover Image: "
              name="coverImage"
              type="file"
              {...register("coverImage", {
                required: true,
              })}
            />
            <Input
              label="Password: "
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
