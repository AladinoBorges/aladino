import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import '../bulma/global.css';

const bodyFont = Source_Serif_4({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'aladino borges: home',
  description: 'personal software engineer and fullstack web developer portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt'>
      <body className={`${bodyFont.className}`}>{children}</body>
    </html>
  );
}
