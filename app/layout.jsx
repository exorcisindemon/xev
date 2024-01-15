import { DM_Sans } from "next/font/google";
import "./globals.css";

const { default: Navbar } = require("../components/navbar");

const font = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Introducing, XEV – Your Web & Components Crafter!",
  description: "@exorcisindemon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <nav className="flex flex-col-reverse lg:flex-col lg:fixed z-10 w-full">
          <Navbar />
        </nav>
        {children}
      </body>
    </html>
  );
}
