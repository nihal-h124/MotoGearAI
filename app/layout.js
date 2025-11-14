// import { Merriweather } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

// const merriweather = Merriweather({ subsets: ["latin"], variable: "--font-merriweather" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });

export const metadata = {
  title: "AI-MotoGear",
  description: "Find your dream motorcycle with AI-powered recommendations.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${notoSans.className} `}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 py-12">
          <div className="container mx-auto px-4 text-center text-gray-500">
            Made with ❤️ and 🍵 using React, Next.js, TailwindCSS & Shadcn
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
