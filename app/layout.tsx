import type { Metadata } from "next"
import { Noto_Sans_Thai } from "next/font/google"
import "./globals.css"

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-thai",
})

export const metadata: Metadata = {
  title: "Smart Electronic Thailand | อุปกรณ์เสริมสมาร์ทโฟน",
  description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนครบวงจร เคสกันกระแทก ฟิล์มกระจก สายชาร์จ Fast Charge หัวชาร์จ Power Bank หูฟัง",
  keywords: ["อุปกรณ์เสริมสมาร์ทโฟน", "เคสมือถือ", "ฟิล์มกระจก", "สายชาร์จ", "Power Bank"],
  openGraph: {
    title: "Smart Electronic Thailand",
    description: "อุปกรณ์เสริมสมาร์ทโฟนคุณภาพสูง",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body
        className={`${notoSansThai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}