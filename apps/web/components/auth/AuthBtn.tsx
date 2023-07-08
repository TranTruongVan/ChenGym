"use client";

import React from "react";
import { store } from "@web/store";
import {
  displaySignInForm,
  displaySignUpForm,
} from "@web/store/auth-form.slice";

type Props = {
  children: React.ReactNode;
};

export function SignInBtn({ children }: Props) {
  return <AuthBtn type="signin">{children}</AuthBtn>;
}

export function SignUpBtn({ children }: Props) {
  return <AuthBtn type="signup">{children}</AuthBtn>;
}

type AuthButtonProps = {
  children: React.ReactNode;
  type: AuthFormType;
};

function AuthBtn({ children, type }: AuthButtonProps) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        store.dispatch(
          type === "signin" ? displaySignInForm() : displaySignUpForm()
        );
      }}
    >
      {children}
    </div>
  );
}
