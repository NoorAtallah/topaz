'use client';

import React from 'react';
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
    <footer className="relative overflow-hidden bg-white">
      {/* CTA Section */}
   

      {/* Main Footer */}
      <div className="relative border-t border-gray-200">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/10 to-white" />
          
          {/* Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
            <div className="h-full w-full bg-[linear-gradient(rgba(140,86,149,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(140,86,149,0.3)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Gradient Orb */}
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8C5695] opacity-5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 transition-transform hover:scale-105">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-lg bg-[#8C5695] opacity-20 blur-xl" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-lg border border-[#8C5695]/40 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/10 backdrop-blur-sm">
                     <img
                        src="/images/1.png"
                        alt="TOPAZ Logo"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-3xl font-black uppercase tracking-tight text-gray-900">
                    TOPAZ
                  </span>
                </div>
              </div>

              <p className="mb-6 max-w-md leading-relaxed text-gray-600">
                Enterprise-grade VPS hosting solutions designed for developers, businesses, and innovators. 
                Powered by cutting-edge infrastructure with 99.9% uptime guarantee.
              </p>

              {/* Social Links */}
              {/* <div className="flex gap-3">
                <SocialButton icon={Facebook} href="#" label="Facebook" />
                <SocialButton icon={Twitter} href="#" label="Twitter" />
                <SocialButton icon={Linkedin} href="#" label="LinkedIn" />
                <SocialButton icon={Instagram} href="#" label="Instagram" />
              </div> */}

              {/* Trust Badges */}
              <div className="mt-8 flex flex-wrap gap-6">
                <TrustBadge icon={Shield} label="Secure" />
                <TrustBadge icon={Zap} label="Fast" />
                <TrustBadge icon={Server} label="Reliable" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 font-mono text-sm font-bold uppercase tracking-wider text-[#8C5695]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <FooterLink href="/" label="Home" />
                <FooterLink href="/services" label="Services" />
                <FooterLink href="/pricing" label="Pricing Plans" />
                <FooterLink href="/about" label="About Us" />
                <FooterLink href="/faq" label="FAQ" />
              </ul>
            </div>

            {/* Contact Info */}
            <div>
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
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              {/* Copyright */}
              <p className="text-center text-sm text-gray-500">
                © {currentYear} TOPAZ Technology. All rights reserved.
              </p>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="/privacy"
                  className="text-sm text-gray-500 transition-colors hover:text-[#8C5695]"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-sm text-gray-500 transition-colors hover:text-[#8C5695]"
                >
                  Terms of Service
                </a>
            
              </div>
            </div>

            {/* Made with love tag */}
            <p className="mt-4 text-center font-mono text-xs text-gray-400">
              Crafted with <span className="text-[#8C5695]">♥</span> for the future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// CTA Section Component


// Social Button Component
const SocialButton = ({ icon: Icon, href, label }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="group relative transition-transform hover:scale-110 hover:-translate-y-1 active:scale-95"
    >
      <div className="absolute inset-0 rounded-lg bg-[#8C5695] opacity-0 blur-lg transition-opacity group-hover:opacity-30" />
      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-[#8C5695]/30 bg-gray-50 backdrop-blur-sm transition-colors group-hover:border-[#8C5695] group-hover:bg-[#8C5695]/10">
        <Icon className="h-5 w-5 text-gray-600 transition-colors group-hover:text-[#8C5695]" />
      </div>
    </a>
  );
};

// Trust Badge Component
const TrustBadge = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-[#8C5695]/20 bg-[#8C5695]/5 px-3 py-2 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-[#8C5695]" />
      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-700">
        {label}
      </span>
    </div>
  );
};

// Footer Link Component
const FooterLink = ({ href, label }) => {
  return (
    <li>
      <a
        href={href}
        className="group relative inline-flex items-center gap-2 text-gray-600 transition-all hover:text-gray-900 hover:translate-x-1"
      >
        <span className="h-px w-0 bg-[#8C5695] transition-all group-hover:w-4" />
        {label}
      </a>
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
          <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">
            {title}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 group-hover:text-gray-900">
            {content}
            {isExternal && <ExternalLink className="h-3 w-3" />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;