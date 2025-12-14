import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaasPro - Modern SaaS Platform",
  description: "Streamline your workflow with our powerful SaaS solution",
  generator: "Mohamed Djoudir",
  openGraph: {
    title: "SaasPro - Modern SaaS Platform",
    description: "Streamline your workflow with our powerful SaaS solution",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "SaasPro",
      },
    ],
    type: "website",
    siteName: "SaasPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaasPro - Modern SaaS Platform",
    description: "Streamline your workflow with our powerful SaaS solution",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
