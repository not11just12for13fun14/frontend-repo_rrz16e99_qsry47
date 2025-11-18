import { motion } from 'framer-motion'
import { Car, MapPin, Clock, ShieldCheck, Route } from 'lucide-react'

const steps = [
  { icon: MapPin, title: 'Set pickup & dropoff', desc: 'Precision locations across Banjul, Serrekunda, Brikama and more.' },
  { icon: Clock, title: 'See ETA & price upfront', desc: 'Transparent fares and reliable arrival times before you confirm.' },
  { icon: ShieldCheck, title: 'Ride safely', desc: 'Verified drivers, SOS, and live sharing with family and friends.' },
]

export default function Rides(){
  return (
    <section id="rides" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-600/10 via-blue-700/10 to-green-600/10" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <Car className="w-8 h-8" style={{color:'#1d4ed8'}} /> Rides built for Gambia
          </motion.h2>
          <motion.p className="mt-4 text-indigo-100/85" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.1}}>
            Get to work, meet friends, or catch a ferry — with trusted local drivers and real‑time tracking.
          </motion.p>

          <div className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.div key={s.title} className="flex gap-4 items-start"
                initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.4}} transition={{delay:i*0.07}}>
                <div className="shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
                  <s.icon className="w-6 h-6" style={{color: i % 3 === 0 ? '#dc2626' : i % 3 === 1 ? '#1d4ed8' : '#16a34a'}} />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{s.title}</h3>
                  <p className="text-indigo-100/80">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="relative" initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
          <div className="absolute -inset-6 bg-gradient-to-r from-red-500/20 via-blue-500/20 to-green-500/20 blur-2xl rounded-3xl" />
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=1600&auto=format&fit=crop"
              alt="Ride booking preview"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white/90">Upfront pricing, live route, and driver details before you go.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
