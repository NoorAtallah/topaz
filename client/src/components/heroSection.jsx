'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen h-screen overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white">
      {/* Background Paths Animation */}
      <BackgroundPaths />
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(#8C5695 1px, transparent 1px), linear-gradient(90deg, #8C5695 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <FloatingOrbs />
      
      {/* Combined Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,white_100%)]" />
      </div>
      
      {/* Static Corner Decorations */}
      <CornerDecorations />
      
      {/* Animated Border Lines */}
      <AnimatedBorders />

      {/* Main Content - Responsive */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 text-center py-20 sm:py-0">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-4 py-1.5 sm:px-6 sm:py-2 backdrop-blur-md mt-20">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#8C5695] animate-pulse" />
            <span className="font-mono text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider text-[#8C5695]">
              NEXT-GEN INFRASTRUCTURE
            </span>
          </div>
        </motion.div>

        {/* Main Heading with Enhanced Effects */}
        <div className="relative mb-4 sm:mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight leading-none"
          >
            <span className="relative inline-block group">
              {/* Main text with gradient */}
              <span className="relative z-10 bg-gradient-to-br from-[#8C5695] via-[#986AA1] to-[#8C5695] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(140,86,149,0.4)]">
                TOPAZ
              </span>
              {/* Glowing background effect */}
              <span className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-[#8C5695] to-[#986AA1]">
                TOPAZ
              </span>
              {/* Animated underline on hover */}
              <motion.span 
                className="absolute -bottom-2 left-0 h-0.5 sm:h-1 w-0 bg-gradient-to-r from-[#8C5695] to-[#986AA1] group-hover:w-full transition-all duration-500"
              />
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mx-auto mt-4 sm:mt-6 h-0.5 sm:h-1 w-32 sm:w-48 md:w-64 origin-center bg-gradient-to-r from-transparent via-[#8C5695] to-transparent relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        </div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-8 sm:mb-10 md:mb-12 max-w-3xl px-4"
        >
          <p className="font-mono text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
            Powerful VPS Hosting & Professional Server Solutions
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise-grade infrastructure built for developers, businesses, and innovators
          </motion.p>
          
          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#8C5695]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#986AA1]"
            />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#8C5695]"
            />
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link href="/pricing" passHref className="w-full sm:w-auto"> 
            <HolographicButton primary>
              LAUNCH PROJECT
            </HolographicButton>
          </Link>
          <Link href="/services" passHref className="w-full sm:w-auto"> 
            <HolographicButton>
              EXPLORE SERVICES
            </HolographicButton>
          </Link>
        </motion.div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-16 w-full max-w-2xl"
        >
          <TechStat value="99.9%" label="UPTIME" />
          <TechStat value="24/7" label="SUPPORT" />
          <TechStat value="<50ms" label="LATENCY" />
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6"
        >
          <SystemStatus label="API" />
          <SystemStatus label="DATABASE" />
          <SystemStatus label="SERVERS" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

// Background Paths Component
function FloatingPaths({ position }) {
  const paths = useMemo(() => 
    Array.from({ length: 36 }, (_, i) => ({
      id: i,
      d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
        380 - i * 5 * position
      } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
        152 - i * 5 * position
      } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
        684 - i * 5 * position
      } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
      width: 0.5 + i * 0.03,
    })), [position]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-[#8C5695]"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const BackgroundPaths = () => {
  return (
    <div className="absolute inset-0">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
};

// Enhanced Holographic Button
const HolographicButton = ({ children, primary }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-xl px-6 py-3 sm:px-8 sm:py-4 font-mono text-xs sm:text-sm font-bold tracking-wider shadow-lg w-full sm:w-auto"
    >
      {primary ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C5695] via-[#986AA1] to-[#8C5695] bg-[length:200%_100%]" />
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#986AA1] to-[#8C5695]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-white border-2 border-[#8C5695]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C5695]/0 via-[#8C5695]/10 to-[#8C5695]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </>
      )}
      <span className={`relative z-10 flex items-center justify-center gap-2 ${primary ? 'text-white' : 'text-[#8C5695]'}`}>
        {children}
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          →
        </motion.span>
      </span>
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#8C5695] to-[#986AA1] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10" />
    </motion.button>
  );
};

// Responsive Tech Stat
const TechStat = ({ value, label }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative"
    >
      <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-[#8C5695]">
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] sm:text-xs tracking-widest text-[#986AA1]">
        {label}
      </div>
      <div className="mx-auto mt-2 sm:mt-3 h-0.5 sm:h-1 w-12 sm:w-16 md:w-20 overflow-hidden rounded-full bg-gray-200">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full w-full bg-gradient-to-r from-[#8C5695] to-[#986AA1]"
        />
      </div>
    </motion.div>
  );
};

// Responsive System Status
const SystemStatus = ({ label }) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#8C5695] animate-pulse" />
      <span className="font-mono text-[10px] sm:text-xs tracking-wider text-gray-600">
        {label}
      </span>
      <span className="font-mono text-[10px] sm:text-xs font-bold tracking-wider text-[#8C5695]">
        [ONLINE]
      </span>
    </div>
  );
};

// Responsive Corner Decorations (static)
const CornerDecorations = () => {
  return (
    <>
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-4 sm:left-6 md:left-8 top-4 sm:top-6 md:top-8"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#8C5695] to-transparent" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#8C5695] to-transparent" />
          <div className="absolute left-0 top-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#8C5695]" />
        </div>
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-4 sm:right-6 md:right-8 top-4 sm:top-6 md:top-8"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
          <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-[#986AA1] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-[#986AA1] to-transparent" />
          <div className="absolute right-0 top-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#986AA1]" />
        </div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#986AA1] to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-[#986AA1] to-transparent" />
          <div className="absolute bottom-0 left-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#986AA1]" />
        </div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16">
          <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#8C5695] to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#8C5695] to-transparent" />
          <div className="absolute bottom-0 right-0 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#8C5695]" />
        </div>
      </motion.div>
    </>
  );
};

// Responsive Scroll Indicator
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <div className="h-10 w-5 sm:h-12 sm:w-6 rounded-full border-2 border-[#8C5695]/40 bg-white/50 backdrop-blur-sm">
          <motion.div
            animate={{ y: [4, 16, 4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#8C5695] shadow-lg shadow-[#8C5695]/50"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

// Floating Orbs
const FloatingOrbs = () => {
  const orbs = [
    { size: 300, x: '10%', y: '20%', delay: 0, duration: 20 },
    { size: 250, x: '80%', y: '60%', delay: 5, duration: 25 },
    { size: 200, x: '60%', y: '80%', delay: 10, duration: 30 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#8C5695' : '#986AA1'} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Borders
const AnimatedBorders = () => {
  return (
    <>
      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8C5695] to-transparent origin-center"
      />
      
      {/* Bottom border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#986AA1] to-transparent origin-center"
      />
      
      {/* Left border */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8C5695] to-transparent origin-center"
      />
      
      {/* Right border */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#986AA1] to-transparent origin-center"
      />
    </>
  );
};

export default HeroSection;