import { SignIn } from '@clerk/nextjs';

interface SignInPageProps {
  searchParams?: { redirect_url?: string };
}

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const redirectUrl = await searchParams?.redirect_url || '/dashboard';

  return (
    <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <SignIn path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl={redirectUrl} />
      </div>
    </div>
  );
}