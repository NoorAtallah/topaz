'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "The best VPS service I've ever used – fast and reliable.",
      author: "Ameen M.",
      role: "Full Stack Developer",
      rating: 5,
      avatar: "AM"
    },
    {
      id: 2,
      quote: "Exceptional customer support. They helped me migrate my website in minutes!",
      author: "Layla H.",
      role: "E-commerce Owner",
      rating: 5,
      avatar: "LH"
    },
    {
      id: 3,
      quote: "Their prices are fair and the performance is amazing. Highly recommend.",
      author: "Mohammad Z.",
      role: "Startup Founder",
      rating: 5,
      avatar: "MZ"
    }
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      }
      return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
    });
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/20 to-white py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Static Gradient Orbs */}
        <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[#8C5695] opacity-5 blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#986AA1] opacity-5 blur-[120px]" />
      </div>

      {/* Quote Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="quotes" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <text x="50" y="100" fontSize="48" fill="#8C5695" opacity="0.3" fontFamily="serif">"</text>
            <text x="150" y="50" fontSize="48" fill="#986AA1" opacity="0.3" fontFamily="serif">"</text>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#quotes)" />
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
            <Quote className="h-4 w-4 text-[#8C5695]" />
            <span className="font-mono text-sm font-medium tracking-wider text-[#8C5695]">
              TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-4xl font-black uppercase tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-transparent">
              Thousands
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            See what our customers say about their experience
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative mx-auto max-w-5xl">
          {/* Giant Quote Marks */}
          <div className="pointer-events-none absolute -left-8 -top-8 text-[200px] font-serif leading-none text-[#8C5695] opacity-5 md:-left-16 md:-top-16 md:text-[300px]">
            "
          </div>
          <div className="pointer-events-none absolute -bottom-8 -right-8 rotate-180 text-[200px] font-serif leading-none text-[#986AA1] opacity-5 md:-bottom-16 md:-right-16 md:text-[300px]">
            "
          </div>

          {/* Testimonial Card Container */}
          <div className="relative min-h-[400px] md:min-h-[500px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <TestimonialCard testimonial={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-center gap-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#8C5695] opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#8C5695]/40 bg-white shadow-lg backdrop-blur-sm transition-colors hover:border-[#8C5695] hover:bg-[#8C5695]/5">
                <ChevronLeft className="h-6 w-6 text-[#8C5695]" />
              </div>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                >
                  <div
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'w-8 bg-gradient-to-r from-[#8C5695] to-[#986AA1]'
                        : 'bg-gray-300'
                    }`}
                  />
                </motion.button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#986AA1] opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#986AA1]/40 bg-white shadow-lg backdrop-blur-sm transition-colors hover:border-[#986AA1] hover:bg-[#986AA1]/5">
                <ChevronRight className="h-6 w-6 text-[#986AA1]" />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-3 gap-8 md:gap-16"
        >
          <StatItem value="5000+" label="Happy Clients" />
          <StatItem value="4.9/5" label="Average Rating" />
          <StatItem value="99%" label="Satisfaction" />
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative h-full">
      {/* Card Background with Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8C5695]/5 to-[#986AA1]/5 blur-xl" />
      
      {/* Main Card */}
      <div className="relative rounded-3xl border border-[#8C5695]/20 bg-white p-8 shadow-2xl backdrop-blur-xl md:p-12">
        {/* Corner Accent */}
        <div className="absolute right-0 top-0 h-32 w-32 overflow-hidden rounded-tr-3xl opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8C5695] via-[#986AA1] to-transparent" />
        </div>

        {/* Stars Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex gap-1"
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            >
              <Star
                className="h-6 w-6 text-[#8C5695]"
                fill="#8C5695"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Text */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mb-8 text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl md:leading-relaxed"
        >
          {testimonial.quote}
        </motion.blockquote>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8C5695] to-[#986AA1] opacity-20 blur-md" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#8C5695]/30 bg-gradient-to-br from-[#8C5695]/10 to-[#986AA1]/10 backdrop-blur-sm">
              <span className="font-mono text-sm font-bold text-[#8C5695]">
                {testimonial.avatar}
              </span>
            </div>
          </div>

          {/* Name and Role */}
          <div>
            <div className="font-bold text-gray-900">{testimonial.author}</div>
            <div className="font-mono text-sm text-[#8C5695]">{testimonial.role}</div>
          </div>

          {/* Verified Badge */}
          <div className="ml-auto">
            <div className="rounded-full border border-[#8C5695]/40 bg-[#8C5695]/10 px-3 py-1">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#8C5695]">
                Verified
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const StatItem = ({ value, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="mb-2 bg-gradient-to-r from-[#8C5695] to-[#986AA1] bg-clip-text text-4xl font-black text-transparent md:text-5xl">
        {value}
      </div>
      <div className="font-mono text-xs uppercase tracking-widest text-gray-600">
        {label}
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;