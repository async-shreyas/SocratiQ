import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MainNavProps {
  className?: string;
  [key: string]: any;
}

export function MainNav({ className, ...props }: MainNavProps) {
  return (
    <div className={cn("flex gap-6 md:gap-10", className)} {...props}>
      <Link href="/" className="flex items-center space-x-2">
        <span className="font-bold text-xl">SocratiQ</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Dashboard
        </Link>
        <Link
          href="/problems"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Problems
        </Link>
        <Link
          href="/methodology"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Methodology
        </Link>
        <Link
          href="/templates"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Templates
        </Link>
      </nav>
    </div>
  );
}