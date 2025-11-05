'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Shield,
  Zap,
  Users,
  Target,
  Heart,
  Code,
  Briefcase,
  ShoppingCart,
  Store,
  Building,
  CheckCircle,
  Settings,
  Network,
  Database,
  Headphones,
  Cloud,
  Globe,
  Cpu,
  TrendingUp,
  Lock,
  LifeBuoy
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0514] to-black" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
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

        {/* Mission Section */}
        <MissionSection />

        {/* What Makes Us Different */}
        <DifferenceSection />

        {/* Who We Serve */}
        <WhoWeServeSection />

        {/* What We Offer */}
        <WhatWeOfferSection />

        {/* Stats Section */}
        <StatsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-sm"
          >
            <Heart className="h-4 w-4 text-[#8C5695]" fill="currentColor" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              ABOUT US
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              TOPAZ
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-white/70"
          >
            Your trusted partner in powerful, secure, and scalable virtual server solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-white/60"
          >
            We're a passionate team offering reliable hosting, expert support, and full server 
            management to help businesses and developers grow and succeed online.
          </motion.p>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mx-auto mt-12 h-px w-64 origin-center bg-gradient-to-r from-transparent via-[#8C5695] to-transparent"
        />
      </div>
    </section>
  );
};

const MissionSection = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-12 backdrop-blur-xl md:p-16"
        >
          {/* Background Glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/10 blur-2xl" />

          {/* Corner Accent */}
          <div className="absolute right-0 top-0 h-48 w-48 opacity-20">
            <div className="absolute inset-0 rounded-bl-full bg-gradient-to-br from-[#8C5695] via-[#986AA1] to-transparent" />
          </div>

          <div className="relative text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="mb-8 inline-flex"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-[#8C5695] opacity-50 blur-2xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-[#8C5695]/50 bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/20">
                  <Target className="h-10 w-10 text-[#8C5695]" strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 text-4xl font-black uppercase tracking-tight text-white md:text-5xl"
            >
              Our{' '}
              <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h2>

            {/* Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl leading-relaxed text-white/80"
            >
              To empower individuals and businesses with world-class virtual hosting solutions 
              that are fast, reliable, and affordable — backed by unmatched support.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DifferenceSection = () => {
  const differences = [
    {
      icon: Zap,
      title: 'Performance-Driven',
      description: 'Lightning-fast servers optimized for maximum speed and efficiency.',
      color: '#8C5695'
    },
    {
      icon: Settings,
      title: 'Total Flexibility',
      description: 'Customize every aspect of your server to match your exact needs.',
      color: '#986AA1'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data 24/7.',
      color: '#A374AF'
    },
    {
      icon: Users,
      title: 'Real Human Support',
      description: 'Expert technicians ready to help you anytime, day or night.',
      color: '#8C5695'
    },
    {
      icon: TrendingUp,
      title: 'Built for Growth',
      description: 'Scalable infrastructure that grows seamlessly with your business.',
      color: '#986AA1'
    }
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Different?
            </span>
          </h2>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differences.map((item, index) => (
            <DifferenceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DifferenceCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div
        className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }}
      />

      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-8 backdrop-blur-xl">
        <div className="mb-6 inline-flex">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl opacity-40 blur-xl"
              style={{ backgroundColor: item.color }}
            />
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-xl border"
              style={{
                borderColor: `${item.color}40`,
                background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
              }}
            >
              <Icon className="h-7 w-7" style={{ color: item.color }} strokeWidth={2} />
            </div>
          </div>
        </div>

        <div className="mb-2 flex items-center gap-2">
          <CheckCircle className="h-5 w-5" style={{ color: item.color }} />
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
      </div>
    </motion.div>
  );
};

const WhoWeServeSection = () => {
  const audiences = [
    {
      icon: Code,
      title: 'Developers & DevOps Engineers',
      description: 'Full control and flexibility for your projects',
      color: '#8C5695'
    },
    {
      icon: Briefcase,
      title: 'Digital Agencies & Resellers',
      description: 'White-label solutions and bulk pricing',
      color: '#986AA1'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Startups',
      description: 'Fast, secure hosting for online stores',
      color: '#A374AF'
    },
    {
      icon: Store,
      title: 'Web Hosting Entrepreneurs',
      description: 'Start your hosting business with us',
      color: '#8C5695'
    },
    {
      icon: Building,
      title: 'Small & Medium-Sized Businesses',
      description: 'Reliable infrastructure for growing companies',
      color: '#986AA1'
    }
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Who We{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Serve?
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <AudienceCard key={index} audience={audience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AudienceCard = ({ audience, index }) => {
  const Icon = audience.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-6 backdrop-blur-xl">
          <div className="flex items-start gap-4">
            <div className="relative flex-shrink-0">
              <div
                className="absolute inset-0 rounded-lg opacity-30 blur-lg"
                style={{ backgroundColor: audience.color }}
              />
              <div
                className="relative flex h-12 w-12 items-center justify-center rounded-lg border"
                style={{
                  borderColor: `${audience.color}40`,
                  background: `linear-gradient(135deg, ${audience.color}20, ${audience.color}10)`,
                }}
              >
                <Icon className="h-6 w-6" style={{ color: audience.color }} strokeWidth={2} />
              </div>
            </div>

            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs font-bold"
                  style={{
                    backgroundColor: `${audience.color}20`,
                    color: audience.color
                  }}
                >
                  {index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{audience.title}</h3>
              <p className="text-sm text-white/60">{audience.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhatWeOfferSection = () => {
  const offerings = [
    { icon: Server, text: 'Virtual Private Servers (VPS)', color: '#8C5695' },
    { icon: Settings, text: 'Managed & Unmanaged Hosting', color: '#986AA1' },
    { icon: Network, text: 'Dedicated IPs and Private Networking', color: '#A374AF' },
    { icon: Cpu, text: 'Customizable Resources', color: '#8C5695' },
    { icon: Settings, text: 'Control Panels: cPanel, Plesk, Interworx', color: '#986AA1' },
    { icon: Headphones, text: '24/7 Monitoring & Support', color: '#A374AF' },
    { icon: Cloud, text: 'Secure, Scalable Cloud Infrastructure', color: '#8C5695' },
    { icon: Globe, text: 'Domain & Hosting Bundles', color: '#986AA1' }
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            What We{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Offer?
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offerings.map((offering, index) => (
            <OfferingCard key={index} offering={offering} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferingCard = ({ offering, index }) => {
  const Icon = offering.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-black/90 to-black/70 p-6 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
            style={{
              backgroundColor: `${offering.color}15`,
              borderColor: `${offering.color}30`
            }}
          >
            <Icon className="h-5 w-5" style={{ color: offering.color }} strokeWidth={2} />
          </div>
          <div className="flex items-center gap-2">
            <span
              className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs font-bold"
              style={{
                backgroundColor: `${offering.color}20`,
                color: offering.color
              }}
            >
              {index + 1}
            </span>
            <span className="text-sm font-semibold text-white/90">{offering.text}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: '5000+', label: 'Active Clients', icon: Users },
    { value: '99.9%', label: 'Uptime SLA', icon: Zap },
    { value: '24/7', label: 'Expert Support', icon: LifeBuoy },
    { value: '100%', label: 'Satisfaction', icon: Heart }
  ];

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex">
                  <Icon className="h-8 w-8 text-[#8C5695]" />
                </div>
                <div className="mb-2 bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-5xl font-black text-transparent">
                  {stat.value}
                </div>
                <div className="font-mono text-sm uppercase tracking-wider text-white/60">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
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
            Join thousands of satisfied customers and experience the TOPAZ difference
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
              <span className="relative text-white">View Our Plans</span>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden rounded-xl px-8 py-4 font-mono text-sm font-bold uppercase tracking-wider"
            >
              <div className="absolute inset-0 bg-white/5" />
              <div className="absolute inset-0 rounded-xl border-2 border-[#8C5695]/50" />
              <span className="relative text-white">Contact Us</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;