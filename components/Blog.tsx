import Link from "next/link"

const blogPosts = [
  {
    title: "วิธีเลือกเคสมือถือให้เหมาะกับสไตล์คุณ",
    excerpt: "เคสมือถือมีหลายแบบ มาดูกันว่าแบบไหนเหมาะกับคุณ...",
    date: "5 ก.พ. 2026",
    category: "Tips",
    emoji: "📱",
  },
  {
    title: "Fast Charge คืออะไร? ปลอดภัยไหม?",
    excerpt: "ทำความเข้าใจเทคโนโลยี Fast Charge และข้อควรระวัง...",
    date: "3 ก.พ. 2026",
    category: "เทคโนโลยี",
    emoji: "⚡",
  },
  {
    title: "รีวิว Power Bank 10 รุ่นยอดนิยมปี 2026",
    excerpt: "มาดู Power Bank รุ่นไหนน่าซื้อที่สุดในปีนี้...",
    date: "1 ก.พ. 2026",
    category: "รีวิว",
    emoji: "🔋",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            บทความล่าสุด
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ติดตามข่าวสาร เทคนิค และรีวิวสินค้าจากเรา
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                <span className="text-6xl">{post.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
          >
            ดูบทความทั้งหมด
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}