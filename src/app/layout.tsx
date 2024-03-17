import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../bulma/global.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aladino borges: home",
  description: "personal software engineer and fullstack web developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} body`}>{children}</body>
    </html>
  );
}
