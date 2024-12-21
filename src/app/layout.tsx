import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

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
        <div className="mx-auto w-11/12 md:w-2/3 mb-20 p-8">
          <Header />
          <main className="flex flex-col gap-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
