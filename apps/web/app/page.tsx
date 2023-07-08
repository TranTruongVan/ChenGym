import { GreetingPage } from "@web/components";
import React from "react";
import { getCurrentUser } from "./_actions/user";

type Props = {};

export default async function page({}: Props) {
  // const accessToken = localStorage.getItem("access_token");
  // const currentUser = accessToken ? getCurrentUser(accessToken) : null;

  // console.log("homepage:", currentUser);

  return (
    <>
      <GreetingPage />
    </>
  );
}
