import type { Metadata } from "next";
import { rubik } from "./fonts";
import "./globals.css";



export const metadata: Metadata = {
  title: "Bookmark app",
  description: "An app to create bookmarks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
