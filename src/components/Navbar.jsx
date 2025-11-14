import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#cta', label: 'Get Started' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_-6px] shadow-fuchsia-400/50" />
          <span className="font-semibold tracking-tight">Aether</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#cta" className="inline-flex items-center rounded-full px-4 py-1.5 text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/40 transition-shadow">
            Launch
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/60">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20">
          <div className="px-4 py-3 space-y-2 bg-white/70">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block py-2" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
