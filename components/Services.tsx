const services = [
  {
    icon: "📱",
    title: "เคสกันกระแทก",
    description: "เคสคุณภาพสูง ป้องกันการกระแทกได้ดีเยี่ยม รองรับทุกรุ่น",
  },
  {
    icon: "🔌",
    title: "สายชาร์จ & หัวชาร์จ",
    description: "สายชาร์จ Fast Charge หัวชาร์จคุณภาพสูง ชาร์จเร็ว ทนทาน",
  },
  {
    icon: "🔋",
    title: "Power Bank",
    description: "แบตสำรองความจุสูง พกพาสะดวก ชาร์จได้หลายครั้ง",
  },
  {
    icon: "🎧",
    title: "หูฟัง & ลำโพง",
    description: "หูฟังไร้สาย ลำโพงบลูทูธ เสียงดี คุณภาพระดับพรีเมียม",
  },
  {
    icon: "🛡️",
    title: "ฟิล์มกระจก",
    description: "ฟิล์มกระจกนิรภัย ป้องกันรอยขีดข่วน ติดง่าย ไม่เป็นฟองอากาศ",
  },
  {
    icon: "⌚",
    title: "Gadget & อุปกรณ์เสริม",
    description: "อุปกรณ์เสริมล้ำสมัย Smart Watch ขาตั้งมือถือ และอื่นๆ",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            บริการของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            เราคัดสรรสินค้าคุณภาพดีจากแบรนด์ชั้นนำ พร้อมบริการหลังการขายที่ประทับใจ
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}