import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://nyantan-money.vercel.app"
  ),
  title: {
    default: "にゃんたと学ぶお金のヒミツ",
    template: "%s | にゃんたと学ぶお金のヒミツ",
  },
  description:
    "子供が楽しくお金の知識を学べる教育アニメ「にゃんたと学ぶお金のヒミツ」の公式サイト。YouTube動画・エピソード・キャラクター紹介など。",
  keywords: ["子供", "お金", "教育", "アニメ", "にゃんた", "学習"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "にゃんたと学ぶお金のヒミツ",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col polka-bg">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
