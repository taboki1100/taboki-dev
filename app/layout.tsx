import "@fontsource/zen-kaku-gothic-new/400.css";
import "@fontsource/zen-kaku-gothic-new/700.css";
import "@fontsource/dela-gothic-one/400.css";
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: site.title,
  description: site.description,
  openGraph: { title: site.title, description: site.description, type: "website", locale: "ja_JP" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
