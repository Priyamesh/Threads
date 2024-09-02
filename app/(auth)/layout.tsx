import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "Threads is a thread creation tool for developers",
};

const inter = Inter({ subsets: ["latin"] });

// function Header() {
//   return (
//     <header
//       style={{ display: "flex", justifyContent: "space-between", padding: 20 }}
//     >
//       <h1 className="text-white">Threads</h1>
//       <SignedIn>
//         {/* Mount the UserButton component */}
//         <UserButton />
//       </SignedIn>
//       <SignedOut>
//         {/* Signed out users get sign in button */}
//         <SignInButton />
//       </SignedOut>
//     </header>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {/* <Header /> */}
          {/* <UserButton /> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
