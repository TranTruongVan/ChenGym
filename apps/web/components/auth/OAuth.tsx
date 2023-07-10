import Image from "next/image";
import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { loginByGoogle } from "@web/app/_actions/auth";
import { store } from "@web/store";
import { hiddenAuthForm } from "@web/store/auth-form.slice";

import {
  displayLoadingScreen,
  hiddenLoadingScreen,
} from "@web/store/loading-screen.slice";

type Props = {};

export default function OAuth({}: Props) {
  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      store.dispatch(displayLoadingScreen());
      const accessTokenGoogle = response.access_token;
      const res = await loginByGoogle(accessTokenGoogle);
      if (res) {
        localStorage.setItem("access_token", res.accessTokenChenGym);
        store.dispatch(hiddenAuthForm());
      }
      store.dispatch(hiddenLoadingScreen());
    },
  });

  return (
    <div className="flex flex-col gap-2 my-6">
      <button className="flex items-center justify-between w-full gap-2 px-5 py-2 border group btn border-muted bg-card hover:bg-card">
        <div className="flex items-center gap-2">
          <Image alt="facebook" src="/facebook.svg" width={16} height={16} />
          <span className="text-sm normal-case text-foreground">
            Continue with Facebook
          </span>
        </div>

        <Image
          alt="arrow-right"
          src="/arrow-right.svg"
          width={16}
          height={16}
          className="transition-all -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:invert dark:filter"
        />
      </button>

      <button
        onClick={() => {
          handleGoogleLogin();
        }}
        className="flex items-center justify-between w-full gap-2 px-5 py-2 border group btn border-muted bg-card hover:bg-card"
      >
        <div className="flex items-center gap-2">
          <Image alt="google" src="/google.svg" width={16} height={16} />
          <span className="text-sm normal-case text-foreground">
            Continue with Google
          </span>
        </div>

        <Image
          alt="arrow-right"
          src="/arrow-right.svg"
          width={16}
          height={16}
          className="transition-all -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:invert dark:filter"
        />
      </button>
    </div>
  );
}
