import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Nav from "./_components/nav";

export const metadata: Metadata = {
  title: "Hi, I am Dhruv Mishra",
  description: "My UX/UI Journey",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Nav/>
      </body>
    </html>
  );
}
