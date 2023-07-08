import { signInFormSchema } from "@web/lib/validation/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { z } from "zod";

type Props = {};
type Inputs = z.infer<typeof signInFormSchema>;

export default function SignInForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Email address or username"
        errorMessage={errors.emailOrUsername?.message}
        {...register("emailOrUsername")}
      />

      <Input
        label="Password"
        type="password"
        errorMessage={errors.password?.message}
        {...register("password")}
      />

      <button className="btn-primary btn">Continue</button>
    </form>
  );
}
