import Layout from "@/components/Layout";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ultra Entrepreneurship Club - Build Your First club",
  description:
    "Join Ultra Entrepreneurship Club and build your first club with expert mentorship, real founder connections, and hands-on curriculum.",
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
