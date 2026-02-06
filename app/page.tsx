import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import Team from "@/components/Team"
import Testimonial from "@/components/Testimonial"
import Blog from "@/components/Blog"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
// app/page.tsx
import { Metadata } from "next"
import JsonLd from "@/components/JsonLd"
import ScrollToTop from "@/components/ScrollToTop"


export const metadata: Metadata = {
  title: "Smart Electronic Thailand | อุปกรณ์เสริมสมาร์ทโฟนครบวงจร",
  description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนคุณภาพสูง เคสกันกระแทก ฟิล์มกระจก สายชาร์จ Fast Charge Power Bank หูฟัง ส่งไว บริการหลังการขายดีเยี่ยม",
  keywords: ["อุปกรณ์เสริมสมาร์ทโฟน", "เคสมือถือ", "ฟิล์มกระจก", "สายชาร์จ", "Power Bank", "หูฟังไร้สาย", "ร้านขายอุปกรณ์มือถือ"],
  authors: [{ name: "Smart Electronic Thailand" }],
  creator: "Smart Electronic Thailand",
  publisher: "Smart Electronic Thailand",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://smartelectronic.co.th",
  },
  openGraph: {
    title: "Smart Electronic Thailand | อุปกรณ์เสริมสมาร์ทโฟน",
    description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนคุณภาพสูง ส่งไว บริการดีเยี่ยม",
    url: "https://smartelectronic.co.th",
    siteName: "Smart Electronic Thailand",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "https://medium.com/@ijazahmadvti/importance-of-mobile-phone-in-our-daily-life-804d95be82b2",
        width: 1200,
        height: 630,
        alt: "Smart Electronic Thailand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Electronic Thailand | อุปกรณ์เสริมสมาร์ทโฟน",
    description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนคุณภาพสูง",
    images: ["https://medium.com/@ijazahmadvti/importance-of-mobile-phone-in-our-daily-life-804d95be82b2"],
  },
}
export default function Home() {
  return (
    <main>
      <JsonLd />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonial />
      <Blog />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  )
}