import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/utils/ThemeProvider";
import ThemeProvider from "@/components/utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sumit Sharma",
  description: "Teacher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
