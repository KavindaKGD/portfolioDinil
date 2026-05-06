import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import { contact } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 px-6 py-10 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-purple-600/8 blur-[60px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Logo & copyright */}
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-xs font-black text-white">
            DA
          </span>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Dinil Athuraliya. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full border border-purple-500/15 text-slate-500 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-purple-500/15 text-slate-500 transition hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
            aria-label="Email"
          >
            <FaEnvelope size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
