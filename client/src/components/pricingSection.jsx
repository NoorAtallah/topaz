'use client';

import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, HardDrive, Network, Check, ArrowRight, Zap } from 'lucide-react';

const PricingSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = useMemo(() => [
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
  ], []);

  const handleHover = useCallback((planId) => setHoveredPlan(planId), []);
  const handleLeave = useCallback(() => setHoveredPlan(null), []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white py-24 md:py-32">
      {/* Background Effects - Simplified */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-6 py-2 shadow-sm">
            <Server className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-[#8C5695]">
              PRICING PLANS
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-black uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Our Most{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Popular Plans
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Choose the perfect VPS solution for your needs
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              isHovered={hoveredPlan === plan.id}
              onHover={handleHover}
              onLeave={handleLeave}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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

const PricingCard = React.memo(({ plan, index, isHovered, onHover, onLeave }) => {
  const handleMouseEnter = useCallback(() => onHover(plan.id), [onHover, plan.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-20 blur-md" />
            <div className="relative flex items-center gap-2 rounded-full border border-[#8C5695] bg-white px-4 py-1.5 shadow-lg">
              <Zap className="h-3 w-3 text-[#8C5695]" fill="currentColor" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C5695]">
                Most Popular
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Card Container */}
      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative h-full"
        style={{
          transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* Main Card */}
        <div className="relative h-full overflow-hidden rounded-2xl border border-[#8C5695]/20 bg-white shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
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
                <div
                  key={i}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <Check className="h-3 w-3" style={{ color: plan.color }} strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="group/btn relative w-full overflow-hidden rounded-xl py-4 font-mono text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
            >
              {/* Button Background */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 group-hover/btn:opacity-90"
                style={{ 
                  background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)` 
                }}
              />

              {/* Button Content */}
              <span className="relative flex items-center justify-center gap-2">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </span>
            </button>

            {/* Fine Print */}
            <p className="mt-4 text-center font-mono text-xs text-gray-500">
              No setup fees • Cancel anytime
            </p>
          </div>

          {/* Border Accent on Hover */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute left-0 top-0 h-full w-px" style={{ background: `linear-gradient(to bottom, transparent, ${plan.color}, transparent)` }} />
            <div className="absolute right-0 top-0 h-full w-px" style={{ background: `linear-gradient(to bottom, transparent, ${plan.color}, transparent)` }} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

PricingCard.displayName = 'PricingCard';

const SpecItem = React.memo(({ icon: Icon, label, color }) => {
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
});

SpecItem.displayName = 'SpecItem';

export default PricingSection;