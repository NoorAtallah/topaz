'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      {/* Optimized Three.js 3D Background */}
      <ThreeBackground />
      
      {/* Simplified Static Hexagon Grid */}
      <HexagonGrid />
      
      {/* Reduced Data Streams */}
      <DataStreams />
      
      {/* Combined Overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_100%)]" />
      </div>
      
      {/* Static Corner Decorations */}
      <CornerDecorations />

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8C5695]/40 bg-[#8C5695]/5 px-6 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-[#8C5695] animate-pulse" />
            <span className="font-mono text-sm font-medium tracking-wider text-white/90">
              NEXT-GEN INFRASTRUCTURE
            </span>
          </div>
        </motion.div>

        {/* Main Heading with Simplified Glitch */}
        <div className="relative mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative text-6xl font-black uppercase tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="relative inline-block">
              <span className="relative z-10 drop-shadow-[0_0_30px_rgba(140,86,149,0.8)]">TOPAZ</span>
              {/* Simplified glitch effect - only on hover */}
              <span className="absolute left-0 top-0 z-0 text-[#8C5695] opacity-0 hover:opacity-50 transition-opacity">
                TOPAZ
              </span>
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mx-auto mt-4 h-1 w-64 origin-center bg-gradient-to-r from-transparent via-[#8C5695] to-transparent"
          />
        </div>

        {/* Subtitle - Static after animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-12 max-w-3xl"
        >
          <p className="font-mono text-xl text-white/80 md:text-2xl">
            Powerful VPS Hosting & Professional Server Solutions
          </p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="mt-4 text-base text-white/60 md:text-lg"
          >
            Enterprise-grade infrastructure built for developers, businesses, and innovators
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <HolographicButton primary>
            LAUNCH PROJECT
          </HolographicButton>
          <HolographicButton>
            EXPLORE SERVICES
          </HolographicButton>
        </motion.div>

        {/* Tech Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-16 grid grid-cols-3 gap-8 md:gap-16"
        >
          <TechStat value="99.9%" label="UPTIME" />
          <TechStat value="24/7" label="SUPPORT" />
          <TechStat value="<50ms" label="LATENCY" />
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <SystemStatus label="API" />
          <SystemStatus label="DATABASE" />
          <SystemStatus label="SERVERS" />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
};

// OPTIMIZED Three.js Background Component
const ThreeBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let scene, camera, renderer, particles;
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    // Performance check
    const isMobile = window.innerWidth < 768;
    const isLowPerf = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    const init = () => {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: false, // Disable for performance
        powerPreference: 'high-performance'
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Cap pixel ratio

      // REDUCED particle count based on device
      const particleCount = isMobile ? 300 : 600;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 100;

        // Single color for simplicity
        colors[i] = 140 / 255;
        colors[i + 1] = 86 / 255;
        colors[i + 2] = 149 / 255;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: isMobile ? 0.4 : 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      // Only add ONE geometric shape to reduce complexity
      if (!isMobile) {
        const torusGeometry = new THREE.TorusGeometry(10, 1, 8, 50); // Reduced segments
        const torusMaterial = new THREE.MeshBasicMaterial({
          color: 0x8C5695,
          wireframe: true,
          transparent: true,
          opacity: 0.1,
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.z = -20;
        scene.add(torus);
        window.torus = torus;
      }

      // Event listeners with throttling
      let mouseMoveTimeout;
      window.addEventListener('mousemove', (event) => {
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
          mouse.targetX = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
        }, 16); // ~60fps throttle
      });

      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        }, 250);
      });
    };

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate particles slowly
      if (particles) {
        particles.rotation.y += 0.0002;
      }

      // Rotate torus if it exists
      if (window.torus) {
        window.torus.rotation.x += 0.002;
        window.torus.rotation.y += 0.001;
      }

      // Subtle camera movement
      camera.position.x += (mouse.x * 1 - camera.position.x) * 0.01;
      camera.position.y += (mouse.y * 1 - camera.position.y) * 0.01;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    // Load Three.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    script.onload = () => {
      if (!isLowPerf) {
        init();
        animate();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      window.torus = null;
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

// Simplified Holographic Button
const HolographicButton = ({ children, primary }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden rounded-lg px-8 py-4 font-mono text-sm font-bold tracking-wider"
    >
      <div className={`absolute inset-0 ${primary ? 'bg-gradient-to-r from-[#8C5695] to-[#986AA1]' : 'bg-white/5'}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0 rounded-lg border-2 border-[#8C5695]/50" />
      <span className="relative z-10 text-white">{children}</span>
    </motion.button>
  );
};

// Simplified Tech Stat
const TechStat = ({ value, label }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="relative"
    >
      <div className="font-mono text-3xl font-bold text-white md:text-4xl">
        {value}
      </div>
      <div className="mt-1 font-mono text-xs tracking-widest text-[#8C5695]">
        {label}
      </div>
      <div className="mx-auto mt-3 h-1 w-20 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full w-full bg-gradient-to-r from-[#8C5695] to-[#986AA1]"
        />
      </div>
    </motion.div>
  );
};

// Simplified System Status
const SystemStatus = ({ label }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full bg-[#8C5695] animate-pulse" />
      <span className="font-mono text-xs tracking-wider text-white/60">
        {label}
      </span>
      <span className="font-mono text-xs font-bold tracking-wider text-[#8C5695]">
        [ONLINE]
      </span>
    </div>
  );
};

// Static Hexagon Grid (CSS only)
const HexagonGrid = () => {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexagons" width="100" height="86.6" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="#8C5695" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

// Reduced Data Streams (from 8 to 4)
const DataStreams = () => {
  const streams = useMemo(() => 
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      left: `${20 + i * 25}%`,
      delay: i * 2,
      duration: 15,
    })), []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute top-0 h-32 w-px bg-gradient-to-b from-transparent via-[#8C5695] to-transparent"
          style={{ left: stream.left }}
          animate={{
            y: ['-100%', '100vh'],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// Simplified Corner Decorations (static)
const CornerDecorations = () => {
  return (
    <>
      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute left-8 top-8"
      >
        <div className="relative h-16 w-16">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-[#8C5695] to-transparent" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#8C5695] to-transparent" />
          <div className="absolute left-0 top-0 h-2 w-2 rounded-full bg-[#8C5695]" />
        </div>
      </motion.div>

      {/* Top Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute right-8 top-8"
      >
        <div className="relative h-16 w-16">
          <div className="absolute right-0 top-0 h-px w-full bg-gradient-to-l from-[#986AA1] to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-[#986AA1] to-transparent" />
          <div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#986AA1]" />
        </div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-8 left-8"
      >
        <div className="relative h-16 w-16">
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#986AA1] to-transparent" />
          <div className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-[#986AA1] to-transparent" />
          <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-[#986AA1]" />
        </div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-8 right-8"
      >
        <div className="relative h-16 w-16">
          <div className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-[#8C5695] to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#8C5695] to-transparent" />
          <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-[#8C5695]" />
        </div>
      </motion.div>
    </>
  );
};

// Simplified Scroll Indicator
const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs tracking-wider text-white/40">SCROLL</span>
        <div className="h-12 w-6 rounded-full border-2 border-[#8C5695]/40">
          <motion.div
            animate={{ y: [4, 16, 4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mx-auto mt-1 h-2 w-2 rounded-full bg-[#8C5695]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;