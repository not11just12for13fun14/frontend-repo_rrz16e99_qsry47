import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-slate-900 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30" style={{background:"radial-gradient(1000px 400px at 20% 10%, rgba(99,102,241,0.35), transparent), radial-gradient(800px 400px at 80% 70%, rgba(56,189,248,0.25), transparent)"}} />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            1bena — Gambia’s first super app for rides and deliveries
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-indigo-100/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            One app to move you and your things. Book safe taxi rides, order food, groceries, and anything you need — all in minutes.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <a
              href="#apps"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-400/30 transition"
            >
              Get the app
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div id="apps" className="mt-8 flex items-center gap-4" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
            <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noreferrer" className="hover:opacity-90 transition">
              <img alt="Download on the App Store" className="h-12" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.onebena" target="_blank" rel="noreferrer" className="hover:opacity-90 transition">
              <img alt="Get it on Google Play" className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 blur-2xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                alt="1bena app preview"
                className="w-full h-[520px] object-cover"
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/90 text-sm">Real drivers, real-time tracking, real fast delivery.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
