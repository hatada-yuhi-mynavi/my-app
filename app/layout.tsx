"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="bg-gradient-to-br from-sky-100 to-blue-500">
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
