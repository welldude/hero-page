"use client";
import { useState } from "react";
import Link from "next/link";
import SideMenu from "./side-menu";

export default function Header() {
  const [sideActive, setSideActive] = useState(false);
  const handleSideActive = () => {
    setSideActive(!sideActive);
    document.querySelector("body").style.overflow = "hidden";
  };
  return (
    <header class="fixed top-0 px-5 xl:px-5 2xl-px-5 2xl:px-36 w-screen h-20 z-40 flex justify-center items-center border-b backdrop-blur">
      <SideMenu sideActive={sideActive} setSideActive={setSideActive} />
      <div class="container flex flex-row justify-between items-center mx-auto py-5">
        <div
          onClick={handleSideActive}
          class="cursor-pointer xl:hidden flex flex-col space-y-1"
        >
          <div class="w-5 h-0.5 bg-black dark:bg-white"></div>
          <div class="w-5 h-0.5 bg-black dark:bg-white"></div>
          <div class="w-5 h-0.5 bg-black dark:bg-white"></div>
        </div>
        <div class="hidden xl:flex flex-grow">
          <nav>
            <ul class="flex flex-row space-x-14 px-16 items-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex-none">
          <div class="mr-4 border bg-background border-primary rounded text-primary text-sm px-4 py-2 bg-transparent cursor-pointer">
            Log in
          </div>
        </div>
      </div>
    </header>
  );
}
