"use server";

import { signInFormSchema, signUpFormSchema } from "@web/lib/validation/auth";
import { z } from "zod";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

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

  const resData = await res.json();

  if (res.ok) {
    cookies().set("access_token", resData.accessToken);
  }

  return {
    ...resData,
    success: res.ok,
  };
};

type SignInActionResult =
  | {
      success: false;
      filedErrors: {
        emailOrUsername?: string;
        password?: string;
      };
    }
  | {
      success: true;
      accessToken: string;
    };

export const signInAction = async (
  data: z.infer<typeof signInFormSchema>
): Promise<SignInActionResult> => {
  const res = await fetch(`${SERVER_URL}/auth/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await res.json();

  if (res.ok) {
    cookies().set("access_token", resData.accessToken);
    revalidatePath("/");
  }

  return {
    ...resData,
    success: res.ok,
  };
};

export const getCurrentUser = async (): Promise<User | undefined> => {
  try {
    const res = await fetch(`${SERVER_URL}/users/who-am-i`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies().get("access_token")?.value}`,
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

export const logOutAction = async () => {
  try {
    cookies().delete("access_token");
    revalidatePath("/");
  } catch (error) {}
};

export const loginByGoogle = async (
  accessTokenGoogle: string
): Promise<{ accessTokenChenGym: string } | undefined> => {
  try {
    const res = await fetch(`${SERVER_URL}/auth/google-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessTokenGoogle }),
    });

    const resData = await res.json();

    if (!res.ok) {
      return undefined;
    } else {
      const accessTokenChenGym = resData.accessToken;
      cookies().set("access_token", accessTokenChenGym);
      return { accessTokenChenGym };
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
