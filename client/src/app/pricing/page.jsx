'use client';

import React, { useState } from 'react';
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
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState('vps');

  const categories = [
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
      description: 'Balanced resources, perfect for small businesses and personal projects.',
      icon: Server,
      color: '#8C5695',
      popular: false,
      features: [
        'Balanced CPU & RAM',
        'Standard SSD storage',
        'Perfect for small sites',
        '24/7 support included',
        'Free SSL certificate',
        '99.9% uptime guarantee'
      ]
    },
    {
      category: 'vps',
      id: 'quasar',
      name: 'Quasar VPS',
      price: 39.99,
      period: 'month',
      description: 'Enhanced CPU/RAM for growing applications and medium traffic sites.',
      icon: Zap,
      color: '#986AA1',
      popular: true,
      features: [
        'Enhanced CPU power',
        'Increased RAM capacity',
        'Perfect for growing apps',
        'Priority support',
        'Free SSL certificate',
        'Daily backups included'
      ]
    },
    {
      category: 'vps',
      id: 'turbo',
      name: 'Turbo VPS',
      price: 69.99,
      period: 'month',
      description: 'Maximum performance for high-traffic enterprise applications.',
      icon: Activity,
      color: '#A374AF',
      popular: false,
      features: [
        'Maximum performance',
        'High-speed processing',
        'Enterprise-grade resources',
        'VIP support 24/7',
        'Advanced DDoS protection',
        'Hourly backups'
      ]
    },
    {
      category: 'vps',
      id: 'managed',
      name: 'Managed VPS',
      price: 20.00,
      period: 'month',
      description: 'Expert management for your VPS - we handle everything.',
      icon: Settings,
      color: '#8C5695',
      popular: false,
      features: [
        'Full server management',
        'Automatic updates',
        'Security monitoring',
        'Expert support team',
        'Performance optimization',
        'Incident response'
      ]
    },

    // Resource Upgrades
    {
      category: 'resources',
      id: 'ram',
      name: 'Additional RAM',
      price: 5,
      period: 'per GB/month',
      description: 'Scale from 1 GB to 64 GB based on your needs.',
      icon: Cpu,
      color: '#986AA1',
      isAddon: true,
      features: ['Instant provisioning', 'Flexible scaling', 'No downtime', 'Pay as you grow']
    },
    {
      category: 'resources',
      id: 'ssd',
      name: 'SSD Storage',
      price: 10,
      period: 'per 100GB/month',
      description: 'Fast and reliable SSD storage for your data.',
      icon: HardDrive,
      color: '#8C5695',
      isAddon: true,
      features: ['High-speed SSD', 'Reliable storage', 'Automatic backups', 'Easy expansion']
    },
    {
      category: 'resources',
      id: 'nvme',
      name: 'NVMe Upgrade',
      price: '+25%',
      period: 'on storage cost',
      description: 'Ultra-fast NVMe storage for maximum performance.',
      icon: Zap,
      color: '#A374AF',
      isAddon: true,
      features: ['10x faster than SSD', 'Lower latency', 'Better IOPS', 'Premium performance']
    },
    {
      category: 'resources',
      id: 'dedicated-ip',
      name: 'Dedicated IP',
      price: 3,
      period: 'per IP/month',
      description: 'Get your own unique IP address.',
      icon: Network,
      color: '#986AA1',
      isAddon: true,
      features: ['Unique IP address', 'Better SEO', 'SSL compatibility', 'Email deliverability']
    },

    // Software & Control Panels
    {
      category: 'software',
      id: 'cpanel',
      name: 'cPanel/WHM',
      price: 15,
      period: 'month',
      description: 'Industry-leading Linux control panel.',
      icon: Settings,
      color: '#8C5695',
      isAddon: true,
      features: ['Easy to use', 'Linux compatible', 'Full WHM access', 'Regular updates']
    },
    {
      category: 'software',
      id: 'plesk',
      name: 'Plesk Panel',
      price: 12,
      period: 'month',
      description: 'Versatile panel for Linux and Windows.',
      icon: Settings,
      color: '#986AA1',
      isAddon: true,
      features: ['Linux & Windows', 'User-friendly', 'WordPress toolkit', 'Multi-server']
    },
    {
      category: 'software',
      id: 'interworx',
      name: 'Interworx Panel',
      price: 10,
      period: 'month',
      description: 'Lightweight panel for advanced users.',
      icon: Settings,
      color: '#A374AF',
      isAddon: true,
      features: ['Lightweight', 'Advanced features', 'API access', 'Cost-effective']
    },
    {
      category: 'software',
      id: 'softaculous',
      name: 'Softaculous',
      price: 'Included',
      period: '',
      description: '400+ apps ready to install instantly.',
      icon: Layers,
      color: '#8C5695',
      isAddon: true,
      features: ['400+ applications', 'One-click install', 'Auto-updates', 'Free with panels']
    },

    // Security Add-ons
    {
      category: 'security',
      id: 'ssl',
      name: 'Premium SSL',
      price: 3.99,
      period: 'month',
      description: 'Secure your website with HTTPS.',
      icon: Lock,
      color: '#8C5695',
      isAddon: true,
      features: ['HTTPS encryption', 'Browser trust', 'SEO benefits', 'Customer confidence']
    },
    {
      category: 'security',
      id: 'firewall',
      name: 'Advanced Firewall',
      price: 5.99,
      period: 'month',
      description: 'Custom firewall rules and traffic filtering.',
      icon: Shield,
      color: '#986AA1',
      isAddon: true,
      features: ['Custom rules', 'Traffic filtering', 'Intrusion detection', 'Real-time monitoring']
    },
    {
      category: 'security',
      id: 'malware',
      name: 'Malware Scanning',
      price: 8,
      period: 'month',
      description: 'CXS and ImunifyAV protection.',
      icon: Shield,
      color: '#A374AF',
      isAddon: true,
      features: ['Daily scans', 'Auto-removal', 'Real-time protection', 'Quarantine system']
    },
    {
      category: 'security',
      id: 'ddos',
      name: 'DDoS Protection',
      price: 5.99,
      period: 'month',
      description: 'Enterprise-grade DDoS mitigation.',
      icon: Shield,
      color: '#8C5695',
      isAddon: true,
      features: ['Real-time defense', 'Traffic filtering', 'Always-on protection', 'Attack reports']
    },

    // Backups & Storage
    {
      category: 'backups',
      id: 'auto-backup',
      name: 'Automated Backups',
      price: 7,
      period: 'month',
      description: 'Daily automated backups of your data.',
      icon: Database,
      color: '#986AA1',
      isAddon: true,
      features: ['Daily backups', 'Auto-scheduling', '30-day retention', 'One-click restore']
    },
    {
      category: 'backups',
      id: 'snapshots',
      name: 'On-Demand Snapshots',
      price: 1.99,
      period: 'per snapshot',
      description: 'Manual restore points before changes.',
      icon: Database,
      color: '#8C5695',
      isAddon: true,
      features: ['Instant snapshots', 'Pre-update safety', 'Quick restore', 'Unlimited storage']
    },
    {
      category: 'backups',
      id: 'extra-backup',
      name: 'Extra Backup Storage',
      price: 5,
      period: 'per 100GB/month',
      description: 'Additional storage for your backups.',
      icon: Database,
      color: '#A374AF',
      isAddon: true,
      features: ['Extended storage', 'Long-term retention', 'Secure storage', 'Easy access']
    },

    // Cloud Features
    {
      category: 'cloud',
      id: 'cloud-vps',
      name: 'Cloud VPS',
      price: 29.99,
      period: 'month',
      description: 'Elastic and scalable cloud infrastructure.',
      icon: Cloud,
      color: '#8C5695',
      isAddon: true,
      features: ['Auto-scaling', 'Elastic resources', 'High availability', 'Pay as you grow']
    },
    {
      category: 'cloud',
      id: 'load-balancing',
      name: 'Load Balancing',
      price: 'Custom',
      period: 'pricing',
      description: 'Distribute traffic across multiple servers.',
      icon: Activity,
      color: '#986AA1',
      isAddon: true,
      isCustom: true,
      features: ['Traffic distribution', 'High availability', 'Auto-failover', 'Health monitoring']
    },
    {
      category: 'cloud',
      id: 'high-availability',
      name: 'High Availability',
      price: 'Custom',
      period: 'pricing',
      description: 'Clustering for mission-critical systems.',
      icon: Layers,
      color: '#A374AF',
      isAddon: true,
      isCustom: true,
      features: ['99.99% uptime', 'Automatic failover', 'Redundant systems', 'Zero downtime']
    },

    // Billing & Licensing
    {
      category: 'billing',
      id: 'whmcs',
      name: 'WHMCS Integration',
      price: 14.99,
      period: 'month',
      description: 'Complete billing and support system.',
      icon: CreditCard,
      color: '#8C5695',
      isAddon: true,
      features: ['Auto-billing', 'Client portal', 'Support tickets', 'Provisioning']
    },
    {
      category: 'billing',
      id: 'licenses',
      name: 'License Add-ons',
      price: 'Discounted',
      period: '',
      description: 'Get discounted software licenses.',
      icon: CreditCard,
      color: '#986AA1',
      isAddon: true,
      isCustom: true,
      features: ['Bulk discounts', 'Easy management', 'Auto-renewal', 'Support included']
    },
    {
      category: 'billing',
      id: 'domain-bundle',
      name: 'Domain Bundle',
      price: 10.99,
      period: 'year',
      description: 'Add domain registration with hosting.',
      icon: Globe,
      color: '#A374AF',
      isAddon: true,
      features: ['Free domain privacy', 'Easy management', 'Auto-renewal', 'DNS management']
    }
  ];

  const filteredPlans = plans.filter(plan => plan.category === activeCategory);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-5 blur-[120px]" />
      </div>

      {/* Hero */}
      <HeroSection />

      {/* Category Tabs */}
      <CategoryTabs 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Pricing Grid */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <BottomCTA />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-6 py-2 shadow-sm">
          <Sparkles className="h-4 w-4 text-[#8C5695]" />
          <span className="font-mono text-sm font-medium tracking-wider text-[#8C5695]">
            FLEXIBLE PRICING
          </span>
        </div>

        <h1 className="mb-6 text-5xl font-black uppercase tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
          Choose Your{' '}
          <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
            Perfect Plan
          </span>
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600">
          From VPS hosting to add-ons, find everything you need to power your online presence
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-4 py-2 shadow-sm">
            <Zap className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-semibold text-gray-900">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-4 py-2 shadow-sm">
            <Shield className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-semibold text-gray-900">Secure</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-white px-4 py-2 shadow-sm">
            <Star className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-semibold text-gray-900">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <section className="relative px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-x-auto">
          <div className="inline-flex min-w-full justify-center gap-2 rounded-2xl border border-[#8C5695]/20 bg-white p-2 shadow-lg">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-3 font-mono text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8C5695] to-[#986AA1] text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index }) => {
  const Icon = plan.icon;

  return (
    <div className="group relative h-full transition-transform hover:-translate-y-2">
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
          <div className="flex items-center gap-2 rounded-full border-2 border-[#8C5695] bg-white px-4 py-1 shadow-lg">
            <Star className="h-3 w-3 text-[#8C5695]" fill="currentColor" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#8C5695]">
              Popular
            </span>
          </div>
        </div>
      )}

      <div className="absolute -inset-1 rounded-3xl opacity-0 blur-xl transition-opacity group-hover:opacity-30" style={{ background: plan.color }} />

      <div className="relative h-full overflow-hidden rounded-3xl border border-[#8C5695]/20 bg-white shadow-xl">
        <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
          <div className="absolute inset-0 rounded-bl-full" style={{ background: `radial-gradient(circle at top right, ${plan.color}, transparent)` }} />
        </div>

        <div className="relative p-6">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl" style={{ background: `${plan.color}15` }}>
            <Icon className="h-7 w-7" style={{ color: plan.color }} strokeWidth={2} />
          </div>

          <h3 className="mb-2 text-xl font-black text-gray-900">{plan.name}</h3>

          <div className="mb-3 flex items-baseline gap-1">
            <span className="text-3xl font-black text-gray-900">
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
            </span>
            {plan.period && (
              <span className="text-sm text-gray-500">/ {plan.period}</span>
            )}
          </div>

          <p className="mb-4 text-sm leading-relaxed text-gray-600">{plan.description}</p>

          {plan.features && (
            <div className="mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `${plan.color}20` }}>
                    <Check className="h-3 w-3" style={{ color: plan.color }} strokeWidth={3} />
                  </div>
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          )}

          <button
            className="w-full rounded-xl py-3 font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: plan.color }}
          >
            <span className="flex items-center justify-center gap-2">
              {plan.isCustom ? 'Contact Us' : plan.isAddon ? 'Add to Plan' : 'Get Started'}
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const BottomCTA = () => {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-center shadow-2xl md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8C5695] opacity-20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#986AA1] opacity-20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
              Need a{' '}
              <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
                Custom Solution?
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80">
              Contact our sales team for a tailored plan that fits your specific requirements
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#" className="rounded-xl bg-white px-8 py-4 font-bold text-gray-900 transition-all hover:scale-105">
                Contact Sales
              </a>
              <a href="#" className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20">
                View All Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;