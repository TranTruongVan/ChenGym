"use server";

import { signUpFormSchema } from "@web/lib/validation/auth";
import { z } from "zod";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

type SignUpActionResult =
  | {
      success: false;
      filedErrors: {
        email?: string;
        password?: string;
        username?: string;
      };
    }
  | {
      success: true;
      accessToken: string;
    };

export const signUpAction = async (
  data: z.infer<typeof signUpFormSchema>
): Promise<SignUpActionResult> => {
  const res = await fetch(`${SERVER_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return {
    ...(await res.json()),
    success: res.ok,
  };
};

export const getCurrentUser = async (accessToken: string) => {
  try {
    const res = await fetch(`${SERVER_URL}/auth/sign-up`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      return undefined;
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
