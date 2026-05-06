import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace('#', '')), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-purple-500/10 bg-[#030014]/80 shadow-[0_4px_30px_rgba(139,92,246,0.05)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Dinil Athuraliya home">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 blur-sm transition group-hover:opacity-70" />
            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-sm font-black text-white shadow-lg transition group-hover:scale-110">
              DA
            </span>
          </div>
          <span className="hidden text-base font-bold text-white sm:block">
            Dinil<span className="text-purple-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-purple-300'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 rounded-lg bg-purple-500/10 border border-purple-500/20"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 md:inline-flex"
        >
          Let's Connect
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-purple-500/20 text-white transition hover:border-purple-400/50 hover:bg-purple-500/10 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded-full bg-white transition duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden md:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-purple-500/15 bg-[#030014]/95 p-3 backdrop-blur-xl">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-purple-500/10 hover:text-purple-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 block rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
