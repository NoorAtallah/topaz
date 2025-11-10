'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Network, Check, ArrowRight, Zap } from 'lucide-react';

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      id: 'basic',
      name: 'VPS Basic',
      price: 10,
      tagline: 'Ideal for beginners',
      popular: false,
      specs: {
        ram: '2 GB RAM',
        cpu: '1 vCPU',
        storage: '20 GB SSD',
        ip: '1 IP Address'
      },
      features: [
        'Full Root Access',
        'DDoS Protection',
        '24/7 Support',
        'Free SSL Certificate'
      ],
      color: '#8C5695',
      gradient: 'from-[#8C5695]/10 to-[#986AA1]/5'
    },
    {
      id: 'pro',
      name: 'VPS Pro',
      price: 20,
      tagline: 'Perfect for small businesses',
      popular: true,
      specs: {
        ram: '4 GB RAM',
        cpu: '2 vCPU',
        storage: '50 GB SSD',
        ip: '1 IP Address'
      },
      features: [
        'Full Root Access',
        'DDoS Protection',
        'Priority Support',
        'Free SSL Certificate',
        'Daily Backups'
      ],
      color: '#986AA1',
      gradient: 'from-[#986AA1]/10 to-[#A880B3]/5'
    },
    {
      id: 'ultra',
      name: 'VPS Ultra',
      price: 35,
      tagline: 'For high-performance needs',
      popular: false,
      specs: {
        ram: '8 GB RAM',
        cpu: '4 vCPU',
        storage: '100 GB SSD',
        ip: 'Multiple IPs'
      },
      features: [
        'Full Root Access',
        'Advanced DDoS Protection',
        'VIP Support',
        'Free SSL Certificate',
        'Daily Backups',
        'Performance Monitoring'
      ],
      color: '#A374AF',
      gradient: 'from-[#A374AF]/10 to-[#B399C7]/5'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Static Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-5 blur-[120px]" />
      </div>

      {/* Circuit Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#8C5695" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="#8C5695" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="50" y2="0" stroke="#8C5695" strokeWidth="0.5" />
              <circle cx="100" cy="50" r="1.5" fill="#986AA1" />
              <circle cx="50" cy="0" r="1.5" fill="#986AA1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-6 py-2 shadow-sm"
          >
            <Server className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-[#8C5695]">
              PRICING PLANS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-black uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Our Most{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Popular Plans
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Choose the perfect VPS solution for your needs
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              isHovered={hoveredPlan === plan.id}
              onHover={() => setHoveredPlan(plan.id)}
              onLeave={() => setHoveredPlan(null)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <button className="font-semibold text-[#8C5695] underline-offset-4 hover:underline">
              Contact our sales team
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index, isHovered, onHover, onLeave }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-4 left-1/2 z-20 -translate-x-1/2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-20 blur-md" />
            <div className="relative flex items-center gap-2 rounded-full border border-[#8C5695] bg-white px-4 py-1.5 shadow-lg">
              <Zap className="h-3 w-3 text-[#8C5695]" fill="currentColor" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C5695]">
                Most Popular
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Card Container */}
      <motion.div
        animate={{
          y: isHovered ? -12 : 0,
          scale: plan.popular ? (isHovered ? 1.05 : 1.02) : (isHovered ? 1.05 : 1),
        }}
        transition={{ duration: 0.3 }}
        className="relative h-full"
      >
        {/* Outer Glow */}
        <div 
          className="absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: `linear-gradient(135deg, ${plan.color}, transparent)` }}
        />

        {/* Main Card */}
        <div className="relative h-full overflow-hidden rounded-2xl border border-[#8C5695]/20 bg-white shadow-xl">
          {/* Corner Accent */}
          <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
            <div 
              className="absolute inset-0 rounded-bl-full"
              style={{ background: `radial-gradient(circle at top right, ${plan.color}, transparent)` }}
            />
          </div>

          {/* Content */}
          <div className="relative p-8">
            {/* Header */}
            <div className="mb-8">
              <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest" style={{ color: plan.color }}>
                {plan.name}
              </h3>
              
              {/* Price Display */}
              <div className="mb-3 flex items-baseline gap-2">
                <span className="text-5xl font-black text-gray-900">${plan.price}</span>
                <span className="text-lg text-gray-500">/month</span>
              </div>

              <p className="text-sm text-gray-600">{plan.tagline}</p>
            </div>

            {/* Tech Specs Panel */}
            <div className="mb-8">
              <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full" style={{ backgroundColor: plan.color }} />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Specifications
                  </span>
                </div>
                
                <div className="space-y-3">
                  <SpecItem icon={Server} label={plan.specs.ram} color={plan.color} />
                  <SpecItem icon={Cpu} label={plan.specs.cpu} color={plan.color} />
                  <SpecItem icon={HardDrive} label={plan.specs.storage} color={plan.color} />
                  <SpecItem icon={Network} label={plan.specs.ip} color={plan.color} />
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-3">
              {plan.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <Check className="h-3 w-3" style={{ color: plan.color }} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative w-full overflow-hidden rounded-xl py-4 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-lg"
            >
              {/* Button Background */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 group-hover/btn:opacity-90"
                style={{ 
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` 
                }}
              />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:translate-x-full"
                transition={{ duration: 0.6 }}
              />

              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </motion.button>

            {/* Fine Print */}
            <p className="mt-4 text-center font-mono text-xs text-gray-500">
              No setup fees • Cancel anytime
            </p>
          </div>

          {/* Static Border Accent on Hover */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-0 top-0 h-full w-px" style={{ background: `linear-gradient(to bottom, transparent, ${plan.color}, transparent)` }} />
            <div className="absolute right-0 top-0 h-full w-px" style={{ background: `linear-gradient(to bottom, transparent, ${plan.color}, transparent)` }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SpecItem = ({ icon: Icon, label, color }) => {
  return (
    <div className="flex items-center gap-3">
      <div 
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="h-3.5 w-3.5" style={{ color }} strokeWidth={2} />
      </div>
      <span className="font-mono text-xs text-gray-700">{label}</span>
    </div>
  );
};

export default PricingSection;