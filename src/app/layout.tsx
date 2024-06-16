import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/HeaderUI";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iTIL",
  description:
    "SNS for software engineers to share their TIL knowledge among same experience levels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="max-w-2xl min-w-72 margin-auto">{children}</div>
      </body>
    </html>
  );
}
