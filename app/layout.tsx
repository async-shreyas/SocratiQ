import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ClerkProvider } from "@clerk/nextjs";
import { ApiProvider } from "@/contexts/api-context";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SocratiQ - First Principles Problem Solver",
  description: "A structured approach to break down and solve complex problems using first principles thinking",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <ApiProvider>
              <div className="flex flex-col min-h-screen"> 
                <header className="border-b">
                  <div className="flex h-16 items-center px-4 md:px-8">
                    <MainNav />
                    <div className="ml-auto flex items-center space-x-4">
                      <UserNav />
                    </div>
                  </div>
                </header>
                <main className="flex-1 bg-gray-50">{children}</main>
                <footer className="border-t py-6 text-center text-sm text-gray-500">
                  © {new Date().getFullYear()} SocratiQ - First Principles Problem Solver. All
                  rights reserved.
                </footer>
              </div>
              <Toaster position="top-right" />
            </ApiProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}