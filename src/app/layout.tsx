import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'



export const metadata: Metadata = {
  title: "Travel",
  description: "Travel for camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main className="position overflow-hidden">

        {children}
      </main>
        <Footer/>
      
      </body>
    </html>
  );
}
