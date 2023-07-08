import { zodResolver } from "@hookform/resolvers/zod";
import { signUpFormType, signUpFormSchema } from "@web/lib/validation/auth";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { z } from "zod";
import { signUpAction } from "@web/app/_actions/user";

type Props = {};

export default function SignUpForm({}: Props) {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<signUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (data: signUpFormType) => {
    console.log("client:", data);

    startTransition(async () => {
      try {
        const res = await signUpAction(data);
        if (res.success) {
          localStorage.setItem("access_token", res.accessToken);
        } else {
          Object.keys(res.filedErrors).map((key) => {
            //avatarUrl only contains in case of OAuth
            const fieldKey = key as keyof Omit<signUpFormType, "avatarUrl">;
            setError(fieldKey, { message: res.filedErrors[fieldKey] });
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Username"
        errorMessage={errors.username?.message}
        {...register("username")}
      />

      <Input
        label="Email"
        errorMessage={errors.email?.message}
        {...register("email")}
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
