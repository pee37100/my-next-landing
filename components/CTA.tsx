import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          พร้อมที่จะอัพเกรดอุปกรณ์ของคุณแล้วหรือยัง?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          ติดต่อเราวันนี้เพื่อรับส่วนลดพิเศษ หรือสอบถามข้อมูลเพิ่มเติม
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors text-lg font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          ติดต่อขอราคาส่ง
        </Link>
      </div>
    </section>
  )
}