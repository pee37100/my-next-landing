"use client"

import { useState } from "react"

const testimonials = [
  {
    name: "คุณวิชัย",
    role: "ลูกค้าประจำ",
    avatar: "👨",
    content: "สินค้าคุณภาพดีมาก ส่งไวมาก ประทับใจในการบริการครับ",
    rating: 5,
  },
  {
    name: "คุณนภา",
    role: "ลูกค้าใหม่",
    avatar: "👩",
    content: "เคสสวยมากค่ะ ป้องกันการกระแทกได้ดี คุ้มค่ามาก",
    rating: 5,
  },
  {
    name: "คุณธนา",
    role: "ลูกค้าประจำ",
    avatar: "👨",
    content: "ซื้อสายชาร์จมา ใช้งานได้ดีมาก ชาร์จเร็วจริงๆ",
    rating: 4,
  },
]

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonial" className="py-20 bg-blue-600 dark:bg-blue-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            รีวิวจากลูกค้า
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            ความคิดเห็นจากลูกค้าที่ใช้บริการของเรา
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center">
            {/* Avatar */}
            <div className="text-6xl mb-4">
              {testimonials[activeIndex].avatar}
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl ${i < testimonials[activeIndex].rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Content */}
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            {/* Author */}
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonials[activeIndex].name}
            </h4>
            <p className="text-blue-600 dark:text-blue-400">{testimonials[activeIndex].role}</p>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}