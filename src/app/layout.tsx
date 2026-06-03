import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "International Day of Yoga 2026 | Akshar Yoga Kendraa",
  description:
    "Join the historic International Day of Yoga 2026 Celebration. Participate in an official online Guinness World Records attempt for Tratak Meditation.",
  openGraph: {
    title: "International Day of Yoga 2026 | Akshar Yoga Kendraa",
    description:
      "Join the historic International Day of Yoga 2026 Celebration. Participate in an official online Guinness World Records attempt for Tratak Meditation.",
    images: [
      "https://www.train.aksharyogaonline.com/hosted/images/24/76debdcbc84b78862afaa78d4b9080/og_image.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
