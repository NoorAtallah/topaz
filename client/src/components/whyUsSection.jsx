'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Sliders, ArrowRightLeft, CheckCircle, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    {
      id: 'reliability',
      icon: Shield,
      title: 'Reliability',
      headline: '99.9% Uptime Guarantee',
      description: 'Your services stay online.',
      color: '#8C5695',
      position: { top: '20%', left: '15%' }
    },
    {
      id: 'performance',
      icon: Zap,
      title: 'Performance',
      headline: 'Lightning-Fast SSD Storage',
      description: 'Speed you can feel',
      color: '#9A6BA7',
      position: { top: '15%', right: '20%' }
    },
    {
      id: 'simplicity',
      icon: Sliders,
      title: 'Simplicity',
      headline: 'Easy Control Panel',
      description: 'Manage everything with just a few clicks.',
      color: '#A880B3',
      position: { top: '50%', left: '10%' }
    },
    {
      id: 'convenience',
      icon: ArrowRightLeft,
      title: 'Convenience',
      headline: 'Free Migration',
      description: "We'll move your website for free.",
      color: '#8C5695',
      position: { top: '55%', right: '15%' }
    },
    {
      id: 'confidence',
      icon: CheckCircle,
      title: 'Confidence',
      headline: '7-Day Money-Back Guarantee',
      description: 'Try us risk-free.',
      color: '#986AA1',
      position: { bottom: '20%', left: '25%' }
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Customer Support',
      headline: '24/7 Expert Support',
      description: "We're here whenever you need us.",
      color: '#A374AF',
      position: { bottom: '25%', right: '30%' }
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,86,149,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(152,106,161,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(140,86,149,0.08),transparent_40%)]" />
      </div>

      {/* Animated Grid Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#8C5695" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-white px-6 py-2 backdrop-blur-sm shadow-sm"
          >
            <div className="h-2 w-2 rounded-full bg-[#8C5695] animate-pulse" />
            <span className="font-mono text-sm font-medium tracking-wider text-[#8C5695]">
              EVERYTHING YOU NEED
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-black uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Built for{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Enterprise-grade features designed to power your digital infrastructure
          </motion.p>
        </motion.div>

        {/* Interactive Hexagon Network - Desktop */}
        <div className="hidden lg:block">
          <HexagonNetwork features={features} activeFeature={activeFeature} setActiveFeature={setActiveFeature} />
        </div>

        {/* Mobile/Tablet View - Diagonal Layout */}
        <div className="lg:hidden">
          <DiagonalLayout features={features} />
        </div>
      </div>
    </section>
  );
};

// Hexagon Network for Desktop
const HexagonNetwork = ({ features, activeFeature, setActiveFeature }) => {
  return (
    <div className="relative mx-auto h-[800px] max-w-5xl">
      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8C5695" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#986AA1" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Draw connection lines between nodes */}
        <motion.line
          x1="15%" y1="20%" x2="50%" y2="15%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.line
          x1="15%" y1="20%" x2="10%" y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        />
        <motion.line
          x1="80%" y1="15%" x2="85%" y2="55%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
        />
        <motion.line
          x1="10%" y1="50%" x2="25%" y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
        <motion.line
          x1="85%" y1="55%" x2="70%" y2="75%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.3 }}
        />
        <motion.line
          x1="25%" y1="80%" x2="70%" y2="75%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </svg>

      {/* Feature Nodes */}
      {features.map((feature, index) => (
        <HexagonNode
          key={feature.id}
          feature={feature}
          index={index}
          isActive={activeFeature === feature.id}
          onHover={() => setActiveFeature(feature.id)}
          onLeave={() => setActiveFeature(null)}
        />
      ))}

      {/* Central Info Panel */}
      <AnimatePresence mode="wait">
        {activeFeature && (
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 10 }}
          >
            <div className="relative w-80 rounded-2xl border border-[#8C5695]/40 bg-white/95 p-8 backdrop-blur-xl shadow-2xl">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] opacity-20 blur" />
              <div className="relative">
                <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-[#8C5695]">
                  {features.find(f => f.id === activeFeature)?.title}
                </h3>
                <h4 className="mb-4 text-2xl font-bold text-gray-900">
                  {features.find(f => f.id === activeFeature)?.headline}
                </h4>
                <p className="text-gray-600">
                  {features.find(f => f.id === activeFeature)?.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Hexagon Node Component
const HexagonNode = ({ feature, index, isActive, onHover, onLeave }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="absolute"
      style={feature.position}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        animate={{
          scale: isActive ? 1.2 : 1,
          rotate: isActive ? 180 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="relative cursor-pointer"
      >
        {/* Outer Glow */}
        <motion.div
          animate={{
            scale: isActive ? [1, 1.3, 1] : 1,
            opacity: isActive ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 -m-4 rounded-full blur-xl"
          style={{ backgroundColor: feature.color }}
        />

        {/* Hexagon SVG */}
        <svg width="100" height="100" viewBox="0 0 100 100" className="relative">
          <defs>
            <linearGradient id={`grad-${feature.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={feature.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={feature.color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Hexagon Shape */}
          <motion.polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill={`url(#grad-${feature.id})`}
            stroke={feature.color}
            strokeWidth="2"
            animate={{
              strokeWidth: isActive ? 3 : 2,
            }}
          />
          
          {/* Inner Hexagon */}
          <motion.polygon
            points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5"
            fill="rgba(255,255,255,0.8)"
            stroke={feature.color}
            strokeWidth="1"
            strokeOpacity="0.5"
            animate={{
              scale: isActive ? 1.05 : 1,
            }}
            style={{ transformOrigin: 'center' }}
          />
        </svg>

        {/* Icon */}
        <motion.div
          animate={{
            scale: isActive ? 1.1 : 1,
            rotate: isActive ? -180 : 0,
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon className="h-8 w-8" style={{ color: feature.color }} strokeWidth={2} />
        </motion.div>

        {/* Pulse Ring */}
        {isActive && (
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: feature.color }}
          />
        )}

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0.7 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs font-semibold tracking-wider"
          style={{ color: feature.color }}
        >
          {feature.title.toUpperCase()}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Diagonal Layout for Mobile/Tablet
const DiagonalLayout = ({ features }) => {
  return (
    <div className="space-y-12">
      {features.map((feature, index) => (
        <DiagonalFeatureItem
          key={feature.id}
          feature={feature}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

const DiagonalFeatureItem = ({ feature, index, isReversed }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 50 : -50, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`flex items-center gap-6 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Hexagon Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 15 }}
        className="relative flex-shrink-0"
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <defs>
            <linearGradient id={`mobile-grad-${feature.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={feature.color} stopOpacity="0.2" />
              <stop offset="100%" stopColor={feature.color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill={`url(#mobile-grad-${feature.id})`}
            stroke={feature.color}
            strokeWidth="2"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="h-8 w-8" style={{ color: feature.color }} strokeWidth={2} />
        </div>
      </motion.div>

      {/* Content */}
      <div className={`flex-1 ${isReversed ? 'text-right' : 'text-left'}`}>
        <div className="relative">
          {/* Diagonal Line */}
          <div 
            className={`absolute top-0 h-px w-16 ${isReversed ? 'right-0' : 'left-0'}`}
            style={{ 
              background: `linear-gradient(${isReversed ? '270deg' : '90deg'}, ${feature.color}, transparent)`,
              top: '-12px'
            }}
          />
          
          <h3 className="mb-1 font-mono text-xs font-semibold uppercase tracking-widest" style={{ color: feature.color }}>
            {feature.title}
          </h3>
          <h4 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
            {feature.headline}
          </h4>
          <p className="text-sm text-gray-600">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;