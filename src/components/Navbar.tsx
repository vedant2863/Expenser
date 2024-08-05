"use client";

import { navbarLinks } from "@/lib/constants";
import {
  useSession,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "react-day-picker";
import Logo from "./logo";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to close sidebar when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const { isLoaded, session, isSignedIn } = useSession();

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="shadow-md transition duration-300 ease-in-out w-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                type="button"
                className="sm:hidden text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md mr-4"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                )}
              </button>
              <Logo />
              <div className="hidden sm:block ml-4 space-x-8 mx-5">
                {isSignedIn && (
                  <div className="flex items-baseline">
                    {navbarLinks.map((item) => {
                      const isActive =
                        pathname === item.link ||
                        pathname.startsWith(`${item.link}/`);
                      return (
                        <Link
                          key={item.label}
                          href={item.link}
                          passHref
                          className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-black dark:text-white hover:bg-blue-300 hover:text-blue-900"
                          }`}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between gap-x-4">
              <ModeToggle />
              <div className="flex items-center gap-x-4">
                <SignedOut>
                  <Button>
                    <SignInButton />
                  </Button>
                  <Button>
                    <SignUpButton />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`sm:hidden fixed inset-y-0 left-0 transform transition-transform duration-300 bg-white dark:bg-gray-800 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
          id="mobile-menu"
        >
          <div className="shadow-lg h-full w-60 p-4 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-auto"
                width={50}
                height={50}
              />
              {/* <Logo /> */}
              <button
                type="button"
                className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-4 space-y-4">
              {navbarLinks.map((item) => {
                const isActive =
                  pathname === item.link ||
                  pathname.startsWith(`${item.link}/`);
                return (
                  <Link
                    key={item.label}
                    href={item.link}
                    passHref
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-black dark:text-white hover:bg-blue-100 hover:text-blue-500"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-x-4">
                <SignedOut>
                  <Button>
                    <SignInButton />
                  </Button>
                  <Button>
                    <SignUpButton />
                  </Button>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
