// import { Merriweather } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

// const merriweather = Merriweather({ subsets: ["latin"], variable: "--font-merriweather" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto-sans" });

export const metadata = {
  title: "MotoGearAI",
  description: "Find your dream motorcycle with AI-powered recommendations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.className} `}
      >
        <main className="min-h-screen">{children}</main>
        <footer className="bg-purple-500 py-12">
          <div className="container mx-auto px-4 text-center text-gray-500">
            Made with ❤️ and 🍵 using React, Next.js, TailwindCSS & Shadcn
          </div>
        </footer>
      </body>
    </html>
  );
}
