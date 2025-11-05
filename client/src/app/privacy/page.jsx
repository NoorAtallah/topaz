'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Lock,
  Database,
  Eye,
  Users,
  Cookie,
  UserCheck,
  Clock,
  Globe,
  Bell,
  Mail,
  Server,
  CheckCircle,
  ArrowUp,
  ChevronRight
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'collect', title: 'Information We Collect', icon: Database },
    { id: 'use', title: 'How We Use Your Information', icon: Eye },
    { id: 'protect', title: 'How We Protect Your Data', icon: Lock },
    { id: 'third-party', title: 'Third-Party Services', icon: Users },
    { id: 'cookies', title: 'Cookies & Tracking', icon: Cookie },
    { id: 'rights', title: 'Your Rights', icon: UserCheck },
    { id: 'retention', title: 'Data Retention', icon: Clock },
    { id: 'transfers', title: 'International Transfers', icon: Globe },
    { id: 'updates', title: 'Policy Updates', icon: Bell }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] blur-[120px]"
        />
      </div>

      {/* Grid Pattern */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(140,86,149,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(140,86,149,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Content */}
        <div className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Sidebar Navigation - Desktop */}
              <div className="hidden lg:col-span-3 lg:block">
                <SidebarNav sections={sections} activeSection={activeSection} />
              </div>

              {/* Privacy Policy Content */}
              <div className="lg:col-span-9">
                <PolicyContent />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
          >
            <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-50 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#8C5695] bg-black backdrop-blur-sm transition-colors hover:bg-[#8C5695]/20">
              <ArrowUp className="h-5 w-5 text-[#8C5695]" />
            </div>
          </motion.button>
        )}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const effectiveDate = "January 1, 2025";

  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              YOUR PRIVACY MATTERS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Privacy{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-6 max-w-3xl text-xl font-semibold text-white"
          >
            Your privacy is important to us
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mb-8 max-w-3xl text-lg text-white/70"
          >
            This Privacy Policy explains how we collect, use, protect, and handle your personal 
            information when you use our VPS hosting services.
          </motion.p>

          {/* Effective Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="inline-flex items-center gap-2 rounded-lg border border-[#8C5695]/30 bg-[#8C5695]/10 px-4 py-2"
          >
            <span className="font-mono text-sm text-white/60">Effective Date:</span>
            <span className="font-mono text-sm font-bold text-[#8C5695]">{effectiveDate}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SidebarNav = ({ sections, activeSection }) => {
  const scrollToSection = (id) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-24"
    >
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-6 backdrop-blur-xl">
        <h3 className="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-[#8C5695]">
          Quick Navigation
        </h3>
        
        <nav className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-all ${
                  isActive
                    ? 'bg-[#8C5695]/20 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? 'text-[#8C5695]' : ''}`} />
                <span className="text-sm font-medium">{section.title}</span>
                {isActive && (
                  <ChevronRight className="ml-auto h-4 w-4 text-[#8C5695]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
};

const PolicyContent = () => {
  return (
    <div className="space-y-8">
      {/* Information We Collect */}
      <PolicySection
        id="collect"
        title="Information We Collect"
        icon={Database}
      >
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8C5695]/20 mt-0.5">
              <CheckCircle className="h-4 w-4 text-[#8C5695]" />
            </div>
            <div>
              <strong className="text-white">Personal Information:</strong>
              <span className="text-white/80"> Name, email, phone number, billing address, and payment details.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8C5695]/20 mt-0.5">
              <CheckCircle className="h-4 w-4 text-[#8C5695]" />
            </div>
            <div>
              <strong className="text-white">Account Information:</strong>
              <span className="text-white/80"> Login credentials, support tickets, preferences, etc.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8C5695]/20 mt-0.5">
              <CheckCircle className="h-4 w-4 text-[#8C5695]" />
            </div>
            <div>
              <strong className="text-white">Technical Information:</strong>
              <span className="text-white/80"> IP address, browser type, operating system, and usage data.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#8C5695]/20 mt-0.5">
              <CheckCircle className="h-4 w-4 text-[#8C5695]" />
            </div>
            <div>
              <strong className="text-white">Server Activity:</strong>
              <span className="text-white/80"> Data related to your VPS hosting, control panel usage, and API interactions.</span>
            </div>
          </li>
        </ul>
      </PolicySection>

      {/* How We Use Your Information */}
      <PolicySection
        id="use"
        title="How We Use Your Information"
        icon={Eye}
      >
        <p className="mb-4">We use the collected information to:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Provide and manage hosting services</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Process payments and invoices</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Respond to support requests</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Monitor and improve website and service performance</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Prevent fraud and enhance security</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Send important updates and promotional offers (only with your consent)</span>
          </li>
        </ul>
      </PolicySection>

      {/* How We Protect Your Data */}
      <PolicySection
        id="protect"
        title="How We Protect Your Data"
        icon={Lock}
      >
        <p className="mb-4">We use industry-standard security measures to protect your data, including:</p>
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <SecurityFeature icon={Lock} label="SSL Encryption" />
          <SecurityFeature icon={Shield} label="Firewall & Malware Scanning" />
          <SecurityFeature icon={UserCheck} label="Two-Factor Authentication" />
          <SecurityFeature icon={Server} label="Regular Security Audits" />
        </div>
        <div className="rounded-lg border border-[#8C5695]/30 bg-[#8C5695]/10 p-4">
          <p className="flex items-center gap-2 font-semibold text-white">
            <Shield className="h-5 w-5 text-[#8C5695]" />
            We do not sell or rent your personal data to third parties.
          </p>
        </div>
      </PolicySection>

      {/* Third-Party Services */}
      <PolicySection
        id="third-party"
        title="Third-Party Services"
        icon={Users}
      >
        <p className="mb-4">
          We may share limited information with trusted third-party services (e.g., payment gateways, 
          control panel license providers, domain registrars) only to the extent required to deliver our services.
        </p>
        <p className="text-white/70">
          All third parties are obligated to comply with privacy and data protection laws.
        </p>
      </PolicySection>

      {/* Cookies & Tracking */}
      <PolicySection
        id="cookies"
        title="Cookies & Tracking"
        icon={Cookie}
      >
        <p className="mb-4">Our website uses cookies and similar technologies to:</p>
        <ul className="mb-6 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Improve website experience</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Analyze traffic and usage patterns</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Remember user preferences</span>
          </li>
        </ul>
        <p className="text-white/70">
          You can control or disable cookies through your browser settings at any time.
        </p>
      </PolicySection>

      {/* Your Rights */}
      <PolicySection
        id="rights"
        title="Your Rights"
        icon={UserCheck}
      >
        <p className="mb-4">Depending on your location, you may have the right to:</p>
        <ul className="mb-4 space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Access or update your personal data</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Request deletion of your information</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Withdraw consent for marketing communications</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>File a complaint with a data protection authority</span>
          </li>
        </ul>
        <p className="text-white/70">
          To exercise these rights, please contact us at{' '}
          <a href="mailto:info@topaz-technology.com" className="font-semibold text-[#8C5695] hover:underline">
            info@topaz-technology.com
          </a>
        </p>
      </PolicySection>

      {/* Data Retention */}
      <PolicySection
        id="retention"
        title="Data Retention"
        icon={Clock}
      >
        <p>
          We retain your personal data only for as long as necessary to provide our services and 
          fulfill legal obligations. You may request account closure at any time.
        </p>
      </PolicySection>

      {/* International Transfers */}
      <PolicySection
        id="transfers"
        title="International Transfers"
        icon={Globe}
      >
        <p>
          Your information may be transferred and processed in countries other than your own. 
          We take steps to ensure data is handled securely regardless of location.
        </p>
      </PolicySection>

      {/* Policy Updates */}
      <PolicySection
        id="updates"
        title="Policy Updates"
        icon={Bell}
      >
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page 
          with an updated effective date. We encourage you to review it regularly.
        </p>
      </PolicySection>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

const PolicySection = ({ id, title, icon: Icon, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      data-section={id}
      className="group relative scroll-mt-24"
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8C5695]/10 to-[#986AA1]/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-8 backdrop-blur-xl">
        {/* Section Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-[#8C5695] opacity-30 blur-lg" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#8C5695]/40 bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/10">
              <Icon className="h-6 w-6 text-[#8C5695]" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
        </div>

        {/* Section Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-4 text-white/80 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SecurityFeature = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#8C5695]/20 bg-[#8C5695]/5 p-4">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#8C5695]/20">
        <Icon className="h-5 w-5 text-[#8C5695]" />
      </div>
      <span className="font-semibold text-white">{label}</span>
    </div>
  );
};

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8C5695]/20 to-[#986AA1]/10 blur-2xl" />
      
      <div className="relative rounded-3xl border border-[#8C5695]/30 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/5 p-8 text-center backdrop-blur-xl">
        <div className="mb-6 inline-flex">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-[#8C5695] opacity-50 blur-xl" />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#8C5695]/50 bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/20">
              <Mail className="h-8 w-8 text-[#8C5695]" />
            </div>
          </div>
        </div>

        <h3 className="mb-4 text-2xl font-bold text-white">
          Questions About Your Privacy?
        </h3>
        <p className="mb-6 text-white/70">
          If you have any questions or concerns about this Privacy Policy or how we handle your data, 
          please don't hesitate to contact us.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <motion.a
            href="mailto:info@topaz-technology.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8C5695] to-[#986AA1]" />
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"
              transition={{ duration: 0.6 }}
            />
            <span className="relative flex items-center gap-2 text-white">
              <Mail className="h-4 w-4" />
              Email Us
            </span>
          </motion.a>

          <a
            href="mailto:info@topaz-technology.com"
            className="font-mono text-sm text-[#8C5695] hover:underline"
          >
            info@topaz-technology.com
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicyPage;