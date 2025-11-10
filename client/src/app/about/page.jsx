'use client';

import React from 'react';
import {
  Server,
  Zap,
  Shield,
  Globe,
  Code,
  Heart,
  ArrowRight,
  Cpu,
  HardDrive,
  Network,
  Lock,
  TrendingUp,
  Users,
  Award,
  Headphones
} from 'lucide-react';
import Link from 'next/link';
const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <InfrastructureSection />
      <WhyChooseSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 mt-4">
      {/* Background with Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8C5695] via-[#986AA1] to-[#A374AF]" />
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
          alt="Server Infrastructure"
          className="h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8C5695] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center text-white">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <Heart className="h-4 w-4" fill="white" />
            <span className="text-xs font-bold uppercase tracking-wider">About TOPAZ</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Hosting Without
            <span className="block">the Headaches</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
            We built the hosting platform we wish existed. Fast, secure, and refreshingly simple.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#8C5695] shadow-xl transition-all hover:scale-105">
              Start Building
              <ArrowRight className="h-5 w-5" />
            </button>
            {/* <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
              Our Story
            </button> */}
          </div>

          {/* Stats Preview */}
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-1 text-4xl font-black">10K+</div>
              <div className="text-sm text-white/80">Active Websites</div>
            </div>
            <div>
              <div className="mb-1 text-4xl font-black">99.9%</div>
              <div className="text-sm text-white/80">Uptime SLA</div>
            </div>
            <div>
              <div className="mb-1 text-4xl font-black">24/7</div>
              <div className="text-sm text-white/80">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StorySection = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-[#8C5695]/5 px-4 py-2">
              <Server className="h-4 w-4 text-[#8C5695]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5695]">Our Origin</span>
            </div>

            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl">
              Built by Developers,
              <span className="block text-[#8C5695]">For Developers</span>
            </h2>

            <div className="mb-8 space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                It was 3 AM. Another deployment failed. Another cryptic error message. 
                We realized the problem wasn't our code—it was our hosting.
              </p>
              
              <p>
                Complex interfaces. Hidden fees. Support tickets that went nowhere. 
                We knew there had to be a better way.
              </p>
              
              <p className="font-bold text-gray-900">
                So we built TOPAZ. Simple, transparent, and built for the way developers actually work.
              </p>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#8C5695]/20 bg-[#8C5695]/5 p-4">
                <div className="mb-1 text-2xl font-black text-[#8C5695]">2020</div>
                <div className="text-xs text-gray-600">Founded</div>
              </div>
              <div className="rounded-xl border border-[#8C5695]/20 bg-[#8C5695]/5 p-4">
                <div className="mb-1 text-2xl font-black text-[#8C5695]">50+</div>
                <div className="text-xs text-gray-600">Countries</div>
              </div>
            </div>
          </div>

          {/* Image with Overlay Card */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
                alt="Network Infrastructure"
                className="h-[500px] w-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 rounded-2xl border border-[#8C5695]/20 bg-white p-6 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-xl font-black text-gray-900">300%</div>
                  <div className="text-xs text-gray-600">Growth in 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed First',
      desc: 'Every millisecond counts. We optimize relentlessly for performance.',
      color: '#8C5695'
    },
    {
      icon: Shield,
      title: 'Security Built-In',
      desc: 'DDoS protection, SSL, and backups included. Not an upsell.',
      color: '#986AA1'
    },
    {
      icon: Heart,
      title: 'Human Support',
      desc: 'Real engineers answering questions. No bots, no scripts.',
      color: '#A374AF'
    },
    {
      icon: Code,
      title: 'Developer Tools',
      desc: 'APIs, CLI, Git integration. Built the way you actually work.',
      color: '#8C5695'
    }
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-black text-gray-900 sm:text-5xl">
            What Makes Us{' '}
            <span className="text-[#8C5695]">Different</span>
          </h2>
          <p className="text-base text-gray-600">Our core principles that guide every decision</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className="absolute right-0 top-0 h-20 w-20 translate-x-6 -translate-y-6 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-20"
                  style={{ backgroundColor: value.color }}
                />
                
                <div className="relative">
                  <div
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: value.color }} />
                  </div>
                  
                  <h3 className="mb-2 text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const InfrastructureSection = () => {
  const specs = [
    { icon: Cpu, label: 'AMD EPYC CPUs', value: 'Latest Gen' },
    { icon: HardDrive, label: 'NVMe SSD Storage', value: 'Ultra Fast' },
    { icon: Network, label: 'Network Speed', value: '10 Gbps' },
    { icon: Lock, label: 'DDoS Protection', value: 'Always On' }
  ];

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1591238868535-22c2e0f4b8f6?w=1200&q=80"
          alt="Server Hardware"
          className="h-full w-full object-cover opacity-5"
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://www.nvint.com/wp-content/uploads/2018/11/Enterprise-servers640x480.jpg"
                alt="Enterprise Hardware"
                className="h-[450px] w-full object-cover"
              />
            </div>

            {/* Overlay Badge */}
            <div className="absolute -right-6 top-8 rounded-2xl border border-[#8C5695]/20 bg-white p-4 shadow-xl">
              <div className="mb-1 text-2xl font-black text-[#8C5695]">99.9%</div>
              <div className="text-xs text-gray-600">Uptime SLA</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl">
              Enterprise-Grade
              <span className="block text-[#8C5695]">Infrastructure</span>
            </h2>

            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Your applications run on cutting-edge hardware in premium data centers. 
              We don't compromise on the foundation.
            </p>

            <div className="space-y-4">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C5695]/10">
                      <Icon className="h-6 w-6 text-[#8C5695]" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-gray-900">{spec.label}</div>
                      <div className="text-xs text-gray-500">{spec.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    { icon: Users, title: 'Trusted by Thousands', desc: 'Developers worldwide build on TOPAZ' },
    { icon: Award, title: 'Industry Leading', desc: 'Best-in-class uptime and performance' },
    { icon: Headphones, title: '24/7 Expert Support', desc: 'Real engineers ready to help' }
  ];

  return (
    <section className="bg-gradient-to-br from-[#8C5695] to-[#986AA1] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center text-white">
          <h2 className="mb-3 text-4xl font-black sm:text-5xl">
            Why Teams Choose TOPAZ
          </h2>
          <p className="text-base text-white/90">Join thousands building on our platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Icon className="mx-auto mb-4 h-12 w-12 text-white" />
                <h3 className="mb-2 text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-sm text-white/80">{reason.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Image Gallery */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
              alt="Analytics"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1560732488-6b0df240254a?w=600&q=80"
              alt="Cloud Infrastructure"
              className="h-48 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
              alt="Development"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Server, value: '10K+', label: 'Websites Hosted' },
    { icon: Zap, value: '<100ms', label: 'Avg Response' },
    { icon: Shield, value: '100%', label: 'DDoS Protected' }
  ];

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-black text-gray-900 sm:text-5xl">
            Numbers That{' '}
            <span className="text-[#8C5695]">Matter</span>
          </h2>
          <p className="text-base text-gray-600">Real metrics from real infrastructure</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border-2 border-[#8C5695]/20 bg-gradient-to-br from-[#8C5695]/5 to-white p-8 text-center transition-all hover:border-[#8C5695]/40 hover:shadow-xl"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-[#8C5695]" />
                <div className="mb-2 text-4xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8C5695_1px,transparent_1px),linear-gradient(to_bottom,#8C5695_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
          Ready to Experience
          <span className="block bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
            Better Hosting?
          </span>
        </h2>

        <p className="mb-10 text-lg text-gray-400">
          Join thousands of developers who've made the switch to TOPAZ
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-8 py-4 text-base font-bold text-white shadow-2xl transition-all hover:scale-105">
            Start Free Trial
            <ArrowRight className="h-5 w-5" />
          </button>
          <Link href="/pricing" passHref>
          <button className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-700 bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:border-[#8C5695] hover:bg-gray-800">
            View Pricing
          </button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          No credit card required • Cancel anytime • 30-day money-back guarantee
        </p>
      </div>
    </section>
  );
};

export default AboutPage;