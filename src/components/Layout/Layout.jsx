import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

export default function Layout({ showHero, children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      {showHero && <Hero />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}