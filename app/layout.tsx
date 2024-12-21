import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HomeLayout } from "../layouts/home";
import { Player } from "@/components/base/player";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "pb-12")}>
        <HomeLayout>{children}</HomeLayout>
        <Player />
      </body>
    </html>
  );
}
