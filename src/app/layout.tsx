import type { Metadata } from "next";
import { ChakraLayout } from "@/app/ChakraLayout";
import QueryLayout from "./QueryLayout";
import OGImg from "../../utils/img/OGImg.jpg";

export const metadata: Metadata = {
  // metadataBase: new URL("https://www.choeaein.click/"),
  title: "식선생",
  description: "당신의 식단 관리 서비스",
  openGraph: {
    title: "식선생",
    description: "당신의 식단 관리 서비스",
    // url: "https://www.choeaein.click/",
    siteName: "foodteacher",
    images: [
      {
        url: "../../utils/img/OGImg.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "../../utils/img/OGImg.jpg",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" style={{ height: "100%" }} suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <QueryLayout>
          <ChakraLayout>{children}</ChakraLayout>
        </QueryLayout>
      </body>
    </html>
  );
}
