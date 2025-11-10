import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TechNavbar from "@/layout/navBar";
import Footer from "@/layout/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Topaz Technology",
  description: "Innovative technology solutions and services.",
   icons: {
    icon: '/images/1.png',sizes: '32x32',
   }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <TechNavbar />
        {children}
         <Footer />
      </body>
     
    </html>
  );
}
