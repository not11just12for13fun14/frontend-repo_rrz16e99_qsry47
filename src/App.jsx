import Hero from './components/Hero'
import Features from './components/Features'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Rides from './components/Rides'
import Eats from './components/Eats'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top ribbon linking to main site */}
      <div className="relative z-50 bg-gradient-to-r from-red-600 via-blue-700 to-green-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="opacity-90">Proudly built in The Gambia — connecting people and businesses across Africa</span>
          <a href="https://1bena.com/" target="_blank" rel="noreferrer" className="font-semibold underline decoration-white/40 hover:decoration-white">Visit 1bena.com</a>
        </div>
      </div>

      <header className="sticky top-0 inset-x-0 z-40 backdrop-blur bg-slate-950/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="https://1bena.com/" target="_blank" rel="noreferrer" className="text-white font-bold text-xl tracking-tight flex items-center gap-2">
            <span className="inline-flex h-6 w-6 rounded bg-gradient-to-br from-red-600 via-blue-700 to-green-600" />
            1bena
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-indigo-100/90">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#rides" className="hover:text-white transition">Rides</a>
            <a href="#eats" className="hover:text-white transition">Eats</a>
            <a href="#apps" className="hover:text-white transition">Apps</a>
            <a href="/test" className="hover:text-white transition">Status</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://1bena.com/" target="_blank" rel="noreferrer" className="hidden sm:inline rounded-lg border border-white/15 text-white px-4 py-2 font-medium hover:bg-white/10 transition">1bena.com</a>
            <a href="#apps" className="rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold">Download</a>
          </div>
        </div>
      </header>

      <main className="pt-0">
        <Hero />
        <Stats />
        <Features />
        <Rides />
        <Eats />
        <CTA />
      </main>

      <footer className="py-10 text-center text-indigo-200/70 border-t border-white/10">
        <p>© {new Date().getFullYear()} 1bena — Built for The Gambia • <a className="underline hover:text-white" href="https://1bena.com/" target="_blank" rel="noreferrer">1bena.com</a></p>
      </footer>
    </div>
  )
}

export default App
