"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { 
  Server, 
  Shield, 
  Database, 
  Globe,
  CheckCircle2
} from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const SERVICES = [
  {
    id: "service-1",
    icon: Server,
    title: "High-Speed VPS Hosting",
    description: "Lightning-fast virtual servers that grow with your business. Get full control with root access and premium SSD storage.",
    features: [
      "Full Root Access",
      "NVMe SSD Storage",
      "Instant Setup",
      "10Gbps Network"
    ],
    highlight: "99.9% Uptime",
  },
  {
    id: "service-2",
    icon: Shield,
    title: "Professional Server Management",
    description: "Focus on your business while our experts handle the technical details. 24/7 monitoring and support included.",
    features: [
      "24/7 Expert Support",
      "Security Updates",
      "Performance Monitoring",
      "Proactive Maintenance"
    ],
    highlight: "15min Response",
  },
  {
    id: "service-3",
    icon: Database,
    title: "Secure Daily Backups",
    description: "Sleep easy knowing your data is protected. Automated daily backups with simple one-click restoration.",
    features: [
      "Automated Daily Backups",
      "Encrypted Storage",
      "One-Click Restore",
      "30-Day Retention"
    ],
    highlight: "100% Protected",
  },
  {
    id: "service-4",
    icon: Globe,
    title: "Domain Registration",
    description: "Find your perfect domain name and get online quickly. Free DNS management and privacy protection included.",
    features: [
      "All Domain Extensions",
      "Free DNS Management",
      "Privacy Protection",
      "Easy Management"
    ],
    highlight: "Starting $9.99",
  },
];

const CardSticky = React.memo(({ service, index }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth transforms using useTransform instead of manual scroll listeners
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const IconComponent = service.icon;
  const topOffset = 80 + (index * 40);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        y,
        position: "sticky",
        top: `${topOffset}px`,
        zIndex: 10 + index,
      }}
      className="rounded-3xl border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_60px_-15px_rgba(140,86,149,0.4)] md:p-10"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8C5695] to-[#986AA1] text-white shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110">
        <IconComponent className="h-8 w-8" />
      </div>

      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-black tracking-tight md:text-3xl">
          {service.title}
        </h3>
        <span className="text-4xl font-black text-gray-100">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Description */}
      <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
        {service.description}
      </p>

      {/* Features */}
      <div className="mb-6 grid gap-3 md:grid-cols-2">
        {service.features.map((feature, i) => (
          <div
            key={i}
            className="flex items-center gap-3"
          >
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8C5695] to-[#986AA1]">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Highlight Badge */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          {service.highlight}
        </div>

        <button
          className="group flex items-center gap-2 text-sm font-bold text-[#8C5695] transition-all duration-300 hover:text-[#986AA1] hover:gap-3"
        >
          Learn More
          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
});

CardSticky.displayName = "CardSticky";

const ServicesSection = () => {
  return (
    <div className="container min-h-screen place-content-center bg-gradient-to-b from-purple-50/30 via-white to-purple-50/30 px-6 py-24 text-gray-900 xl:px-12">
      <div className="grid md:grid-cols-2 md:gap-8 xl:gap-12">
        {/* Left Side - Sticky Header */}
        <div className="left-0 top-0 md:sticky md:h-screen md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-6 py-2 text-sm font-semibold text-[#8C5695] shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8C5695]" />
              Our Services
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 mt-4 text-4xl font-black tracking-tight md:text-5xl lg:text-6xl"
          >
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Succeed Online
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-prose text-lg text-gray-600"
          >
            Powerful hosting solutions designed for businesses of all sizes. 
            Simple to use, yet built for maximum performance. Our journey begins 
            with understanding your vision and delivering excellence.
          </motion.p>
        </div>

        {/* Right Side - Sticky Cards */}
        <div className="min-h-[400vh] space-y-8 py-12">
          {SERVICES.map((service, index) => (
            <CardSticky
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;