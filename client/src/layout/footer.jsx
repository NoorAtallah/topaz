'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Server,
  Shield,
  Zap,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black">
      {/* CTA Section */}
      <CTASection />

      {/* Main Footer */}
      <div className="relative border-t border-white/5">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
          
          {/* Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-5">
            <div className="h-full w-full bg-[linear-gradient(rgba(140,86,149,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(140,86,149,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Gradient Orb */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8C5695] blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg bg-[#8C5695] opacity-50 blur-xl" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-[#8C5695]/40 bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/20 backdrop-blur-sm">
                      <Server className="h-6 w-6 text-[#8C5695]" />
                    </div>
                  </div>
                  <span className="text-3xl font-black uppercase tracking-tight text-white">
                    TOPAZ
                  </span>
                </motion.div>
              </div>

              <p className="mb-6 max-w-md text-white/60 leading-relaxed">
                Enterprise-grade VPS hosting solutions designed for developers, businesses, and innovators. 
                Powered by cutting-edge infrastructure with 99.9% uptime guarantee.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <SocialButton icon={Facebook} href="#" label="Facebook" />
                <SocialButton icon={Twitter} href="#" label="Twitter" />
                <SocialButton icon={Linkedin} href="#" label="LinkedIn" />
                <SocialButton icon={Instagram} href="#" label="Instagram" />
              </div>

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6">
                <TrustBadge icon={Shield} label="Secure" />
                <TrustBadge icon={Zap} label="Fast" />
                <TrustBadge icon={Server} label="Reliable" />
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-[#8C5695]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <FooterLink href="#" label="Home" />
                <FooterLink href="#" label="VPS Hosting" />
                <FooterLink href="#" label="Pricing" />
                <FooterLink href="#" label="About Us" />
                <FooterLink href="#" label="Blog" />
                <FooterLink href="#" label="Support" />
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-[#8C5695]">
                Contact Us
              </h3>
              <div className="space-y-4">
                <ContactItem
                  icon={MapPin}
                  title="Office"
                  content={
                    <>
                      Al-Kayan for Business Services Co,<br />
                      4th floor, DO6
                    </>
                  }
                />
                <ContactItem
                  icon={Phone}
                  title="Phone"
                  content="+962 77 699 0090"
                  href="tel:+962776990090"
                />
                <ContactItem
                  icon={Mail}
                  title="Email"
                  content="info@topaz-technology.com"
                  href="mailto:info@topaz-technology.com"
                />
                <ContactItem
                  icon={MessageCircle}
                  title="WhatsApp"
                  content="+962 77 699 0090"
                  href="https://wa.me/962776990090"
                  isExternal
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 border-t border-white/5 pt-8"
          >
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Copyright */}
              <p className="text-center text-sm text-white/40">
                © {currentYear} TOPAZ Technology. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="text-sm text-white/40 transition-colors hover:text-[#8C5695]"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-white/40 transition-colors hover:text-[#8C5695]"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-white/40 transition-colors hover:text-[#8C5695]"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Made with love tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-center font-mono text-xs text-white/20"
            >
              Crafted with <span className="text-[#8C5695]">♥</span> for the future
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="relative h-1 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#8C5695] to-transparent"
        />
      </div>
    </footer>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <div className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8C5695]/20 via-black to-[#986AA1]/20" />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C5695" />
              <stop offset="100%" stopColor="#986AA1" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0%" y1="50%" x2="100%" y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#8C5695] animate-pulse" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              GET STARTED TODAY
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Ready to Get{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Started?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            We're here to help you succeed. Whether you're launching your first website or 
            upgrading an existing project, our VPS hosting gives you the power and control you need.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CTAButton primary href="#">
              Get Started Now
            </CTAButton>
            <CTAButton href="#">
              View Pricing
            </CTAButton>
          </motion.div>

          {/* Trust Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 font-mono text-sm text-white/40"
          >
            Join 5,000+ satisfied customers • No setup fees • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

// CTA Button Component
const CTAButton = ({ children, primary, href }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
    >
      {/* Background */}
      <div className={`absolute inset-0 ${
        primary 
          ? 'bg-gradient-to-r from-[#8C5695] to-[#986AA1]' 
          : 'bg-white/5'
      }`} />
      
      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"
        transition={{ duration: 0.6 }}
      />

      {/* Border */}
      <div className={`absolute inset-0 rounded-xl border-2 ${
        primary ? 'border-[#8C5695]/50' : 'border-[#8C5695]/30'
      }`} />

      {/* Content */}
      <span className="relative flex items-center gap-2 text-white">
        {children}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
};

// Social Button Component
const SocialButton = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-lg bg-[#8C5695] opacity-0 blur-lg transition-opacity group-hover:opacity-50" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#8C5695]/30 bg-white/5 backdrop-blur-sm transition-colors group-hover:border-[#8C5695] group-hover:bg-[#8C5695]/10">
        <Icon className="h-5 w-5 text-white/70 transition-colors group-hover:text-[#8C5695]" />
      </div>
    </motion.a>
  );
};

// Trust Badge Component
const TrustBadge = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#8C5695]/20 bg-[#8C5695]/5 px-3 py-2 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-[#8C5695]" />
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </span>
    </div>
  );
};

// Footer Link Component
const FooterLink = ({ href, label }) => {
  return (
    <li>
      <motion.a
        href={href}
        whileHover={{ x: 5 }}
        className="group relative inline-flex items-center gap-2 text-white/60 transition-colors hover:text-white"
      >
        <span className="h-px w-0 bg-[#8C5695] transition-all group-hover:w-4" />
        {label}
      </motion.a>
    </li>
  );
};

// Contact Item Component
const ContactItem = ({ icon: Icon, title, content, href, isExternal }) => {
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href ? {
    href,
    target: isExternal ? '_blank' : undefined,
    rel: isExternal ? 'noopener noreferrer' : undefined,
    className: 'group block transition-transform hover:translate-x-1'
  } : {};

  return (
    <Wrapper {...wrapperProps}>
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8C5695]/30 bg-[#8C5695]/10">
            <Icon className="h-5 w-5 text-[#8C5695]" />
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
            {title}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70 group-hover:text-white">
            {content}
            {isExternal && <ExternalLink className="h-3 w-3" />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;