'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Shield,
  HelpCircle,
  ChevronDown,
  Settings,
  Monitor,
  Lock,
  Database,
  Network,
  Headphones,
  CreditCard,
  Search,
  CheckCircle,
  Zap
} from 'lucide-react';

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'vps', label: 'VPS Hosting', icon: Server },
    { id: 'control', label: 'Control Panels & OS', icon: Settings },
    { id: 'security', label: 'Security & Backups', icon: Shield },
    { id: 'network', label: 'IP & Networking', icon: Network },
    { id: 'support', label: 'Support & Management', icon: Headphones },
    { id: 'billing', label: 'Billing & Licenses', icon: CreditCard }
  ];

  const faqs = [
    // VPS Hosting
    {
      category: 'vps',
      question: 'What is VPS hosting?',
      answer: 'A VPS (Virtual Private Server) is a virtual machine that runs its own operating system and resources. It offers more control, power, and isolation than shared hosting.',
      color: '#8C5695'
    },
    {
      category: 'vps',
      question: "What's the difference between Standard, Quasar, and Turbo VPS?",
      answer: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span><strong>Standard:</strong> Ideal for small websites and dev environments.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span><strong>Quasar:</strong> Great for medium apps needing more performance.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#8C5695] mt-0.5" />
            <span><strong>Turbo:</strong> Designed for high-traffic, resource-heavy apps.</span>
          </li>
        </ul>
      ),
      color: '#8C5695'
    },
    {
      category: 'vps',
      question: 'Can I upgrade my VPS plan later?',
      answer: 'Yes, you can upgrade your CPU, RAM, storage, and bandwidth at any time — with no downtime.',
      color: '#8C5695'
    },

    // Control Panels & OS
    {
      category: 'control',
      question: 'Which control panels do you offer?',
      answer: 'We support cPanel/WHM, Plesk, and Interworx, depending on your OS and preference.',
      color: '#986AA1'
    },
    {
      category: 'control',
      question: 'What operating systems are available?',
      answer: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#986AA1] mt-0.5" />
            <span>CentOS 7 / 8</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#986AA1] mt-0.5" />
            <span>Ubuntu 20.04 / 22.04</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#986AA1] mt-0.5" />
            <span>Debian</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#986AA1] mt-0.5" />
            <span>AlmaLinux</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-[#986AA1] mt-0.5" />
            <span>Windows Server (with optional licensing)</span>
          </li>
        </ul>
      ),
      color: '#986AA1'
    },
    {
      category: 'control',
      question: 'Can I install my own software or OS?',
      answer: "Yes — with full root access, you're free to install custom applications or re-install your preferred OS.",
      color: '#986AA1'
    },

    // Security & Backups
    {
      category: 'security',
      question: 'Do you provide SSL certificates?',
      answer: 'Yes! Free SSL certificates are included with all hosting plans.',
      color: '#A374AF'
    },
    {
      category: 'security',
      question: 'Is DDoS protection included?',
      answer: 'Yes. All plans include basic DDoS protection. Turbo VPS plans come with enhanced protection.',
      color: '#A374AF'
    },
    {
      category: 'security',
      question: 'Are backups included?',
      answer: 'We offer automated daily backups and on-demand snapshots. Additional backup storage is available as an add-on.',
      color: '#A374AF'
    },

    // IP & Networking
    {
      category: 'network',
      question: 'Do I get a dedicated IP?',
      answer: 'Yes, each VPS comes with at least one dedicated IPv4 address. Additional IPs are available.',
      color: '#8C5695'
    },
    {
      category: 'network',
      question: 'Is IPv6 supported?',
      answer: 'Yes, we offer native IPv6 support on all VPS plans.',
      color: '#8C5695'
    },
    {
      category: 'network',
      question: 'Can I use private networking?',
      answer: 'Yes. You can set up private/internal networks between your VPS instances for secure, internal communication.',
      color: '#8C5695'
    },

    // Support & Management
    {
      category: 'support',
      question: 'Is support available 24/7?',
      answer: 'Yes, our technical support team is available 24/7/365.',
      color: '#986AA1'
    },
    {
      category: 'support',
      question: 'Do you offer managed services?',
      answer: 'Yes. We offer Managed VPS plans where we take care of updates, security patches, and performance tuning.',
      color: '#986AA1'
    },
    {
      category: 'support',
      question: 'Can you migrate my website or server?',
      answer: 'Absolutely. We offer free migration services for new clients.',
      color: '#986AA1'
    },

    // Billing & Licenses
    {
      category: 'billing',
      question: 'Which payment methods do you accept?',
      answer: 'We accept major credit/debit cards, PayPal, and select cryptocurrencies.',
      color: '#A374AF'
    },
    {
      category: 'billing',
      question: 'Can I bundle a domain with my hosting?',
      answer: 'Yes! We offer domain registration and hosting bundles for convenience and savings.',
      color: '#A374AF'
    },
    {
      category: 'billing',
      question: 'Do you provide licenses for cPanel or Plesk?',
      answer: 'Yes, you can add cPanel, Plesk, and Softaculous licenses to your plan at discounted prices.',
      color: '#A374AF'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (typeof faq.answer === 'string' && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* FAQ List */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    faq={faq}
                    index={index}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>
            ) : (
              <NoResults searchQuery={searchQuery} />
            )}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <CTASection />
      </div>
    </div>
  );
};

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <HelpCircle className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-gray-700">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-gray-900 sm:text-6xl md:text-7xl"
          >
            How Can We{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Help You?
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-gray-600"
          >
            Find answers to common questions about our VPS hosting services
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-2xl"
          >
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] opacity-20 blur transition-opacity group-focus-within:opacity-40" />
              <div className="relative flex items-center gap-3 rounded-2xl border border-[#8C5695]/20 bg-white px-6 py-4 shadow-lg backdrop-blur-xl">
                <Search className="h-5 w-5 text-[#8C5695]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="flex-1 bg-transparent font-mono text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="relative px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className="group relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div
                  className={`relative flex items-center gap-2 rounded-xl border px-4 py-2 backdrop-blur-sm transition-colors ${
                    isActive
                      ? 'border-transparent'
                      : 'border-[#8C5695]/20 bg-gray-50 hover:border-[#8C5695] hover:bg-[#8C5695]/5'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#8C5695]'}`} />
                  <span
                    className={`font-mono text-sm font-semibold ${
                      isActive ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {category.label}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ faq, index, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative"
    >
      <div
        className={`absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'group-hover:opacity-100'
        }`}
        style={{ background: `linear-gradient(135deg, ${faq.color}30, transparent)` }}
      />

      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm backdrop-blur-xl">
        {/* Question Button */}
        <motion.button
          onClick={onClick}
          className="w-full p-6 text-left transition-colors hover:bg-gray-50"
          whileHover={{ x: 4 }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Icon */}
              <div
                className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border"
                style={{
                  backgroundColor: `${faq.color}08`,
                  borderColor: `${faq.color}20`
                }}
              >
                <HelpCircle className="h-5 w-5" style={{ color: faq.color }} />
              </div>

              {/* Question */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 pr-8">
                  {faq.question}
                </h3>
              </div>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg border"
                style={{ 
                  backgroundColor: `${faq.color}10`,
                  borderColor: `${faq.color}20`
                }}
              >
                <ChevronDown className="h-5 w-5" style={{ color: faq.color }} />
              </div>
            </motion.div>
          </div>
        </motion.button>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="border-t border-gray-100 p-6 pl-20">
                <div className="text-gray-700 leading-relaxed">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const NoResults = ({ searchQuery }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-16 text-center"
    >
      <div className="mb-6 inline-flex">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-20 blur-2xl" />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#8C5695]/30 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/10">
            <Search className="h-10 w-10 text-[#8C5695]" />
          </div>
        </div>
      </div>

      <h3 className="mb-2 text-2xl font-bold text-gray-900">
        No results found
      </h3>
      <p className="mb-6 text-gray-600">
        {searchQuery ? (
          <>We couldn't find any questions matching "<span className="text-[#8C5695]">{searchQuery}</span>"</>
        ) : (
          <>No questions available in this category</>
        )}
      </p>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-mono text-sm font-semibold text-[#8C5695] underline-offset-4 hover:underline"
      >
        Try a different search
      </button>
    </motion.div>
  );
};

const CTASection = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-[#8C5695]/5 to-[#986AA1]/5 p-12 text-center shadow-lg backdrop-blur-xl"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/5 blur-2xl" />
          
          <div className="relative">
            <div className="mb-6 inline-flex">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#8C5695] opacity-30 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-[#8C5695]/30 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/10">
                  <Headphones className="h-8 w-8 text-[#8C5695]" />
                </div>
              </div>
            </div>

            <h2 className="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 md:text-4xl">
              Still Have{' '}
              <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              We're committed to providing prompt and effective solutions to ensure your satisfaction.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8C5695] to-[#986AA1]" />
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
                <span className="relative flex items-center gap-2 text-white">
                  <Headphones className="h-4 w-4" />
                  Contact Support
                </span>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
              >
                <div className="absolute inset-0 bg-gray-50" />
                <div className="absolute inset-0 rounded-xl border-2 border-[#8C5695]/30" />
                <span className="relative flex items-center gap-2 text-gray-900">
                  <Zap className="h-4 w-4" />
                  About Us
                </span>
              </motion.a>
            </div>

            <p className="mt-6 font-mono text-xs text-gray-500">
              Available 24/7 • Average response time: &lt; 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPage;