"use client";

import { store } from "@web/store";
import {
  displaySignInForm,
  displaySignUpForm,
  hiddenAuthForm,
  selectAuthForm,
} from "@web/store/auth-form.slice";
import { useAppSelector } from "@web/store/hook";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import OAuth from "./OAuth";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

type Props = {};

export default function AuthForm({}: Props) {
  const { type, display } = useAppSelector(selectAuthForm);

  return (
    <div
      className={clsx(
        "absolute left-0 top-0 z-40 flex h-[-webkit-fill-available] min-h-screen w-screen items-start justify-center overflow-auto bg-black/40 text-foreground",
        !display && "hidden"
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-w-[calc(100vw - 5rem)] relative my-16 h-fit w-[25rem] rounded-2xl bg-background p-8"
      >
        {/* close button  */}
        <button
          onClick={() => {
            store.dispatch(hiddenAuthForm());
          }}
          className="absolute border btn-base-100 btn-square btn-sm btn right-4 top-4 border-muted bg-card hover:bg-card"
        >
          <Image
            alt="close"
            src="/close.svg"
            width={20}
            height={20}
            className="dark:invert dark:filter"
          />
        </button>

        {/* form title */}
        <h2 className="mb-1 text-xl font-semibold">
          {type === "signup" ? "Create your account" : "Sign In"}
        </h2>
        <div className="flex items-center gap-1 text-foreground-1/70">
          to continue to
          <div className="flex items-center font-medium uppercase text-primary">
            <Image alt="logo" src="/lion-white.png" height={20} width={20} />
            ChenGym
          </div>
        </div>

        <OAuth />

        {/* divider */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-[1px] flex-1 bg-foreground opacity-20" />
          <span className="text-sm text-foreground/70">or</span>
          <div className="h-[1px] flex-1 bg-foreground opacity-20" />
        </div>

        {/* main form */}
        {type == "signin" ? <SignInForm /> : <SignUpForm />}

        {/* navigate */}
        <div className="flex items-center my-6 text-sm text-foreground/70">
          {type === "signin" ? "No account?" : "Have an account?"}

          <span
            onClick={() => {
              if (type === "signin") {
                store.dispatch(displaySignUpForm());
              } else {
                store.dispatch(displaySignInForm());
              }
            }}
            className="ml-1 cursor-pointer text-primary hover:underline"
          >
            {type === "signin" ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
}
