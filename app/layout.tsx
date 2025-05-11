import "./globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";
import { UserNav } from "@/components/user-nav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Principles Problem Solver",
  description: "A structured approach to break down and solve complex problems",
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col min-h-screen "> 
            <header className="border-b">
              <div className="flex h-16 items-center px-4 md:px-8">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <UserNav />
                </div>
              </div>
            </header>
            <main className="flex bg-gray-50 justify-center items-center">{children}</main>
            <footer className="border-t py-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} First Principles Problem Solver. All
              rights reserved.
            </footer>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
