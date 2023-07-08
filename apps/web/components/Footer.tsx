import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 py-12 border-b border-slate-100/50">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="text-base font-semibold uppercase text-item">
              about
            </h3>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="cursor-pointer hover:underline">About us</li>
              <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="text-base font-semibold uppercase text-item">
              legal
            </h3>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="cursor-pointer hover:underline">
                Terms of Service
              </li>
              <li className="cursor-pointer hover:underline">Privacy</li>
              <li className="cursor-pointer hover:underline">Pricing</li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="text-base font-semibold uppercase text-item">
              Get the app
            </h3>
            <ul className="flex flex-col gap-4 mt-5">
              <li className="cursor-pointer">
                <Image
                  alt="android"
                  src="/android-button.png"
                  height={40}
                  width={120}
                />
              </li>
              <li className="cursor-pointer">
                <Image
                  alt="ios"
                  src="/ios-button.png"
                  height={40}
                  width={120}
                />
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h3 className="text-base font-semibold uppercase text-item">
              Social Media
            </h3>
            <ul className="grid gap-4 mt-5 sm:grid-cols-2">
              <li className="flex items-center gap-2 cursor-pointer group">
                <Image
                  alt="facebook"
                  src="/facebook.png"
                  width={24}
                  height={24}
                />
                <span className="group-hover:underline">Facebook</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer group">
                <Image
                  alt="youtube"
                  src="/youtube.png"
                  width={24}
                  height={24}
                />
                <span className="group-hover:underline">Youtube</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer group">
                <Image
                  alt="twitter"
                  src="/twitter.png"
                  width={24}
                  height={24}
                />
                <span className="group-hover:underline">Twitter</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer group">
                <Image
                  alt="instagram"
                  src="/instagram.png"
                  width={24}
                  height={24}
                />
                <span className="group-hover:underline">Instagram</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer group">
                <Image
                  alt="linkedin"
                  src="/linkedin.png"
                  width={24}
                  height={24}
                />
                <span className="group-hover:underline">Linkedin</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 pb-12 sm:flex-row">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold uppercase"
          >
            <Image alt="logo" src="/lion-white.png" height={36} width={36} />
            ChenGym
          </Link>

          <div className="flex items-center justify-center gap-2">
            <span className="text-lg font-medium"> Made by King Chen with</span>
            <Image alt="heart" src="/heart.png" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
