import { GreetingPage } from "@web/components";
import React from "react";
import { getCurrentUser } from "./_actions/auth";

type Props = {};

export default async function page({}: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <GreetingPage />;
  }

  return <div className="page-setup">Hello {currentUser.username}</div>;
}
