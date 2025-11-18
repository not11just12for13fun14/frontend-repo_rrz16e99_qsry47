import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5}}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready when you are</h2>
          <p className="mt-4 text-indigo-100/90">From morning commutes to midnight cravings, 1bena is your everyday companion. Order, ride, and track it all in one place.</p>
          <div className="mt-6 flex gap-4">
            <a href="#apps" className="rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow hover:shadow-lg transition">Download app</a>
            <a href="#features" className="rounded-xl border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition">Explore features</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.5, delay:.1}}>
          <div className="relative">
            <div className="absolute -inset-6 bg-indigo-500/20 blur-2xl rounded-3xl" />
            <div className="relative grid grid-cols-3 gap-3">
              {['https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1521917441209-e886f0404a7b?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop']
                .map((src, i) => (
                <motion.img key={i} src={src} alt="1bena imagery" className="rounded-xl h-28 w-full object-cover"
                  initial={{opacity:0, scale: .95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: i*0.05}} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
