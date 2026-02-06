import { Metadata } from "next"

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา | Smart Electronic Thailand",
  description: "จำหน่ายอุปกรณ์เสริมสมาร์ทโฟนครบวงจร สินค้าคุณภาพ ราคาถูก ส่งไว",
  alternates: {
    canonical: "https://smartelectronic.co.th",
  },
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1">
            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-2">Smart Electronic Thailand</h3>
              <p className="opacity-90">ผู้นำด้านอุปกรณ์เสริมสมาร์ทโฟนในประเทศไทย</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              เกี่ยวกับเรา
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Smart Electronic Thailand ก่อตั้งขึ้นในปี 2020 ด้วยความมุ่งมั่นที่จะเป็นผู้นำ
              ด้านการจำหน่ายอุปกรณ์เสริมสมาร์ทโฟนคุณภาพสูงในประเทศไทย
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              เราคัดสรรสินค้าจากแบรนด์ชั้นนำทั่วโลก พร้อมทีมงานผู้เชี่ยวชาญที่พร้อม
              ให้คำปรึกษาและบริการหลังการขายที่ประทับใจ
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">ปีประสบการณ์</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">ลูกค้าที่พอใจ</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">สินค้าคุณภาพ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}