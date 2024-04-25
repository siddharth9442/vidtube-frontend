import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import { loginUser, getCurrentUser } from "../conf/User";

const Login = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (data) => {
    setError("");
    try {
      const response = await loginUser(data).then((data) => data.data.data);

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
      <div className="mx-auto w-full bg-gray-100 rounded-xl max-w-lg p-10 border border-black/10">
        <div className="flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="text-center text-base text-black/60">
          Don&apos;t have account?&nbsp;
          <Link to={"/signup"} className="">
            Sign Up
          </Link>
        </p>
        {error && <p className="text-center text-red-600 mt-8">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Username: "
              type="text"
              placeholder="Enter your username"
            />
            <Input
              label="Email: "
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
