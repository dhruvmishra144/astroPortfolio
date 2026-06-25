import type { Metadata } from "next";
import "./globals.scss";
import Header from "./_components/header";
import Nav from "./_components/nav";
import BackgroundAnimation from "./utils/background-animation";
import ConditionalFooter from "./_components/conditional-footer";
import CustomCursor from "./_components/custom-cursor";

export const metadata: Metadata = {
  title: {
    default: "Dhruv Mishra | UX/UI Designer",
    template: "%s | Dhruv Mishra",
  },
  description: "Product design and front-end aligned UX systems for scalable digital products.",
  keywords: ["UX/UI design", "product design", "design systems", "front-end development"],
  authors: [{ name: "Dhruv Mishra" }],
  creator: "Dhruv Mishra",
  publisher: "Dhruv Mishra",
  icons: {
    icon: '/icon.png',
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-background text-foreground antialiased">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <CustomCursor />
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
