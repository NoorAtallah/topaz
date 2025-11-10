'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle,
  AlertTriangle,
  Shield,
  CreditCard,
  XCircle,
  Database,
  Activity,
  Headphones,
  RefreshCw,
  Scale,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      // Update active section based on scroll position
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
    { id: 'acceptance', title: 'Acceptance of Terms', icon: CheckCircle },
    { id: 'services', title: 'Services We Provide', icon: FileText },
    { id: 'responsibilities', title: 'User Responsibilities', icon: Shield },
    { id: 'billing', title: 'Billing & Payments', icon: CreditCard },
    { id: 'cancellations', title: 'Cancellations & Refunds', icon: XCircle },
    { id: 'suspension', title: 'Account Suspension', icon: AlertTriangle },
    { id: 'data', title: 'Data & Backups', icon: Database },
    { id: 'uptime', title: 'Uptime Guarantee', icon: Activity },
    { id: 'support', title: 'Support', icon: Headphones },
    { id: 'modifications', title: 'Modifications', icon: RefreshCw },
    { id: 'law', title: 'Governing Law', icon: Scale }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf8fb] to-white" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.08, 0.05],
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

              {/* Terms Content */}
              <div className="lg:col-span-9">
                <TermsContent />
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
            <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-30 blur-xl transition-opacity group-hover:opacity-50" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#8C5695] bg-white shadow-lg backdrop-blur-sm transition-colors hover:bg-[#8C5695]/5">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <FileText className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-gray-700">
              LEGAL AGREEMENT
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          >
            Terms &{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Conditions
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-6 max-w-3xl text-lg text-gray-600"
          >
            These Terms and Conditions govern your access to and use of our website and services, 
            including VPS hosting, domains, and software licenses. By using our services, you agree 
            to these terms in full.
          </motion.p>

          {/* Effective Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center gap-2 rounded-lg border border-[#8C5695]/20 bg-[#8C5695]/5 px-4 py-2"
          >
            <span className="font-mono text-sm text-gray-600">Effective Date:</span>
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
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm backdrop-blur-xl">
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
                    ? 'bg-[#8C5695]/10 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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

const TermsContent = () => {
  return (
    <div className="space-y-8">
      {/* Section 1: Acceptance of Terms */}
      <TermsSection
        id="acceptance"
        number="1"
        title="Acceptance of Terms"
        icon={CheckCircle}
      >
        <p>
          By creating an account, placing an order, or using any of our services, you agree to be 
          bound by these Terms and our Privacy Policy.
        </p>
        <p className="mt-4">
          If you do not agree with any part of these terms, you must not use our services.
        </p>
      </TermsSection>

      {/* Section 2: Services We Provide */}
      <TermsSection
        id="services"
        number="2"
        title="Services We Provide"
        icon={FileText}
      >
        <p>
          We offer virtual private servers (VPS), cloud infrastructure, software licenses (e.g., cPanel, Plesk), 
          technical support, and related hosting products. Details and pricing are available on our website.
        </p>
      </TermsSection>

      {/* Section 3: User Responsibilities */}
      <TermsSection
        id="responsibilities"
        number="3"
        title="User Responsibilities"
        icon={Shield}
      >
        <p className="mb-4">By using our services, you agree to:</p>
        <ul className="mb-4 space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Provide accurate and up-to-date information</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Maintain the confidentiality of your login credentials</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Be solely responsible for the content and activities on your server</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Comply with all applicable laws and regulations</span>
          </li>
        </ul>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <div className="mb-2 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-red-700">Prohibited Activities</span>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            You may not use our services for any illegal, harmful, or abusive activity, including but not limited to:
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2 text-gray-700">
              <XCircle className="h-4 w-4 flex-shrink-0 text-red-600 mt-0.5" />
              <span>Hosting malware, phishing, or scams</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <XCircle className="h-4 w-4 flex-shrink-0 text-red-600 mt-0.5" />
              <span>Sending spam or unsolicited emails</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <XCircle className="h-4 w-4 flex-shrink-0 text-red-600 mt-0.5" />
              <span>Infringing copyrights or trademarks</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700">
              <XCircle className="h-4 w-4 flex-shrink-0 text-red-600 mt-0.5" />
              <span>Launching DDoS attacks or abusing network resources</span>
            </li>
          </ul>
        </div>
      </TermsSection>

      {/* Section 4: Billing & Payments */}
      <TermsSection
        id="billing"
        number="4"
        title="Billing & Payments"
        icon={CreditCard}
      >
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Services are billed in advance based on the selected plan and billing cycle.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Failure to pay invoices on time may result in service suspension or termination.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>We accept major credit cards, PayPal, and other payment methods shown at checkout.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>All fees are non-refundable unless stated otherwise.</span>
          </li>
        </ul>
      </TermsSection>

      {/* Section 5: Cancellations & Refunds */}
      <TermsSection
        id="cancellations"
        number="5"
        title="Cancellations & Refunds"
        icon={XCircle}
      >
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>You may cancel your service at any time via your client dashboard.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Refunds may be available only for first-time purchases within a specified money-back period (if offered).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Domain registrations, software licenses, and setup fees are non-refundable.</span>
          </li>
        </ul>
      </TermsSection>

      {/* Section 6: Account Suspension & Termination */}
      <TermsSection
        id="suspension"
        number="6"
        title="Account Suspension & Termination"
        icon={AlertTriangle}
      >
        <p className="mb-4">We reserve the right to suspend or terminate services without notice if you:</p>
        <ul className="mb-4 space-y-3">
          <li className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600 mt-0.5" />
            <span>Violate these Terms or acceptable use policies</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600 mt-0.5" />
            <span>Engage in illegal or abusive behavior</span>
          </li>
          <li className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600 mt-0.5" />
            <span>Fail to pay invoices within the grace period</span>
          </li>
        </ul>
        <p className="text-gray-600">
          Serious violations may result in immediate termination and permanent banning.
        </p>
      </TermsSection>

      {/* Section 7: Data & Backups */}
      <TermsSection
        id="data"
        number="7"
        title="Data & Backups"
        icon={Database}
      >
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>You are responsible for maintaining your own backups unless you've purchased or enabled backup services.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>While we offer daily or on-demand backups on some plans, we do not guarantee data recovery.</span>
          </li>
        </ul>
      </TermsSection>

      {/* Section 8: Uptime Guarantee */}
      <TermsSection
        id="uptime"
        number="8"
        title="Uptime Guarantee"
        icon={Activity}
      >
        <p>
          We strive to maintain 99.9% uptime for our VPS and cloud services. However, occasional downtime 
          may occur due to maintenance or unforeseen issues. We will make reasonable efforts to notify 
          customers in advance of scheduled maintenance.
        </p>
      </TermsSection>

      {/* Section 9: Support */}
      <TermsSection
        id="support"
        number="9"
        title="Support"
        icon={Headphones}
      >
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Technical support is available 24/7 via ticket, chat, or email.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>We aim to respond to all support requests promptly.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span>Managed services include proactive monitoring, updates, and troubleshooting. Unmanaged VPS clients are responsible for their own software/server maintenance.</span>
          </li>
        </ul>
      </TermsSection>

      {/* Section 10: Modifications to Terms */}
      <TermsSection
        id="modifications"
        number="10"
        title="Modifications to Terms"
        icon={RefreshCw}
      >
        <p>
          We may update these Terms from time to time. When changes are made, we will update the effective 
          date at the top of this page. Continued use of the services implies acceptance of the new terms.
        </p>
      </TermsSection>

      {/* Section 11: Governing Law */}
      <TermsSection
        id="law"
        number="11"
        title="Governing Law"
        icon={Scale}
      >
        <p>
          These Terms shall be governed and interpreted under the laws of Jordan. Any disputes shall be 
          resolved in the courts of Jordan Legislation.
        </p>
      </TermsSection>

      {/* Contact Info */}
      <ContactSection />
    </div>
  );
};

const TermsSection = ({ id, number, title, icon: Icon, children }) => {
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
      
      <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm backdrop-blur-xl">
        {/* Section Header */}
        <div className="mb-6 flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-[#8C5695] opacity-20 blur-lg" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#8C5695]/20 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/5">
              <Icon className="h-6 w-6 text-[#8C5695]" />
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-1 font-mono text-sm font-semibold text-[#8C5695]">
              Section {number}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
        </div>

        {/* Section Content */}
        <div className="prose prose-gray max-w-none">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
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
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#8C5695]/10 to-[#986AA1]/5 blur-2xl" />
      
      <div className="relative rounded-3xl border border-[#8C5695]/20 bg-gradient-to-br from-[#8C5695]/5 to-[#986AA1]/5 p-8 text-center shadow-lg backdrop-blur-xl">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">
          Questions About These Terms?
        </h3>
        <p className="mb-6 text-gray-600">
          If you have any questions or concerns about these Terms and Conditions, please contact us.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8C5695] to-[#986AA1]" />
          <motion.div
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"
            transition={{ duration: 0.6 }}
          />
          <span className="relative text-white">Contact Us</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default TermsPage;