import { SignUp } from '@clerk/nextjs';

interface SignUpPageProps {
  searchParams?: { redirect_url?: string };
}

export default function SignUpPage({ searchParams }: SignUpPageProps) {
  const redirectUrl = searchParams?.redirect_url || '/dashboard';
  
  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <SignUp path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl={redirectUrl} />
      </div>
    </div>
  );
}