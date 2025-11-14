import { motion } from 'framer-motion'

export default function CallToAction() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/70 backdrop-blur p-10 md:p-14 shadow-[0_20px_80px_-20px_rgba(168,85,247,0.35)]"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25), rgba(168,85,247,0.25))' }} />
            <div className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.25), rgba(244,114,182,0.25))' }} />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Ready to create something alive?</h3>
              <p className="mt-3 text-slate-700">Bring your ideas into a responsive, immersive 3D world with motion that feels good.</p>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <a href="#" className="inline-flex items-center rounded-full px-6 py-3 text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 shadow-[0_10px_30px_-10px] shadow-fuchsia-500/50 hover:shadow-fuchsia-500/60 transition-shadow">Start building</a>
              <a href="#features" className="inline-flex items-center rounded-full px-6 py-3 text-slate-700 bg-white/70 border border-white/60">See features</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
