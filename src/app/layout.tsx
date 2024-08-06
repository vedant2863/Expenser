
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Globalprovider from "@/components/globalprovider";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Expensr",
  description: "Financial Management",
  icons: {
    icon: "/logo.png",
}
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Globalprovider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.variable} font-sans h-screen w-screen`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </Globalprovider>
  )
}