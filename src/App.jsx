import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Rides from './components/Rides'
import Eats from './components/Eats'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-950/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-xl tracking-tight">1bena</a>
          <nav className="hidden sm:flex items-center gap-6 text-indigo-100/90">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#rides" className="hover:text-white transition">Rides</a>
            <a href="#eats" className="hover:text-white transition">Eats</a>
            <a href="#apps" className="hover:text-white transition">Apps</a>
            <a href="/test" className="hover:text-white transition">Status</a>
          </nav>
          <a href="#apps" className="rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold">Download</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <Rides />
        <Eats />
        <CTA />
      </main>

      <footer className="py-10 text-center text-indigo-200/70 border-t border-white/10">
        <p>© {new Date().getFullYear()} 1bena — Built for The Gambia</p>
      </footer>
    </div>
  )
}

export default App
