import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "../components/services/AuthProvider";
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "car Doctor Pro",
  description: "car repairing workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
       <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-100 text-black`}>
          <ToastContainer/> 
             <AuthProvider>
                <NavBar/>
                 {children}
                <Footer/>
             </AuthProvider>
       </body>
    </html>
  );
}
