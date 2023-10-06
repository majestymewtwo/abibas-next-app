import Categories from "./components/categories";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "abibas official website | Sportswear",
  description: "A sports merchandise website",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/adidas.png' sizes='any' />
      </head>
      <body className='{inter.className} relative'>
        <div className='bg-black'>
          <Header />
          <Navbar />
        </div>
        {children}
        <Categories />
        <Footer />
      </body>
    </html>
  );
}
