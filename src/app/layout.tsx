import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import 'intersection-observer';
import "./globals.css";
import GoogleAnalytics from "../lib/GoogleAnalytics";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stru – Professional AI for Civil Engineering",
  description: "Stru.ai is a platform for building 3d visualization models using gernerative AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC_ID} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
