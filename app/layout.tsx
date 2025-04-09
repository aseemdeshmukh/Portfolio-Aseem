import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Import Lexend font from Google Fonts
const lexend = localFont({
  src: [
    {
      path: "../public/fonts/Lexend-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Lexend-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Lexend-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lexend",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Aseem Deshmukh | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Aseem Deshmukh, Full Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${fontSans.variable} ${lexend.variable} font-lexend bg-white`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
