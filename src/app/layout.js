import { Inter } from "next/font/google";
import "./ui/globals.css";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finnsheep",
  description: "Finnsheep project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.classNam}>{children}<Toaster /></body>
    </html>
  );
}
