"use client";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Mascot from "@/public/mascot.svg";
import Image from "next/image";
import { Loader } from "lucide-react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-20 2-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-4 flex items-center gap-x-3">
          <Image src={Mascot} height={40} width={40} alt="mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            LingoQuest
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
