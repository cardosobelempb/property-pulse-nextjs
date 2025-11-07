"use client";

import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYaear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="bg-gray-100 dark:bg-gray-80000 text-gray-800 dark:text-white py-4 mt-auto">
      <div className="container-xl lg:container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Link href="/">
            <Image
              width={32}
              height={32}
              priority
              src={logo}
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link
                className={`${
                  pathname === "/" ? "bg-black text-white" : ""
                } px-3 py-2 rounded-md text-gray-800 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-800`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/properties" ? "bg-black text-white" : ""
                } px-3 py-2 rounded-md text-gray-800 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-800`}
                href="/properties"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/terms"
                    ? "bg-black text-white hover:bg-gray-700 dark:hover:bg-gray-100 hover:text-black hover:dark:text-white"
                    : ""
                } px-3 py-2 rounded-md text-gray-800 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-800`}
                href="/terms"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {currentYaear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
