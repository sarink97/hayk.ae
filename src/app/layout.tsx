import type { Metadata } from "next";
import "./globals.css";
import HomeNav from "@/components/atoms/HomeNav";
import Footer from "@/components/organism/Footer";

// export const metadata: Metadata = {
//   title: "Hayk",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HomeNav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
