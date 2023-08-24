import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.js Version 13",
  description: "Web development",
  keywords: "Next.js, NextJS, Next.js Version 13, NextJS Version 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
