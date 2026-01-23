import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/header";
import Nav from "./_components/nav";
import BackgroundAnimation from "./utils/background-animation";
import ConditionalFooter from "./_components/conditional-footer";

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
      <body suppressHydrationWarning={true}>
        <BackgroundAnimation>
          <Header />
          {children}
          <ConditionalFooter />
          <Nav />
        </BackgroundAnimation>
      </body>
    </html>
  );
}
