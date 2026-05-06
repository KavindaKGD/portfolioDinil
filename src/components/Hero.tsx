import { motion } from 'framer-motion';
import Typewriter from './Typewriter';
import { heroRoles, contact } from '../data/portfolio';
import { FiMapPin, FiDownload, FiArrowRight } from 'react-icons/fi';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import profileImg from '../assets/ChatGPT Image May 6, 2026, 01_14_08 PM.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-8"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-cyan-500/6 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl font-black leading-[1.1] text-white sm:text-6xl lg:text-7xl"
            >
              Hi, I'm{' '}
              <span>Dinil</span>
              <br />
              <span>Athuraliya</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-5 text-xl font-semibold text-purple-300/90 sm:text-2xl"
            >
              <Typewriter words={heroRoles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
            >
              Motivated double-degree undergraduate pursuing BSc (Hons) in Information Technology
              and BMBA (Hons) in Business Analytics. Passionate about data science, dashboards, and
              technology-driven problem solving.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-4 flex items-center gap-2 text-sm text-slate-500"
            >
              <FiMapPin className="text-purple-400" />
              <span>{contact.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all hover:shadow-[0_0_50px_rgba(139,92,246,0.5)] hover:scale-105"
              >
                View Projects
                <FiArrowRight className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="/Dinil-Athuraliya-CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/8 px-7 py-3.5 text-sm font-bold text-purple-300 backdrop-blur transition-all hover:border-purple-400/50 hover:bg-purple-500/15 hover:scale-105"
              >
                <FiDownload />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-purple-500/20 text-slate-400 transition hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="grid h-10 w-10 place-items-center rounded-full border border-purple-500/20 text-slate-400 transition hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-purple-300"
                aria-label="Email"
              >
                <FaEnvelope size={16} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Glow ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-purple-600/20 via-purple-500/5 to-cyan-400/10 blur-2xl" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-full border border-purple-500/15 bg-gradient-to-br from-purple-500/5 to-transparent p-1 shadow-2xl">
                <div className="overflow-hidden rounded-full">
                  <img
                    src={profileImg}
                    alt="Dinil Athuraliya"
                    className="aspect-square w-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating metric cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-1/4 rounded-xl border border-purple-500/20 bg-[#030014]/90 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <p className="text-xs font-semibold text-purple-400">BI & Dashboards</p>
                <p className="text-lg font-bold text-white">Power BI</p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 bottom-1/3 rounded-xl border border-purple-500/20 bg-[#030014]/90 px-4 py-3 backdrop-blur-xl shadow-xl"
              >
                <p className="text-xs font-semibold text-purple-400">Research & Analysis</p>
                <p className="text-lg font-bold text-white">Data Science</p>
              </motion.div>

              {/* Status Badge Tag */}
              <motion.div
                animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-12 top-10 flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#030014]/90 px-4 py-2 backdrop-blur-xl shadow-xl"
              >
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-purple-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
                </span>
                <span className="text-xs font-semibold text-purple-300">Available</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">Scroll</span>
            <div className="h-8 w-5 rounded-full border-2 border-purple-500/30 p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-purple-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
