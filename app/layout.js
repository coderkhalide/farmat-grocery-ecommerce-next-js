import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import Header from "./Header";
import Footer from "./Footer";
import { MantainProvides } from "./mantainProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantainProvides>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </MantainProvides>
      </body>
    </html>
  );
}
