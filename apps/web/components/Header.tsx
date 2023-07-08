import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AuthForm, SignInBtn, SignUpBtn } from ".";
import Providers from "./Providers";
import ThemeToggle from "./ThemeToggle";

type Props = {};

export default async function Header({}: Props) {
  return (
    <header className="fixed z-40 w-full text-primary-foreground bg-black/20">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold uppercase text-primary"
        >
          <Image alt="logo" src="/lion-white.png" height={36} width={36} />
          ChenGym
        </Link>

        <div className="flex items-center gap-2">
          <Providers>
            <AuthForm />
          </Providers>

          <SignUpBtn>
            <div className="px-4 py-2 cursor-pointer hover:text-primary">
              Register
            </div>
          </SignUpBtn>

          <SignInBtn>
            <div className="px-4 py-2 cursor-pointer hover:text-primary">
              Sign In
            </div>
          </SignInBtn>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
