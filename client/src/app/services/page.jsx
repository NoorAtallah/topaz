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
  Monitor,
  Cloud,
  Code,
  Headphones,
  CreditCard,
  Database,
  Lock,
  Zap,
  Globe,
  Terminal,
  Package,
  CheckCircle,
  ChevronRight,
  Layers,
  Activity
} from 'lucide-react';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'vps-hosting',
      icon: Server,
      title: 'VPS Hosting Plans',
      description: 'We offer VPS plans for every need: Standard for small businesses, Quasar for growing apps, and Turbo for high performance. Choose Managed for expert support or Unmanaged for full control.',
      color: '#8C5695',
      features: [
        'Standard VPS for small businesses',
        'Quasar for growing applications',
        'Turbo for high performance',
        'Managed or Unmanaged options'
      ]
    },
    {
      id: 'server-resources',
      icon: Cpu,
      title: 'Server Resources',
      description: 'Custom VPS Features: Choose RAM from 1 GB to 64 GB to fit your needs. Enjoy fast performance with SSD storage, or boost speed even more with an NVMe upgrade for ultra-fast read/write access.',
      color: '#986AA1',
      features: [
        'RAM: 1 GB to 64 GB',
        'Fast SSD storage',
        'NVMe upgrade available',
        'Ultra-fast read/write access'
      ]
    },
    {
      id: 'ip-network',
      icon: Network,
      title: 'IP & Network',
      description: 'Network & Security Features: Get a dedicated IP for better SSL, email, and SEO. Use private networking to connect VPS instances internally. Enjoy IPv6 support for future-ready addressing and stay safe with built-in DDoS protection.',
      color: '#A374AF',
      features: [
        'Dedicated IP addresses',
        'Private networking',
        'IPv6 support',
        'Built-in DDoS protection'
      ]
    },
    {
      id: 'control-panels',
      icon: Settings,
      title: 'Software & Control Panels',
      description: 'Control Panels & Tools: Manage your server easily with cPanel/WHM for Linux or Plesk for both Windows and Linux. Advanced users can opt for the lightweight Interworx Panel. Plus, install over 400 apps instantly with Softaculous Auto Installer.',
      color: '#8C5695',
      features: [
        'cPanel/WHM for Linux',
        'Plesk (Windows & Linux)',
        'Interworx Panel',
        'Softaculous - 400+ apps'
      ]
    },
    {
      id: 'operating-systems',
      icon: Monitor,
      title: 'Operating Systems',
      description: 'Choose from a variety of OS options to fit your needs: CentOS 7/8, Ubuntu 20.04/22.04, Debian, AlmaLinux, and Windows Server (license optional).',
      color: '#986AA1',
      features: [
        'CentOS 7 / 8',
        'Ubuntu 20.04 / 22.04',
        'Debian & AlmaLinux',
        'Windows Server available'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security Features',
      description: 'Protect your server with free SSL certificates, advanced firewall configuration, and malware scanning tools like CXS or ImunifyAV. Stay safe with regular security patches to keep your system up to date.',
      color: '#A374AF',
      features: [
        'Free SSL certificates',
        'Advanced firewall config',
        'Malware scanning (CXS/ImunifyAV)',
        'Regular security patches'
      ]
    },
    {
      id: 'backups',
      icon: Database,
      title: 'Backups & Storage',
      description: 'Backup Solutions: Keep your data safe with automated daily backups and on-demand snapshots before any changes. Need more room? Add extra backup storage for peace of mind.',
      color: '#8C5695',
      features: [
        'Automated daily backups',
        'On-demand snapshots',
        'Extra backup storage',
        'Data protection guarantee'
      ]
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Features',
      description: 'Cloud & Scalability Features: Scale easily with Cloud VPS infrastructure that grows with your needs. Ensure performance and uptime with load balancing and high availability setups for critical services.',
      color: '#986AA1',
      features: [
        'Scalable Cloud VPS',
        'Load balancing',
        'High availability',
        'Auto-scaling options'
      ]
    },
    {
      id: 'developer',
      icon: Code,
      title: 'Developer Tools',
      description: 'Developer Access & Control: Gain full root access for total server control, use SSH access for secure management, and leverage API access to automate tasks and integrate with your systems.',
      color: '#A374AF',
      features: [
        'Full root access',
        'Secure SSH access',
        'API integration',
        'Automation tools'
      ]
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Support & Management',
      description: 'Support & Management Services: Get 24/7 technical support from our expert team. Choose a fully managed VPS so you can focus on your business while we handle the rest. Enjoy free migration services and real-time server monitoring.',
      color: '#8C5695',
      features: [
        '24/7 technical support',
        'Fully managed VPS',
        'Free migration services',
        'Real-time monitoring'
      ]
    },
    {
      id: 'billing',
      icon: CreditCard,
      title: 'Billing & Licensing',
      description: 'Billing & Hosting Add-ons: Streamline operations with WHMCS integration for automated billing and support. Get discounted license add-ons for cPanel, Plesk, or Softaculous. Bundle your hosting and domains for a complete solution.',
      color: '#986AA1',
      features: [
        'WHMCS integration',
        'Discounted licenses',
        'Domain bundling',
        'Flexible payment options'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
        
        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -100, 0],
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

        {/* Services Grid */}
        <section className="relative px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                />
              ))}
            </div>
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
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <Layers className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              OUR SERVICES
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/70"
          >
            Welcome to your one-stop solution for powerful VPS hosting and professional server services. 
            Whether you're a developer, business owner, or reseller, we have exactly what you need — fast, secure, and scalable.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            <StatBadge icon={Zap} label="99.9% Uptime" />
            <StatBadge icon={Shield} label="DDoS Protected" />
            <StatBadge icon={Activity} label="24/7 Support" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-0 left-1/2 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8C5695] to-transparent"
      />
    </section>
  );
};

const StatBadge = ({ icon: Icon, label }) => {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#8C5695]/30 bg-[#8C5695]/5 px-4 py-2 backdrop-blur-sm">
      <Icon className="h-4 w-4 text-[#8C5695]" />
      <span className="font-mono text-sm font-semibold text-white/80">
        {label}
      </span>
    </div>
  );
};

const ServiceCard = ({ service, index, isActive, onClick }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
      >
        {/* Glow Effect */}
        <div
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
        />

        {/* Card */}
        <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 backdrop-blur-xl">
          {/* Animated Border */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${service.color}40, transparent)`,
            }}
            animate={{
              opacity: isActive ? 1 : 0.3,
            }}
          />

          {/* Corner Accent */}
          <div className="absolute right-0 top-0 h-32 w-32 opacity-20">
            <div
              className="absolute inset-0 rounded-bl-full"
              style={{ background: `radial-gradient(circle at top right, ${service.color}, transparent)` }}
            />
          </div>

          {/* Content */}
          <div className="relative p-8">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="mb-6 inline-flex"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-xl opacity-40 blur-xl"
                  style={{ backgroundColor: service.color }}
                />
                <div
                  className="relative flex h-16 w-16 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${service.color}40`,
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  }}
                >
                  <Icon className="h-8 w-8" style={{ color: service.color }} strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold text-white">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              {service.description}
            </p>

            {/* Features List - Collapsible */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mb-4 space-y-2 rounded-xl border border-white/5 bg-white/5 p-4">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        <span className="text-xs text-white/70">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Learn More Button */}
            <motion.button
              onClick={onClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full overflow-hidden rounded-xl py-3 font-mono text-sm font-bold uppercase tracking-wider"
            >
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover/btn:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                }}
              />
              <div className="absolute inset-0 rounded-xl border" style={{ borderColor: `${service.color}40` }} />
              
              <span className="relative flex items-center justify-center gap-2" style={{ color: service.color }}>
                {isActive ? 'Show Less' : 'Learn More'}
                <motion.div
                  animate={{ rotate: isActive ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </span>
            </motion.button>
          </div>

          {/* Data Stream Effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 top-0 h-full w-px"
              style={{
                background: `linear-gradient(to bottom, transparent, ${service.color}, transparent)`,
              }}
            />
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
            Ready to{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Choose the perfect plan for your needs and launch your project today
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton primary href="#">
              View Pricing Plans
            </CTAButton>
            <CTAButton href="#">
              Contact Sales
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTAButton = ({ children, primary, href }) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
    >
      <div
        className={`absolute inset-0 ${
          primary ? 'bg-gradient-to-r from-[#8C5695] to-[#986AA1]' : 'bg-white/5'
        }`}
      />
      
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"
        transition={{ duration: 0.6 }}
      />

      <div
        className={`absolute inset-0 rounded-xl border-2 ${
          primary ? 'border-[#8C5695]/50' : 'border-[#8C5695]/30'
        }`}
      />

      <span className="relative flex items-center gap-2 text-white">
        {children}
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </motion.a>
  );
};

export default ServicesPage;