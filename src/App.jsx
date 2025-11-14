import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import FeatureCards from './components/FeatureCards'
import CallToAction from './components/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(900px_500px_at_110%_10%,rgba(168,85,247,0.12),transparent_50%)] text-slate-800">
      <Navbar />
      <Hero3D />
      <FeatureCards />
      <CallToAction />
      <footer className="relative py-10 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Aether — Crafted with motion.</p>
      </footer>
    </div>
  )
}

export default App
