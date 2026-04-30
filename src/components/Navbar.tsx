import { useMemo, useState } from 'react';
import { navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), []);
  const activeSection = useActiveSection(sectionIds);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy-950/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Dinil Athuraliya home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-mint text-sm font-black text-navy-950 shadow-[0_12px_30px_rgba(25,181,138,0.25)] transition group-hover:scale-105">
            DA
          </span>
          <span className="hidden text-base font-bold text-white sm:block">Dinil</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-bold transition ${
                  isActive ? 'text-mint' : 'text-slate-300 hover:text-mint'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-mint hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span className={`menu-line top-0 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`menu-line top-2 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`menu-line top-4 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-navy-900/95 p-2 shadow-soft backdrop-blur">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-mint"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
