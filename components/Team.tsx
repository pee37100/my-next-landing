const teamMembers = [
  {
    name: "คุณสมชาย ใจดี",
    role: "ผู้ก่อตั้ง & CEO",
    avatar: "👨‍💼",
  },
  {
    name: "คุณสมหญิง รักงาน",
    role: "ผู้จัดการฝ่ายขาย",
    avatar: "👩‍💼",
  },
  {
    name: "คุณสมศักดิ์ เทคโน",
    role: "ผู้เชี่ยวชาญด้านเทคนิค",
    avatar: "👨‍🔧",
  },
  {
    name: "คุณสมใจ บริการ",
    role: "ฝ่ายบริการลูกค้า",
    avatar: "👩‍💻",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ทีมงานของเรา
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            พบกับทีมงานมืออาชีพที่พร้อมให้บริการคุณ
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-7xl mb-4">{member.avatar}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}