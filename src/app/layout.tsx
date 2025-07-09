import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/utils/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sumit Sharma - Author, Educator & Life Coach",
  description: "Distinguished educator, life coach, and mentor with over 24 years of experience in academia and professional development. Author of the Kaushalendra series and Yogam.",
  keywords: ["educator", "life coach", "author", "Bhagavad Gita", "leadership", "mentorship", "BITS Pilani", "Kurukshetra University"],
  authors: [{ name: "Sumit Sharma" }],
  creator: "Sumit Sharma",
  openGraph: {
    title: "Sumit Sharma - Author, Educator & Life Coach",
    description: "Distinguished educator, life coach, and mentor with over 24 years of experience in academia and professional development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Sharma - Author, Educator & Life Coach",
    description: "Distinguished educator, life coach, and mentor with over 24 years of experience in academia and professional development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#e6e9f5] dark:from-[#0a0e1a] dark:via-[#1a2233] dark:to-[#232b3a] min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            {/* Sticky NavBar will be inserted here */}
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
