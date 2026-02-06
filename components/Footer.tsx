import Link from "next/link"

const productLinks = [
  { name: "หน้าแรก", href: "#home" },
  { name: "สินค้าทั้งหมด", href: "#" },
  { name: "โปรโมชั่น", href: "#" },
  { name: "วิธีสั่งซื้อ", href: "#" },
]

const infoLinks = [
  { name: "เกี่ยวกับเรา", href: "#about" },
  { name: "นโยบายคืน/เปลี่ยนสินค้า", href: "#" },
  { name: "บทความ", href: "#blog" },
  { name: "ติดต่อเรา", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">MyBizApp</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ร้านอุปกรณ์เสริมสมาร์ทโฟนครบวงจร สินค้าของแท้ 100% รับประกันสินค้าทุกชิ้น
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-gray-600 dark:text-gray-300">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-gray-600 dark:text-gray-300">
                <span>𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-gray-600 dark:text-gray-300">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">สินค้า</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">ข้อมูล</h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">ติดต่อเรา</h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Line Official</span>
                <br />
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">@SmartElecTH</a>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Email Support</span>
                <br />
                <a href="mailto:support@smartelectronic.co.th" className="text-blue-600 dark:text-blue-400 hover:underline">
                  support@smartelectronic.co.th
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">ภาษาอังกฤษ</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">นโยบายความเป็นส่วนตัว</a>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">ข้อตกลงการให้บริการ</a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2026 Smart Electronic Thailand. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}