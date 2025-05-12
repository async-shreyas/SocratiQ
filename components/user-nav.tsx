import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

interface UserNavProps {
  className?: string;
}

export function UserNav({ className }: UserNavProps) {
  return (
    <div className={className}>
      <SignedOut>
        <div className="flex items-center gap-4">
          <SignInButton>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size="sm">
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
  );
}