"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    <div className="h-7 w-7"></div>;
  }

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        onChange={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        type="checkbox"
        checked={theme === "light"}
      />

      {/* sun icon */}
      <Image
        className="fill-current swap-on"
        alt="sun"
        src="/sun.png"
        width={28}
        height={28}
      />

      {/* moon icon */}
      <Image
        className="fill-current swap-off"
        alt="sun"
        src="/moon.png"
        width={28}
        height={28}
      />
    </label>
  );
}
