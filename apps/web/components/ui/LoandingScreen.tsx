'use client'

import React from "react";
import { store } from "@web/store";
import { useAppSelector } from "@web/store/hook";
import { selectLoadingScreen } from "@web/store/loading-screen.slice";

type Props = {};

export default function LoadingScreen({}: Props) {
  const display = useAppSelector(selectLoadingScreen).display;

  if (!display) {
    return;
  }



  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      <div className="w-16 h-16 loading loading-spinner text-primary"></div>
    </div>
  );
}
