import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Refugees Helping Refugees - Empowering Community Through Support",
  description:
    "RHR serves refugees of Western New York, fostering growth, self-determination, and self-reliance through ESOL classes, case management, and community programs.",
  generator: "RHR",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RHR%20Favicon-LurdBRfSJdurkcqURuh6SIno9QXnwZ.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
