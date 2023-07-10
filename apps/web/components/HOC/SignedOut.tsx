"use sever";

import { getCurrentUser } from "@web/app/_actions/auth";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default async function SignedOut({ children }: Props) {
  const currentUser = await getCurrentUser();

  if (currentUser) {
    return;
  }

  return <>{children}</>;
}
