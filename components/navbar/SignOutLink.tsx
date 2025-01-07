"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logout successful" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Sign out
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
