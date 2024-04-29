import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Input/Input";
import { Button } from "../../Button/Button";
import { updateAccount as update } from "../../conf/User";

const UpdateAccount = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const updateAccout = async (data) => {
    try {
      setError("");
      const response = await update(data);
      if (response) console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name: "
            type="text"
            placeholder="Enter your full name"
            {...register("fullName", { required: true })}
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
          <Button type="submit" className="w-full">
            Update Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateAccount;
