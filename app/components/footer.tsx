import Image from "next/image";
import logo from "../assets/images/logo.png";
import Link from "next/link";

export default function Footer() {
  const currentYaear = new Date().getFullYear();
  return (
    <footer className="bg-black dark:bg-gray-200 text-gray-100 dark:text-black py-4 mt-auto">
      <div className="container-xl lg:container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image
            width={32}
            height={32}
            priority
            src={logo}
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/properties">Properties</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
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
