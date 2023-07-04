import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="fixed z-40 w-full bg-black-1/20">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold uppercase text-primary"
        >
          <Image alt="logo" src="/lion-white.png" height={36} width={36} />
          ChenGym
        </Link>
        <div className="flex gap-2">
          <div className="cursor-pointer px-4 py-2 hover:text-primary">
            Register
          </div>
          <div className="cursor-pointer px-4 py-2 hover:text-primary">
            Sign In
          </div>
        </div>
      </div>
    </header>
  );
}
