"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type Props = {
  lightImg: string;
  darkImg: string;
  className?: string;
};

export default function FeatureImage({ lightImg, darkImg, className }: Props) {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={clsx("col-span-6 hidden items-center md:flex", className)}>
      <div className="relative aspect-[2/1] h-3/4 max-w-full">
        
      </div>
    </div>
    )
  }

  return (
    <div className={clsx("col-span-6 hidden items-center md:flex", className)}>
      <div className="relative aspect-[2/1] h-3/4 max-w-full">
        <Image
          alt="feature"
          src={theme === "light" ? lightImg : darkImg}
          fill
        />
      </div>
    </div>
  );
}
