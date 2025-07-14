"use client";

import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useAuth();
  return (
    <div className="bg-white shadow-md">
      <header className="flex h-16 w-full items-center px-4 md:px-6">
        {/* Mobile Menu Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-600 hover:text-green-600 transition-colors"
            >
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-64 p-6">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <SheetTitle className="text-2xl font-bold text-green-600">
                WasteChain
              </SheetTitle>
            </Link>
            <div className="grid gap-4">
              <Link
                href="/"
                className="flex w-full items-center py-2 text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
              >
                Home
              </Link>
              {!isSignedIn && (
                <>
                  <Link
                    href="/sign-in"
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="flex w-full items-center py-2 text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:flex items-center space-x-2 mr-6">
          <span className="text-2xl font-bold text-green-600">WasteChain</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
          >
            Home
          </Link>
          {!isSignedIn && (
            <>
              <Link
                href="/sign-in"
                className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                className="text-lg font-semibold text-gray-700 hover:text-green-600 transition-colors"
              >
                Register
              </Link>
            </>
          )}
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-8 w-8",
                userButtonPopoverCard: "bg-white shadow-md",
              },
            }}
          />
        </nav>
      </header>
    </div>
  );
}
