import { links } from "@/utils/links";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideAlignLeft } from "lucide-react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import SignOutLink from "./SignOutLink";
import UserIcon from "./UserIcon";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

function LinksDropdown() {
  const { userId } = auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="p-2 flex items-center justify-center"
        >
          <LucideAlignLeft className="h-6 w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <DropdownMenuGroup>
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Sign up</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.label}>
                  <Link href={link.href} className="capitalize w-full">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </SignedIn>
        </DropdownMenuGroup>
        {userId && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
