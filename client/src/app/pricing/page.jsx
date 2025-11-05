'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cpu,
  HardDrive,
  Network,
  Shield,
  Settings,
  Database,
  Cloud,
  CreditCard,
  Zap,
  Check,
  ChevronRight,
  Globe,
  Lock,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Plans', icon: Layers },
    { id: 'vps', label: 'VPS Hosting', icon: Server },
    { id: 'resources', label: 'Resources', icon: Cpu },
    { id: 'software', label: 'Software', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'backups', label: 'Backups', icon: Database },
    { id: 'cloud', label: 'Cloud', icon: Cloud },
    { id: 'billing', label: 'Billing', icon: CreditCard }
  ];

  const plans = [
    // VPS Hosting Plans
    {
      category: 'vps',
      id: 'standard',
      name: 'Standard VPS',
      price: 19.99,
      period: 'month',
      description: 'Balanced resources, good for small businesses.',
      icon: Server,
      color: '#8C5695',
      popular: false,
      features: [
        'Balanced CPU & RAM',
        'Standard SSD storage',
        'Perfect for small sites',
        '24/7 support included'
      ]
    },
    {
      category: 'vps',
      id: 'quasar',
      name: 'Quasar VPS',
      price: 39.99,
      period: 'month',
      description: 'More CPU/RAM for growing apps.',
      icon: Zap,
      color: '#986AA1',
      popular: true,
      features: [
        'Enhanced CPU power',
        'Increased RAM',
        'Growing applications',
        'Priority support'
      ]
    },
    {
      category: 'vps',
      id: 'turbo',
      name: 'Turbo VPS',
      price: 69.99,
      period: 'month',
      description: 'High-speed, high-performance VPS.',
      icon: Activity,
      color: '#A374AF',
      popular: false,
      features: [
        'Maximum performance',
        'High-speed processing',
        'Enterprise-grade',
        'VIP support'
      ]
    },
    {
      category: 'vps',
      id: 'managed',
      name: 'Managed VPS',
      price: 20.00,
      period: 'month',
      description: 'Expert management, updates, security etc.',
      icon: Settings,
      color: '#8C5695',
      popular: false,
      features: [
        'Full management',
        'Automatic updates',
        'Security monitoring',
        'Expert support'
      ]
    },

    // Resource Upgrades
    {
      category: 'resources',
      id: 'ram',
      name: 'RAM Options',
      price: 5,
      period: 'GB',
      description: '1 GB to 64 GB.',
      icon: Cpu,
      color: '#986AA1',
      isAddon: true
    },
    {
      category: 'resources',
      id: 'ssd',
      name: 'SSD Storage',
      price: 10,
      period: '100GB',
      description: 'Faster storage.',
      icon: HardDrive,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'resources',
      id: 'nvme',
      name: 'NVMe Upgrade',
      price: '+25%',
      period: 'on storage',
      description: 'Faster storage (on SSD price).',
      icon: Zap,
      color: '#A374AF',
      isAddon: true
    },
    {
      category: 'resources',
      id: 'dedicated-ip',
      name: 'Dedicated IP',
      price: 3,
      period: 'IP/month',
      description: 'Unique IP address.',
      icon: Network,
      color: '#986AA1',
      isAddon: true
    },

    // Software & Control Panels
    {
      category: 'software',
      id: 'cpanel',
      name: 'cPanel / WHM',
      price: 15,
      period: 'month',
      description: 'Most popular Linux panel.',
      icon: Settings,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'software',
      id: 'plesk',
      name: 'Plesk Panel',
      price: 12,
      period: 'month',
      description: 'For Linux and Windows.',
      icon: Settings,
      color: '#986AA1',
      isAddon: true
    },
    {
      category: 'software',
      id: 'interworx',
      name: 'Interworx Panel',
      price: 10,
      period: 'month',
      description: 'Lightweight panel for advanced use.',
      icon: Settings,
      color: '#A374AF',
      isAddon: true
    },

    // Security Add-ons
    {
      category: 'security',
      id: 'ssl',
      name: 'Free SSL',
      price: 3.99,
      period: 'month',
      description: 'HTTPS for websites.',
      icon: Lock,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'security',
      id: 'firewall',
      name: 'Firewall Configuration',
      price: 5.99,
      period: 'month',
      description: 'Custom traffic rules.',
      icon: Shield,
      color: '#986AA1',
      isAddon: true
    },
    {
      category: 'security',
      id: 'malware',
      name: 'Malware Scanning',
      price: 8,
      period: 'month',
      description: 'CXS / ImunifyAV',
      icon: Shield,
      color: '#A374AF',
      isAddon: true
    },
    {
      category: 'security',
      id: 'ddos',
      name: 'DDoS Protection',
      price: 5.99,
      period: 'month',
      description: 'Real-time defense (Turbo only).',
      icon: Shield,
      color: '#8C5695',
      isAddon: true
    },

    // Backups & Storage
    {
      category: 'backups',
      id: 'auto-backup',
      name: 'Automated Backups',
      price: 7,
      period: 'month',
      description: 'Daily backups.',
      icon: Database,
      color: '#986AA1',
      isAddon: true
    },
    {
      category: 'backups',
      id: 'snapshots',
      name: 'On-Demand Snapshots',
      price: 1.99,
      period: 'month',
      description: 'Manual restore points.',
      icon: Database,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'backups',
      id: 'extra-backup',
      name: 'Extra Backup Storage',
      price: 5,
      period: '100GB',
      description: 'More backup space.',
      icon: Database,
      color: '#A374AF',
      isAddon: true
    },

    // Cloud Features
    {
      category: 'cloud',
      id: 'cloud-vps',
      name: 'Cloud VPS',
      price: 29.99,
      period: 'month',
      description: 'Elastic & scalable VPS.',
      icon: Cloud,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'cloud',
      id: 'load-balancing',
      name: 'Load Balancing',
      price: 'Custom',
      period: 'pricing',
      description: 'Distribute traffic.',
      icon: Activity,
      color: '#986AA1',
      isAddon: true,
      isCustom: true
    },
    {
      category: 'cloud',
      id: 'high-availability',
      name: 'High Availability',
      price: 'Custom',
      period: 'pricing',
      description: 'Clustering for uptime-critical systems.',
      icon: Layers,
      color: '#A374AF',
      isAddon: true,
      isCustom: true
    },

    // Billing & Licensing
    {
      category: 'billing',
      id: 'whmcs',
      name: 'WHMCS Integration',
      price: 14.99,
      period: 'month',
      description: 'Billing, provisioning, support system.',
      icon: CreditCard,
      color: '#8C5695',
      isAddon: true
    },
    {
      category: 'billing',
      id: 'licenses',
      name: 'License Add-ons',
      price: 'Discounted',
      period: '',
      description: 'Buy panels/licenses via host.',
      icon: CreditCard,
      color: '#986AA1',
      isAddon: true,
      isCustom: true
    },
    {
      category: 'billing',
      id: 'domain-bundle',
      name: 'Domain + VPS Bundle',
      price: 10.99,
      period: 'month',
      description: 'Add domain with hosting.',
      icon: Globe,
      color: '#A374AF',
      isAddon: true
    }
  ];

  const filteredPlans = activeCategory === 'all' 
    ? plans 
    : plans.filter(plan => plan.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] blur-[120px]"
        />
      </div>

      {/* Grid Pattern */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(140,86,149,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(140,86,149,0.5)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Pricing Grid */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                {filteredPlans.map((plan, index) => (
                  <PricingCard key={plan.id} plan={plan} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#8C5695] animate-pulse" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              YOUR JOURNEY BEGINS NOW
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Explore Our{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Pricing Plans!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-xl text-white/70"
          >
            Find the perfect VPS hosting solution tailored to your needs
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="relative px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
                      : 'border-[#8C5695]/30 bg-white/5 hover:border-[#8C5695] hover:bg-[#8C5695]/10'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#8C5695]'}`} />
                  <span
                    className={`font-mono text-sm font-semibold ${
                      isActive ? 'text-white' : 'text-white/70'
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

const PricingCard = ({ plan, index }) => {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group relative"
    >
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-3 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-[#8C5695] blur-md" />
            <div className="relative flex items-center gap-2 rounded-full border border-[#8C5695] bg-black px-3 py-1">
              <Zap className="h-3 w-3 text-[#8C5695]" fill="currentColor" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C5695]">
                Popular
              </span>
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        whileHover={{ y: -8, scale: plan.popular ? 1.03 : 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
      >
        <div
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(135deg, ${plan.color}, transparent)` }}
        />

        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl">
          <div className="absolute right-0 top-0 h-24 w-24 opacity-20">
            <div
              className="absolute inset-0 rounded-bl-full"
              style={{ background: `radial-gradient(circle at top right, ${plan.color}, transparent)` }}
            />
          </div>

          <div className="relative p-6">
            <div className="mb-4 inline-flex">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-lg opacity-40 blur-lg"
                  style={{ backgroundColor: plan.color }}
                />
                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: `${plan.color}40`,
                    background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}10)`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: plan.color }} strokeWidth={2} />
                </div>
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold text-white">{plan.name}</h3>

            <div className="mb-3 flex items-baseline gap-1">
              <span className="text-3xl font-black text-white">
                {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
              </span>
              <span className="text-sm text-white/40">
                {plan.period && `/ ${plan.period}`}
              </span>
            </div>

            <p className="mb-4 text-sm text-white/60">{plan.description}</p>

            {plan.features && (
              <div className="mb-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: plan.color }}
                    />
                    <span className="text-xs text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full overflow-hidden rounded-lg py-3 font-mono text-sm font-bold uppercase tracking-wider"
            >
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${plan.color}40, ${plan.color}20)`,
                }}
              />
              <div
                className="absolute inset-0 rounded-lg border"
                style={{ borderColor: `${plan.color}40` }}
              />

              <span
                className="relative flex items-center justify-center gap-2"
                style={{ color: plan.color }}
              >
                {plan.isCustom ? 'Contact Us' : plan.isAddon ? 'Add to Plan' : 'Get Started'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BottomCTA = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Need a{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Custom Solution?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Contact our sales team to build a plan tailored specifically for your requirements
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
            <span className="relative flex items-center gap-2 text-white">
              Contact Sales Team
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPage;