import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/70 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              Flow into the Future
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-700/90">
              A living, interactive 3D canvas with fluid motion, soft glows, and depth you can feel.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#cta" className="inline-flex items-center rounded-full px-6 py-3 text-white bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 shadow-[0_10px_30px_-10px] shadow-fuchsia-500/50 hover:shadow-fuchsia-500/60 transition-shadow">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center rounded-full px-6 py-3 text-slate-700 bg-white/70 backdrop-blur border border-white/60 hover:bg-white/90 transition-colors">
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <GlowOrbs />
    </section>
  )
}

function GlowOrbs() {
  const orbs = [
    { size: 220, x: '10%', y: '70%', from: '#7c3aed', to: '#06b6d4', opacity: 0.25 },
    { size: 300, x: '80%', y: '10%', from: '#22d3ee', to: '#a78bfa', opacity: 0.18 },
    { size: 180, x: '75%', y: '75%', from: '#6366f1', to: '#f472b6', opacity: 0.2 },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: o.opacity, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 * i }}
          className="absolute blur-3xl rounded-full"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle at 30% 30%, ${o.from}, ${o.to})`,
            filter: 'blur(45px) saturate(120%)',
          }}
        />
      ))}
    </div>
  )
}
