import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Gambian flag inspired backdrop: red, blue (with white gap), green */}
      <div className="absolute inset-0 -z-10">
        <div className="h-1/3 w-full bg-red-700/30" />
        <div className="h-[2px] w-full bg-white/20" />
        <div className="h-1/3 w-full bg-blue-700/30" />
        <div className="h-[2px] w-full bg-white/20" />
        <div className="h-1/3 w-full bg-green-700/30" />
      </div>
      <div className="absolute inset-0 -z-10 opacity-40" style={{background:"radial-gradient(1000px 400px at 20% 10%, rgba(99,102,241,0.35), transparent), radial-gradient(800px 400px at 80% 70%, rgba(56,189,248,0.25), transparent)"}} />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
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
            One app to move you and your things. From Serekunda to Banjul to Brikama — safe taxi rides, food, and essentials on demand.
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
              href="https://1bena.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              Visit 1bena.com
            </a>
          </motion.div>

          <motion.div id="apps" className="mt-8 flex items-center gap-4" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4}}>
            <a href="https://apps.apple.com/app/id0000000000" target="_blank" rel="noreferrer" className="hover:opacity-90 transition">
              <img alt="Download on the App Store" className="h-12" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.onebena" target="_blank" rel="noreferrer" className="hover:opacity-90 transition">
              <img alt="Get it on Google Play" className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
            </a>
            <a href="https://1bena.com/" target="_blank" rel="noreferrer" className="ml-2 text-indigo-100/90 hover:text-white underline">
              Learn more at 1bena.com
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
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-500/30 via-blue-500/30 to-green-500/30 blur-2xl rounded-[2rem]" />
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <img
                alt="1bena app preview"
                className="w-full h-[520px] object-cover"
                src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/90 text-sm">Made for The Gambia. Real drivers, real-time tracking, real fast delivery.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
