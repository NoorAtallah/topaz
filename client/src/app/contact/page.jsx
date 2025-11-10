'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Headphones,
  Globe,
  Twitter,
  Linkedin,
  Github,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <HeroSection />
      <ContactFormSection />
      <ContactMethodsSection />
      <MapSection />
      <FAQSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 mt-4">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8C5695] via-[#986AA1] to-[#A374AF]" />
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
          alt="Contact Support"
          className="h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#8C5695] via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <Headphones className="h-4 w-4 text-white" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">Get in Touch</span>
        </div>

        <h1 className="mb-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          We're Here to
          <span className="block">Help You</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 sm:text-xl">
          Have questions? Need support? Our team is ready to assist you 24/7
        </p>

        {/* Quick Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <Clock className="mx-auto mb-2 h-8 w-8 text-white" />
            <div className="mb-1 text-2xl font-black text-white">24/7</div>
            <div className="text-sm text-white/80">Support Available</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <MessageSquare className="mx-auto mb-2 h-8 w-8 text-white" />
            <div className="mb-1 text-2xl font-black text-white">&lt;5 min</div>
            <div className="text-sm text-white/80">Avg Response Time</div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
            <CheckCircle className="mx-auto mb-2 h-8 w-8 text-white" />
            <div className="mb-1 text-2xl font-black text-white">98%</div>
            <div className="text-sm text-white/80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', category: 'general', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8C5695]/20 bg-[#8C5695]/5 px-4 py-2">
              <Mail className="h-4 w-4 text-[#8C5695]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5695]">Send us a Message</span>
            </div>

            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl">
              Let's Start a
              <span className="block text-[#8C5695]">Conversation</span>
            </h2>

            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Whether you're curious about features, pricing, or need technical support, 
              our team is ready to answer all your questions.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C5695]/10">
                  <Mail className="h-6 w-6 text-[#8C5695]" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-gray-900">Email Us</div>
                  <div className="text-sm text-gray-600">support@topaz.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C5695]/10">
                  <Phone className="h-6 w-6 text-[#8C5695]" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-gray-900">Call Us</div>
                  <div className="text-sm text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8C5695]/10">
                  <MapPin className="h-6 w-6 text-[#8C5695]" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-gray-900">Visit Us</div>
                  <div className="text-sm text-gray-600">123 Tech Street, San Francisco, CA 94102</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <div className="mb-3 text-sm font-bold text-gray-900">Follow Us</div>
              <div className="flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all hover:border-[#8C5695] hover:bg-[#8C5695]/5">
                  <Twitter className="h-5 w-5 text-gray-600" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all hover:border-[#8C5695] hover:bg-[#8C5695]/5">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all hover:border-[#8C5695] hover:bg-[#8C5695]/5">
                  <Github className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-2xl font-black text-gray-900">Message Sent!</h3>
                <p className="text-sm text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-900">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-[#8C5695] focus:outline-none focus:ring-2 focus:ring-[#8C5695]/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-900">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-[#8C5695] focus:outline-none focus:ring-2 focus:ring-[#8C5695]/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-900">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-[#8C5695] focus:outline-none focus:ring-2 focus:ring-[#8C5695]/20"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="billing">Billing Issue</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-900">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-[#8C5695] focus:outline-none focus:ring-2 focus:ring-[#8C5695]/20"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-900">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm transition-all focus:border-[#8C5695] focus:outline-none focus:ring-2 focus:ring-[#8C5695]/20"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-6 py-4 text-base font-bold text-white shadow-lg transition-all hover:scale-105"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactMethodsSection = () => {
  const methods = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      desc: 'Chat with our support team in real-time',
      action: 'Start Chat',
      available: 'Available 24/7'
    },
    {
      icon: Headphones,
      title: 'Phone Support',
      desc: 'Speak directly with our experts',
      action: 'Call Now',
      available: 'Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email Support',
      desc: 'Send us a detailed message',
      action: 'Send Email',
      available: 'Response within 24h'
    }
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-black text-gray-900 sm:text-5xl">
            Choose Your
            <span className="text-[#8C5695]"> Support Channel</span>
          </h2>
          <p className="text-base text-gray-600">Multiple ways to reach us, all backed by expert support</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[#8C5695] opacity-0 blur-3xl transition-opacity group-hover:opacity-10" />
                
                <div className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#8C5695]/10">
                    <Icon className="h-7 w-7 text-[#8C5695]" />
                  </div>
                  
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{method.title}</h3>
                  <p className="mb-4 text-sm text-gray-600 leading-relaxed">{method.desc}</p>
                  
                  <div className="mb-4 inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-3 py-1">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium text-green-700">{method.available}</span>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5695] transition-all hover:gap-3">
                    {method.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Map Placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
            <div className="flex h-96 items-center justify-center bg-gray-100">
              <div className="text-center">
                <Globe className="mx-auto mb-4 h-16 w-16 text-[#8C5695]" />
                <div className="text-xl font-bold text-gray-900">San Francisco Office</div>
                <div className="mt-2 text-sm text-gray-600">123 Tech Street, CA 94102</div>
              </div>
            </div>
          </div>

          {/* Office Info */}
          <div>
            <h2 className="mb-6 text-4xl font-black text-gray-900 sm:text-5xl">
              Visit Our
              <span className="block text-[#8C5695]">Office</span>
            </h2>

            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Drop by our office for a coffee and a chat. We'd love to meet you in person 
              and show you around our facilities.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8C5695]/10">
                  <Clock className="h-5 w-5 text-[#8C5695]" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-gray-900">Office Hours</div>
                  <div className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div className="text-sm text-gray-600">Saturday - Sunday: Closed</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8C5695]/10">
                  <MapPin className="h-5 w-5 text-[#8C5695]" />
                </div>
                <div>
                  <div className="mb-1 text-sm font-bold text-gray-900">Getting Here</div>
                  <div className="text-sm text-gray-600">Parking available on-site</div>
                  <div className="text-sm text-gray-600">Near Montgomery St. BART Station</div>
                </div>
              </div>
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-[#8C5695] bg-transparent px-6 py-3 text-sm font-bold text-[#8C5695] transition-all hover:bg-[#8C5695] hover:text-white">
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'What is your average response time?',
      a: 'We typically respond to all inquiries within 5 minutes during business hours and within 1 hour outside business hours.'
    },
    {
      q: 'Do you offer phone support?',
      a: 'Yes! Phone support is available Monday-Friday, 9AM-6PM PST. Premium customers get 24/7 phone support.'
    },
    {
      q: 'Can I schedule a demo?',
      a: 'Absolutely! Use our contact form and select "Sales Question" to schedule a personalized demo with our team.'
    },
    {
      q: 'Where is your support team located?',
      a: 'Our primary support team is based in San Francisco, with additional teams in Europe and Asia for 24/7 coverage.'
    }
  ];

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-black text-gray-900 sm:text-5xl">
            Common <span className="text-[#8C5695]">Questions</span>
          </h2>
          <p className="text-base text-gray-600">Quick answers to questions you may have</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <h3 className="mb-2 text-base font-bold text-gray-900">{faq.q}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-[#8C5695]/20 bg-gradient-to-br from-[#8C5695]/5 to-white p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-gray-900">Still have questions?</h3>
          <p className="mb-6 text-sm text-gray-600">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#8C5695] to-[#986AA1] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105">
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;