import { motion } from 'framer-motion'
import { Car, UtensilsCrossed, Package, ShieldCheck, Clock, Smartphone } from 'lucide-react'

const items = [
  {
    icon: Car,
    title: 'Taxi rides',
    desc: 'Safe, reliable rides with upfront pricing across Banjul, Serrekunda, and beyond.'
  },
  {
    icon: UtensilsCrossed,
    title: 'Food delivery',
    desc: 'From street eats to top restaurants — delivered hot and fresh.'
  },
  { icon: Package, title: 'Anything delivery', desc: 'Groceries, parcels, documents — we’ll pick up and drop off fast.' },
  { icon: ShieldCheck, title: 'Safety first', desc: 'Verified drivers, live GPS, and 24/7 support keep you protected.' },
  { icon: Clock, title: 'Real-time tracking', desc: 'Follow your ride or courier on the map with minute-by-minute ETA.' },
  { icon: Smartphone, title: 'One app, two services', desc: 'Switch between rides and deliveries with a single tap.' }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Everything in one place</h2>
          <p className="mt-3 text-indigo-100/80">Built for Gambia — optimized for speed, safety, and convenience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <item.icon className="w-8 h-8 text-indigo-400" />
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-indigo-100/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
