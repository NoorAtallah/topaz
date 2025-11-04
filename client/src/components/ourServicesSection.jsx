'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0a0014] to-black py-24 md:py-32">
      {/* Subtle Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft Gradient Orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-10 blur-[120px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #8C5695 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-block rounded-full bg-[#8C5695]/10 px-5 py-2 text-sm font-medium text-[#8C5695] backdrop-blur-sm">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Succeed Online
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-white/60"
          >
            Powerful hosting solutions designed for businesses of all sizes. 
            Simple to use, yet built for maximum performance.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <ServiceCard
            index={0}
            icon={<ServerIcon />}
            title="High-Speed VPS Hosting"
            description="Lightning-fast virtual servers that grow with your business. Get full control with root access and premium SSD storage."
            features={[
              'Full Root Access',
              'NVMe SSD Storage',
              'Instant Setup',
              '10Gbps Network'
            ]}
            highlight="99.9% Uptime"
          />

          <ServiceCard
            index={1}
            icon={<SupportIcon />}
            title="Professional Server Management"
            description="Focus on your business while our experts handle the technical details. 24/7 monitoring and support included."
            features={[
              '24/7 Expert Support',
              'Security Updates',
              'Performance Monitoring',
              'Proactive Maintenance'
            ]}
            highlight="15min Response"
          />

          <ServiceCard
            index={2}
            icon={<ShieldIcon />}
            title="Secure Daily Backups"
            description="Sleep easy knowing your data is protected. Automated daily backups with simple one-click restoration."
            features={[
              'Automated Daily Backups',
              'Encrypted Storage',
              'One-Click Restore',
              '30-Day Retention'
            ]}
            highlight="100% Protected"
          />

          <ServiceCard
            index={3}
            icon={<GlobeIcon />}
            title="Domain Registration"
            description="Find your perfect domain name and get online quickly. Free DNS management and privacy protection included."
            features={[
              'All Domain Extensions',
              'Free DNS Management',
              'Privacy Protection',
              'Easy Management'
            ]}
            highlight="Starting $9.99"
          />
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#8C5695]/20 bg-gradient-to-br from-[#8C5695]/10 to-transparent p-8 backdrop-blur-sm md:p-12">
            {/* Decorative Element */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8C5695] opacity-20 blur-[100px]" />
            
            <div className="relative z-10 text-center">
              <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Get Started?
              </h3>
              <p className="mb-8 text-lg text-white/60">
                Launch your project today with our reliable hosting solutions.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(140,86,149,0.4)]">
                  <span className="relative z-10">Get Started Now</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                </button>

                <button className="rounded-xl border-2 border-[#8C5695]/30 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:border-[#8C5695] hover:bg-[#8C5695]/10">
                  View All Plans
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#8C5695]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#8C5695]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-[#8C5695]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ index, icon, title, description, features, highlight }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card Glow */}
      <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] opacity-0 blur transition-opacity duration-500 ${isHovered ? 'opacity-30' : ''}`} />

      {/* Card Content */}
      <div className="relative h-full rounded-2xl border border-[#8C5695]/20 bg-gradient-to-br from-black/80 to-black/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-[#8C5695]/40">
        
        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex rounded-xl bg-gradient-to-br from-[#8C5695]/20 to-[#986AA1]/20 p-4 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-white/60">
          {description}
        </p>

        {/* Features List */}
        <ul className="mb-6 space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-center gap-3 text-white/70"
            >
              <svg className="h-5 w-5 flex-shrink-0 text-[#8C5695]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* Highlight Badge */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#8C5695]/10 px-4 py-2 text-sm font-semibold text-[#8C5695]">
            <span>{highlight}</span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#8C5695]"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Icon Components
const ServerIcon = () => (
  <svg className="h-8 w-8 text-[#8C5695]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const SupportIcon = () => (
  <svg className="h-8 w-8 text-[#8C5695]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="h-8 w-8 text-[#8C5695]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="h-8 w-8 text-[#8C5695]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default ServicesSection;