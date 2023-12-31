type AuthFormType = "signin" | "signup";

type User = {
  id: number;
  username: string;
  email: string;
  avatarUrl?: string;
};
