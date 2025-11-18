import { motion } from 'framer-motion'
import { UtensilsCrossed, ShoppingBasket, Clock, MapPin } from 'lucide-react'

const steps = [
  { icon: ShoppingBasket, title: 'Browse top spots', desc: 'Local favourites and national brands, all in one place.' },
  { icon: UtensilsCrossed, title: 'Customize & order', desc: 'Special instructions, add‑ons, and repeat your usual with a tap.' },
  { icon: Clock, title: 'Track to your door', desc: 'Minute‑by‑minute ETA with GPS tracking and delivery contact.' },
]

export default function Eats(){
  return (
    <section id="eats" className="relative py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div className="relative" initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
          <div className="absolute -inset-6 bg-cyan-400/20 blur-2xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
              alt="Food ordering preview"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/90">From domoda to shawarma — delivered fast, hot, and fresh.</p>
            </div>
          </div>
        </motion.div>
        <div>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <UtensilsCrossed className="w-8 h-8 text-cyan-400" /> Eats and groceries, on demand
          </motion.h2>
          <motion.p className="mt-4 text-indigo-100/85" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.1}}>
            Explore menus, shop essentials, and get everything brought to your door.
          </motion.p>

          <div className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} className="flex gap-4 items-start"
                initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.4}} transition={{delay:i*0.07}}>
                <div className="shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                  <s.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-indigo-100/80">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
