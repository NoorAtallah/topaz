'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', code: '00' },
    { name: 'Services', href: '/services', code: '01' },
    { name: 'Pricing Plans', href: '/pricing', code: '02' },
    { name: 'About Us', href: '/about', code: '03' },
    { name: 'Blogs', href: '/blogs', code: '04' },
    { name: 'FAQ', href: '/faq', code: '05' },
    { name: 'Terms & Conditions', href: '/terms', code: '06' },
    { name: 'Privacy Policy', href: '/privacy', code: '07' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-2xl shadow-lg shadow-[#8C5695]/20'
          : 'bg-black/60 backdrop-blur-md'
      }`}
    >
      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(90deg,rgba(140,86,149,0.3)_1px,transparent_1px),linear-gradient(0deg,rgba(140,86,149,0.3)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Scanline Effect */}
      <motion.div
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#8C5695]/10 to-transparent"
      />

      {/* Top Border with Running Light */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8C5695]/50 to-transparent">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#986AA1] to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="relative group">
            <div className="flex items-center gap-4">
              {/* Tech Logo */}
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="relative h-12 w-12"
                >
                  {/* Hexagon Border */}
                  <svg viewBox="0 0 100 100" className="absolute inset-0">
                    <defs>
                      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8C5695" />
                        <stop offset="100%" stopColor="#986AA1" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                      fill="none"
                      stroke="url(#logo-grad)"
                      strokeWidth="2"
                    />
                    <polygon
                      points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
                      fill="rgba(140,86,149,0.1)"
                      stroke="url(#logo-grad)"
                      strokeWidth="1"
                    />
                  </svg>
                  
                  {/* Center T */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black bg-gradient-to-br from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
                      T
                    </span>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full bg-[#8C5695] blur-xl"
                />

                {/* Corner Brackets */}
                <div className="absolute -top-1 -left-1 h-3 w-3 border-l-2 border-t-2 border-[#8C5695]" />
                <div className="absolute -top-1 -right-1 h-3 w-3 border-r-2 border-t-2 border-[#986AA1]" />
                <div className="absolute -bottom-1 -left-1 h-3 w-3 border-l-2 border-b-2 border-[#986AA1]" />
                <div className="absolute -bottom-1 -right-1 h-3 w-3 border-r-2 border-b-2 border-[#8C5695]" />
              </div>
              
              {/* Logo Text with Glitch */}
              <div className="flex flex-col">
                <div className="relative">
                  <span className="font-black text-xl tracking-tighter text-white mr-8">
                    TOPAZ
                  </span>
                  <motion.span
                    animate={{
                      x: [-1, 1, -1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 0.2,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    className="absolute top-0 left-0 font-black text-2xl tracking-tighter text-[#8C5695]"
                  >
                    TOPAZ
                  </motion.span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[5px] tracking-[0.3em] text-[#8C5695]">
                    Smart Solutions,Trusted Performance
                  </span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="h-1 w-1 rounded-full bg-[#8C5695]"
                  />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <NavLink 
                key={item.name} 
                item={item} 
                index={index}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          {/* Right Side Tech Display */}
          <div className="hidden lg:flex items-center gap-4">
            {/* System Status */}
            <div className="flex items-center gap-3 rounded-lg border border-[#8C5695]/20 bg-black/50 px-4 py-2 backdrop-blur-sm">
              <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] text-white/40">SYSTEM</span>
                <div className="flex items-center gap-1.5">
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(140, 86, 149, 0.7)',
                        '0 0 0 4px rgba(140, 86, 149, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-1.5 w-1.5 rounded-full bg-[#8C5695]"
                  />
                  <span className="font-mono text-xs font-bold text-[#8C5695]">ONLINE</span>
                </div>
              </div>
              <div className="h-8 w-[1px] bg-[#8C5695]/20" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-white/40">LOCAL TIME</span>
                <span className="font-mono text-xs font-bold text-white">
                  {time.toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative h-11 w-11 rounded-lg border border-[#8C5695]/30 bg-black/50 backdrop-blur-sm hover:border-[#8C5695] hover:bg-[#8C5695]/10 transition-all overflow-hidden group"
            aria-label="Toggle menu"
          >
            {/* Button Grid Background */}
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
              <div className="h-full w-full bg-[linear-gradient(90deg,rgba(140,86,149,0.3)_1px,transparent_1px),linear-gradient(0deg,rgba(140,86,149,0.3)_1px,transparent_1px)] bg-[size:4px_4px]" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5">
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-5 bg-gradient-to-r from-[#8C5695] to-[#986AA1] rounded-full shadow-[0_0_8px_rgba(140,86,149,0.8)]"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="mt-1.5 h-0.5 w-5 bg-gradient-to-r from-[#8C5695] to-[#986AA1] rounded-full shadow-[0_0_8px_rgba(140,86,149,0.8)]"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="mt-1.5 h-0.5 w-5 bg-gradient-to-r from-[#8C5695] to-[#986AA1] rounded-full shadow-[0_0_8px_rgba(140,86,149,0.8)]"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-[#8C5695]/20 bg-black/98 backdrop-blur-2xl"
          >
            {/* Mobile Menu Grid Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full bg-[linear-gradient(90deg,rgba(140,86,149,0.5)_1px,transparent_1px),linear-gradient(0deg,rgba(140,86,149,0.5)_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group relative block overflow-hidden rounded-lg px-4 py-4 font-mono text-sm transition-all ${
                        pathname === item.href
                          ? 'bg-gradient-to-r from-[#8C5695]/20 to-[#986AA1]/20 text-white border border-[#8C5695]/50'
                          : 'text-white/70 hover:text-white border border-transparent hover:border-[#8C5695]/30 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-[#8C5695] opacity-50">[{item.code}]</span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-[#8C5695]"
                        >
                          →
                        </motion.span>
                      </div>
                      
                      {/* Hover Scan Line */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8C5695]/20 to-transparent opacity-0 group-hover:opacity-100"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile System Status */}
              <div className="mt-6 rounded-lg border border-[#8C5695]/20 bg-black/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2 w-2 rounded-full bg-[#8C5695]"
                    />
                    <span className="font-mono text-xs text-white/60">SYSTEM STATUS</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#8C5695]">OPERATIONAL</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Border with Data Stream */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8C5695]/30 to-transparent">
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="h-full w-1/4 bg-gradient-to-r from-transparent via-[#986AA1] to-transparent"
        />
      </div>
    </motion.nav>
  );
};

// Desktop Nav Link Component
const NavLink = ({ item, index, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={item.href}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group px-3 py-2"
      >
        {/* Background Panel */}
        <div className={`absolute inset-0 rounded-lg border transition-all ${
          isActive 
            ? 'border-[#8C5695]/50 bg-[#8C5695]/10' 
            : 'border-transparent group-hover:border-[#8C5695]/30 group-hover:bg-[#8C5695]/5'
        }`}>
          {/* Tech Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(90deg,rgba(140,86,149,0.3)_1px,transparent_1px),linear-gradient(0deg,rgba(140,86,149,0.3)_1px,transparent_1px)] bg-[size:4px_4px]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#8C5695] opacity-60">[{item.code}]</span>
          <span className={`font-mono text-xs font-medium transition-all ${
            isActive 
              ? 'text-white' 
              : 'text-white/60 group-hover:text-white'
          }`}>
            {item.name}
          </span>
        </div>
        
        {/* Active Indicator */}
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8C5695] to-[#986AA1] rounded-full"
            transition={{ type: 'spring', duration: 0.5 }}
          >
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-white to-transparent"
            />
          </motion.div>
        )}

        {/* Hover Scan Line */}
        {isHovered && !isActive && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8C5695]/20 to-transparent"
          />
        )}

        {/* Corner Accents on Hover */}
        {(isHovered || isActive) && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 left-0 h-1 w-1 border-l border-t border-[#8C5695]"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 h-1 w-1 border-r border-t border-[#986AA1]"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-0 left-0 h-1 w-1 border-l border-b border-[#986AA1]"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute bottom-0 right-0 h-1 w-1 border-r border-b border-[#8C5695]"
            />
          </>
        )}
      </motion.div>
    </Link>
  );
};

export default Navbar;