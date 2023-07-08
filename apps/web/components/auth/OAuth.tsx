import Image from "next/image";
import React from "react";

type Props = {};

export default function OAuth({}: Props) {
  return (
    <div className="flex flex-col gap-2 my-6">
      <button className="flex items-center justify-between w-full gap-2 px-5 py-2 border group btn border-muted bg-card hover:bg-card">
        <div className="flex items-center gap-2">
          <Image alt="facebook" src="/facebook.svg" width={16} height={16} />
          <span className="text-sm normal-case text-foreground">
            Continue with Facebook
          </span>
        </div>

        <Image
          alt="arrow-right"
          src="/arrow-right.svg"
          width={16}
          height={16}
          className="transition-all -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:invert dark:filter"
        />
      </button>
      <button className="flex items-center justify-between w-full gap-2 px-5 py-2 border group btn border-muted bg-card hover:bg-card">
        <div className="flex items-center gap-2">
          <Image alt="google" src="/google.svg" width={16} height={16} />
          <span className="text-sm normal-case text-foreground">
            Continue with Google
          </span>
        </div>

        <Image
          alt="arrow-right"
          src="/arrow-right.svg"
          width={16}
          height={16}
          className="transition-all -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 dark:invert dark:filter"
        />
      </button>
    </div>
  );
}
