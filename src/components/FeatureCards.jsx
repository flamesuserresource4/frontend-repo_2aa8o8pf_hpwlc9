import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Shield, Zap } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: Sparkles,
    title: 'Fluid 3D Motion',
    description: 'Natural, flowy animations that respond to your cursor and presence.',
    color: 'from-cyan-400 to-fuchsia-500',
  },
  {
    icon: Shield,
    title: 'Dynamic Lighting',
    description: 'Soft glows, shadows, and depth that feel immersive and alive.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Zap,
    title: 'Interactive Panels',
    description: 'Hover or click to reveal layered info cards that glide into view.',
    color: 'from-fuchsia-500 to-pink-500',
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Crafted for Presence</h2>
          <p className="mt-3 text-slate-700">Everything moves with intention — soft, bright, and beautifully subtle.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, title, description, color, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700">{description}</p>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-x-4 bottom-4 rounded-xl border border-white/60 bg-white/80 backdrop-blur p-4 shadow-lg"
          >
            <p className="text-sm text-slate-700">Click to learn more about how these elements are tuned for balance and harmony.</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 text-sm rounded-full text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow">View demo</button>
              <button className="px-3 py-1.5 text-sm rounded-full border border-slate-200 bg-white/70">Details</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute -z-0 inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
        animate={{}}
      >
        <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.25), rgba(59,130,246,0.15))' }} />
      </motion.div>
    </motion.div>
  )
}
