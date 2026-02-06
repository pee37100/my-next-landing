import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-linear-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16 pb-8 lg:pt-20 lg:pb-0 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 text-xs lg:text-sm mb-4 lg:mb-6">
              <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
              เปิดให้บริการตั้งแต่ปี 2020
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-4 lg:mb-6">
              Smart Electronic Thailand
            </h1>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
              จำหน่ายอุปกรณ์เสริมสำหรับสมาร์ทโฟนครบวงจร เคสกันกระแทก ฟิล์มกระจก 
              สายชาร์จ Fast Charge หัวชาร์จ Power Bank หูฟัง และ Gadget ล้ำๆ 
              ที่คัดสรรมาแล้วว่าคุณภาพดี ใช้งานได้จริง
            </p>

            {/* CTA Button */}
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-base lg:text-lg font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              ช้อปเลย
            </Link>
          </div>

          {/* Right Content - Images */}
          <div className="flex-1 relative w-full">
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Image 1 */}
              <div className="bg-yellow-300 rounded-2xl p-4 h-40 lg:h-64 flex items-center justify-center">
                <div className="text-5xl lg:text-6xl">🎧</div>
              </div>
              {/* Image 2 */}
              <div className="bg-teal-200 rounded-2xl p-4 h-40 lg:h-64 flex items-center justify-center">
                <div className="text-5xl lg:text-6xl">📱</div>
              </div>
              {/* Image 3 */}
              <div className="col-span-2 bg-orange-100 rounded-2xl p-4 h-20 lg:h-32 flex items-center justify-center">
                <div className="text-2xl lg:text-4xl">⚡ Fast Charging ⚡</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}