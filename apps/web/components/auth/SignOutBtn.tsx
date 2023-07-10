"use client";

import { logOutAction } from "@web/app/_actions/auth";
import React from "react";
import {
  displayLoadingScreen,
  hiddenLoadingScreen,
} from "@web/store/loading-screen.slice";
import { store } from "@web/store";

type Props = {};

export default function SignOutBtn({}: Props) {
  return (
    <div
      onClick={async () => {
        store.dispatch(displayLoadingScreen());
        localStorage.removeItem("access_token");
        await logOutAction();
        store.dispatch(hiddenLoadingScreen());
      }}
      className="btn-primary btn"
    >
      Log out
    </div>
  );
}
