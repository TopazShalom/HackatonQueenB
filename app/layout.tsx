import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./comp/Navbar";
import UserDetails from "./map/UserDetails";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmpowHer",
  description: "Group 9 Hackathon Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className ="content">
        <UserDetails />
        {children}
        <Navbar />
          </div>
      </body>
    </html>
  );
}
