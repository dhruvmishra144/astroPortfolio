import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Nav from "./_components/nav";
import BackgroundAnimation from "./utils/background-animation";

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
        <BackgroundAnimation>
          <Header />
          {children}
          <Footer />
          <Nav />
        </BackgroundAnimation>
      </body>
    </html>
  );
}
