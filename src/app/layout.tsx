import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yusuf Abdelfattah",
  description: "Personal Portfolio of Yusuf Abdelfattah",
  icons: {
    icon: [
      {
        url: '/bee-hive.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark scroll-smooth overflow-x-hidden'>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
