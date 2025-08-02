// src/components/Layout/Layout.jsx
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ children, showHero = false }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      {showHero && <Hero />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
