import React from 'react'
import Hero from '../components/Layout/Hero'
import FlowSection from '../components/Home/FlowSection'
import TestimonialSection from '../components/Home/TestimonialSection'
import RecommendationSection from '../components/Home/RecommendationSection'

export default function Home() {
  return (
    <div>
      {/* 全螢幕 Hero */}
      <Hero />

      {/* 使用流程區塊 */}
      <FlowSection />

      {/* 使用者見證區塊 */}
      <TestimonialSection />

      {/* 熱門推薦區塊 */}
      <RecommendationSection />
    </div>
  )
}
