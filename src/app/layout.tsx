import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalyst",
  description: "Join the Bold. Build What's Next.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
