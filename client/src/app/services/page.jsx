'use client';

import React from 'react';
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
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
const ServicesPage = () => {
  const services = [
    {
      id: 'vps-hosting',
      icon: Server,
      title: 'VPS Hosting Plans',
      tagline: 'Power for Every Scale',
      description: 'From startups to enterprises, our Standard, Quasar, and Turbo plans deliver exactly what you need. Choose Managed for hands-off operation or Unmanaged for complete control.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
      color: '#8C5695',
      features: ['Standard VPS', 'Quasar Plans', 'Turbo Performance', 'Managed Support'],
      align: 'left'
    },
    {
      id: 'server-resources',
      icon: Cpu,
      title: 'Server Resources',
      tagline: 'Built for Performance',
      description: 'Scale from 1 GB to 64 GB RAM seamlessly. Lightning-fast SSD storage comes standard, with optional NVMe upgrades for those who demand the absolute fastest speeds.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      color: '#986AA1',
      features: ['1-64 GB RAM', 'SSD Storage', 'NVMe Available', 'Unlimited Bandwidth'],
      align: 'right'
    },
    {
      id: 'network-security',
      icon: Shield,
      title: 'Network & Security',
      tagline: 'Protected & Connected',
      description: 'Dedicated IPs, private networking, IPv6 support, and enterprise-grade DDoS protection. Your data stays safe while staying accessible.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80',
      color: '#A374AF',
      features: ['Dedicated IPs', 'Private Network', 'IPv6 Ready', 'DDoS Protected'],
      align: 'left'
    },
    {
      id: 'control-panels',
      icon: Settings,
      title: 'Control Panels',
      tagline: 'Manage with Ease',
      description: 'Industry-leading control panels including cPanel/WHM, Plesk, and Interworx. Plus Softaculous with 400+ applications ready to install instantly.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      color: '#8C5695',
      features: ['cPanel/WHM', 'Plesk Panel', 'Interworx', '400+ Apps'],
      align: 'right'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      tagline: 'Scale Without Limits',
      description: 'Built on enterprise cloud architecture with automatic scaling, intelligent load balancing, and high availability for mission-critical applications.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80',
      color: '#986AA1',
      features: ['Cloud VPS', 'Auto-Scaling', 'Load Balancing', 'High Availability'],
      align: 'left'
    },
    {
      id: 'developer-tools',
      icon: Code,
      title: 'Developer Tools',
      tagline: 'Built for Developers',
      description: 'Full root access, secure SSH, powerful APIs, and automation tools. Everything developers need to build, deploy, and scale applications.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
      color: '#A374AF',
      features: ['Root Access', 'SSH Access', 'API Ready', 'Git Integration'],
      align: 'right'
    },
    {
      id: 'support',
      icon: Headphones,
      title: '24/7 Expert Support',
      tagline: 'Always Here for You',
      description: 'Round-the-clock support from certified experts. Fully managed options, free migrations, and real-time monitoring keep you running smoothly.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80',
      color: '#8C5695',
      features: ['24/7 Support', 'Expert Team', 'Free Migration', 'Real-Time Monitoring'],
      align: 'left'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Full-Width Diagonal Sections */}
      {services.map((service, index) => (
        <DiagonalServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* Featured Stats */}
      <StatsSection />

      {/* CTA */}
      <BottomCTA />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-32 sm:px-6 lg:px-8">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/10 px-6 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-[#8C5695]" />
          <span className="font-mono text-sm font-medium tracking-wider text-white">
            OUR SERVICES
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Professional{' '}
          <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
            Hosting
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-white/80">
          Everything you need to power your digital presence
        </p>

        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-gray-900 transition-all hover:scale-105"
        >
          Explore Services
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      {/* Diagonal Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  );
};

const DiagonalServiceSection = ({ service, index }) => {
  const Icon = service.icon;
  const isLeft = service.align === 'left';

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{
        background: index % 2 === 0 ? 'white' : '#fafafa'
      }}
    >
      {/* Diagonal Top */}
      <div
        className="absolute left-0 right-0 top-0 h-24"
        style={{
          background: index % 2 === 0 ? '#fafafa' : 'white',
          clipPath: 'polygon(0 0, 100% 100%, 100% 0)'
        }}
      />

      {/* Content */}
      <div className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}>
            {/* Image Side */}
            <div className={isLeft ? '' : 'lg:col-start-2'}>
              <div className="group relative">
                {/* Number Watermark */}
                <div
                  className="absolute -top-8 left-0 text-[120px] font-black leading-none opacity-5"
                  style={{ color: service.color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div
                    className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-6 left-6">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 bg-white shadow-xl"
                      style={{ borderColor: service.color }}
                    >
                      <Icon className="h-8 w-8" style={{ color: service.color }} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={isLeft ? '' : 'lg:col-start-1 lg:row-start-1'}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2" style={{ borderColor: `${service.color}40`, background: `${service.color}10` }}>
                <div className="h-2 w-2 rounded-full" style={{ background: service.color }} />
                <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: service.color }}>
                  {service.tagline}
                </span>
              </div>

              <h2 className="mb-6 text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
                {service.title}
              </h2>

              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Features Grid */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${service.color}15` }}
                    >
                      <CheckCircle className="h-5 w-5" style={{ color: service.color }} />
                    </div>
                    <span className="font-semibold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {/* <button
                className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: service.color }}
              >
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: index % 2 === 0 ? '#fafafa' : 'white',
          clipPath: 'polygon(0 100%, 100% 0, 100% 100%)'
        }}
      />
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Server, value: '10,000+', label: 'Active Servers' },
    { icon: Shield, value: '99.99%', label: 'Uptime SLA' },
    { icon: Zap, value: '< 100ms', label: 'Response Time' },
    { icon: Headphones, value: '24/7', label: 'Expert Support' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#8C5695] to-[#986AA1] px-4 py-24 sm:px-6 lg:px-8">
      {/* Diagonal Top */}
      <div className="absolute left-0 right-0 top-0 h-24 bg-white" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0)' }} />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-white md:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/80">
            The numbers speak for themselves
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="mb-2 text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm font-medium text-white/80">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Diagonal Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  );
};

const BottomCTA = () => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl md:text-6xl">
          Ready to{' '}
          <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
            Get Started?
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
          Choose your perfect plan and launch your project today
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-8 py-4 font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
          >
            View Pricing Plans
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="#"
            className="rounded-xl border-2 border-[#8C5695] bg-white px-8 py-4 font-bold text-[#8C5695] transition-all hover:bg-[#8C5695] hover:text-white"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;