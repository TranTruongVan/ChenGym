import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AuthForm,
  SignInBtn,
  SignOutBtn,
  SignUpBtn,
  SignedIn,
  SignedOut,
  ThemeToggle,
} from "..";

type Props = {};

export default async function Header({}: Props) {
  return (
    <header className="sticky top-0 z-40 w-full shadow-xl bg-muted text-foreground">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold uppercase text-primary"
        >
          <Image alt="logo" src="/lion-white.png" height={36} width={36} />
          ChenGym
        </Link>

        <div className="flex items-center gap-2">
          <SignedOut>
            <AuthForm />

            <SignUpBtn>
              <div className="px-4 py-2 text-lg cursor-pointer hover:text-primary">
                Register
              </div>
            </SignUpBtn>

            <SignInBtn>
              <div className="px-4 py-2 text-lg cursor-pointer hover:text-primary">
                Sign In
              </div>
            </SignInBtn>
          </SignedOut>

          <SignedIn>
            <SignOutBtn />
          </SignedIn>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
