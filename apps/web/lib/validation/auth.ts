import { z } from "zod";

export const signUpFormSchema = z.object({
  username: z
    .string()
    .trim()
    .nonempty({ message: "Require" })
    .min(2, { message: "Username must be 2 or more characters long" })
    .toLowerCase(),
  email: z
    .string()
    .nonempty({ message: "Require" })
    .email()
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Require" })
    .min(8, { message: "Password must be 8 or more characters long" }),
  avatarUrl: z
    .string()
    .trim()
    .regex(/^(?:https?:\/\/)?(?:www\.)?[^\s.]+\.[^\s]{2,}$/i)
    .optional(),
});

export const signInFormSchema = z.object({
  emailOrUsername: z
    .string()
    .trim()
    .nonempty({ message: "Require" })
    .toLowerCase(),
  password: z.string().trim().nonempty({ message: "Require" }),
});

export type signUpFormType = z.infer<typeof signUpFormSchema>;
export type signInFormType = z.infer<typeof signInFormSchema>;
