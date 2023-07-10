import { signInFormSchema, signInFormType } from "@web/lib/validation/auth";
import React, { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { signInAction } from "@web/app/_actions/auth";
import { store } from "@web/store";
import { hiddenAuthForm } from "@web/store/auth-form.slice";
import {
  displayLoadingScreen,
  hiddenLoadingScreen,
} from "@web/store/loading-screen.slice";

type Props = {};

export default function SignInForm({}: Props) {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<signInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (data: signInFormType) => {
    store.dispatch(displayLoadingScreen());
    try {
      const res = await signInAction(data);

      if (res.success) {
        localStorage.setItem("access_token", res.accessToken);
        store.dispatch(hiddenAuthForm());
      } else {
        Object.keys(res.filedErrors).map((key) => {
          const fieldKey = key as keyof signInFormType;
          setError(fieldKey, { message: res.filedErrors[fieldKey] });
        });
      }
    } catch (error) {
      console.log(error);
    }
    store.dispatch(hiddenLoadingScreen());
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
