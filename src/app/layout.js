import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "@/components/theme-provider"
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Homez - Web App",
  description:
    " An intuitive and feature-rich platform that streamlines the home buying, selling, and renting process, making it easier for users to achieve their real estate goals.",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
    shortcut: "/logo.jpg",
  },
  openGraph: {
    title: "Homez - Web App",
    description:
      "A comprehensive real estate platform where users can search, explore, and discover properties that match their needs and preferences. Beautiful, fast, and responsive Real Estate web app built with Next.js.",
    url: "https://a0.muscache.com/im/pictures/43518019/ead2dbb7_original.jpg?aki_policy=x_large", // update with your actual URL
    siteName: "Homez",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/43518019/ead2dbb7_original.jpg?aki_policy=x_large", // change this to your OG image URL
        width: 1200,
        height: 630,
        alt: "Homez Web App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homez - Web App",
    description:
      "Explore detailed Real Estate info with a modern, responsive web app powered by PokéAPI and Next.js.",
    images: ["https://a0.muscache.com/im/pictures/43518019/ead2dbb7_original.jpg?aki_policy=x_large"], // same image as above
    creator: "@yourhandle", // optional
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarComponent />
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
