import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog Post",
  description: "Pet project for work with files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
