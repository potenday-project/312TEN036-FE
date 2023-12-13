import type { Metadata } from "next";
import { ChakraLayout } from "@/app/ChakraLayout";
import QueryLayout from "./QueryLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
