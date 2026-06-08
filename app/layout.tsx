import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import PageLoader from "@/components/layout/PageLoader";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX Consulting — We Build. We Transform. We Lead.",
  description:
    "Global management consulting firm partnering with the world's most ambitious organizations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        <CustomCursor />
        <PageLoader />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
