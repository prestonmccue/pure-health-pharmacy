'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

const valueBadges = ['50 State Shipping', 'Streamlined Technology', 'Best Industry Pricing', 'Fast Turnaround'];

const painPoints = [
  'Searching multiple pharmacies',
  'Paying multiple shipping fees',
  'Multiple pharmacy invoices',
  'Extended delivery times'
];

const coreFeatures: FeatureItem[] = [
  {
    title: 'Single Shipping Rate',
    description: '$30 flat-fee cold chain shipping that keeps ordering simple and predictable.',
    icon: '📦'
  },
  {
    title: 'Competitive Pricing Guaranteed',
    description: 'Maximize margin and patient affordability with transparent, reliable pricing.',
    icon: '💰'
  },
  {
    title: 'Designed for Busy Practices',
    description: 'A clinical-first workflow built to reduce admin burden and speed fulfillment.',
    icon: '⚡'
  }
];

const categories: FeatureItem[] = [
  {
    title: 'HRT/TRT Solutions',
    description: 'Injectable, topical, and oral formulations tailored for hormone optimization protocols.',
    icon: '💊'
  },
  {
    title: 'Sexual Wellness',
    description: 'Male and female ED support across diverse delivery formats for individualized care.',
    icon: '❤️'
  },
  {
    title: 'Weight Loss Protocols',
    description: 'GLP-1 and peptide-based options to support evidence-driven metabolic treatment plans.',
    icon: '🎯'
  },
  {
    title: 'Performance & Recovery Peptides',
    description: 'Targeted peptide therapies for resilience, healthy aging, and recovery support.',
    icon: '🧬'
  },
  {
    title: 'Hair & Skin Health',
    description: 'Compounded therapies to support aesthetic outcomes and long-term skin and hair vitality.',
    icon: '✨'
  },
  {
    title: 'Comprehensive Wellness',
    description: 'Broader treatment options that help practices deliver whole-patient care strategies.',
    icon: '🌿'
  }
];

const whyPureHealth = [
  'Expansive formulary that grows with your practice',
  'Live time data reporting',
  'Scalable integrations with EMRs and APIs',
  'Best industry pricing - 20% less cost on average',
  '503A access from a single dashboard',
  'Reliable source for injectable sterile medications with 90-, 180- and 365-day BUDs'
];

type Product = {
  name: string;
  ndc: string;
  manufacturer: string;
  category?: string;
};

const preferredProducts: Product[] = [
  { name: 'Oxaprozin Cap 300 Mg 60 EA', ndc: '73308-0403-60', manufacturer: 'AURAX', category: 'NSAID' },
  { name: 'Coxanto-Oxaprozin Cap 300 Mg 60 EA', ndc: '69499-0403-60', manufacturer: 'SOLUBIOMIX', category: 'NSAID' },
  { name: 'Diclofenac Epolamine Patch 1.3% 30 EA', ndc: '82347-0405-05', manufacturer: 'YARAL', category: 'NSAID' },
  { name: 'Diclofenac Potassium Tab 25 MG 30 EA', ndc: '73352-0086-30', manufacturer: 'TRIFLUENT', category: 'NSAID' },
  { name: 'Diclofenac Potassium Tab 25 MG 60 EA', ndc: '73352-0086-60', manufacturer: 'TRIFLUENT', category: 'NSAID' },
  { name: 'Diclofenac Potassium Tab 25 MG 60 EA', ndc: '24470-0924-60', manufacturer: 'CINTEX', category: 'NSAID' },
  { name: 'Dolobid (Diflunisal Tab 375 MG 60 EA)', ndc: '74157-0101-60', manufacturer: 'INA PHARMA', category: 'NSAID' },
  { name: 'Lofena - Diclo-Pot Tab 25 MG 60 EA', ndc: '15370-0180-60', manufacturer: 'CARWIN', category: 'NSAID' },
  { name: 'Diclofenac Sodium Soln 2% 112 GM', ndc: '62332-0487-12', manufacturer: 'ALEMBIC', category: 'NSAID' },
  { name: 'Diclofenac Sodium Soln 2% 112 GM', ndc: '68180-0537-01', manufacturer: 'LUPIN', category: 'NSAID' },
  { name: 'Fenoprofen Calcium Cap 300 MG 100 EA', ndc: '61825-0311-10', manufacturer: 'GALT', category: 'NSAID' },
  { name: 'Ibuprofen-Famotidine Tab 800-26.6 MG 90 EA', ndc: '67877-0626-90', manufacturer: 'ASCEND', category: 'NSAID' },
  { name: 'Ketoprofen Cap 50 MG 100 EA', ndc: '00276-0506-10', manufacturer: 'MISEMER', category: 'NSAID' },
  { name: 'Ketoprofen Cap ER 24HR 200 MG 100 EA', ndc: '00378-8200-01', manufacturer: 'MYLAN', category: 'NSAID' },
  { name: 'Meloxicam Cap 10 MG 30 EA', ndc: '68180-0189-06', manufacturer: 'LUPIN', category: 'NSAID' },
  { name: 'Meloxicam Cap 10 Mg 30 EA', ndc: '70954-0077-10', manufacturer: 'ANI', category: 'NSAID' },
  { name: 'Relafen Tab 1000 MG 30 EA', ndc: '15370-0170-30', manufacturer: 'CARWIN', category: 'NSAID' },
  { name: 'Relafen Tab 1000 MG 60 EA', ndc: '15370-0170-60', manufacturer: 'CARWIN', category: 'NSAID' },
  { name: 'Vyscoxa Oral Susp. 10 MG/ML 473 ML', ndc: '15370-0501-16', manufacturer: 'CARWIN', category: 'NSAID' },
  { name: 'Abiraterone Acetate Tab 250 MG 120 EA', ndc: '72205-0030-92', manufacturer: 'NOVADOZ', category: 'Retail' },
  { name: 'Albuterol Sulfate Inhal Aero 108 MCG/ACT 6.7 GM', ndc: '00054-0742-87', manufacturer: 'HIKMA', category: 'Retail' },
  { name: 'Alendronate Sodium Tab 70 MG 4 EA UD', ndc: '64980-0342-14', manufacturer: 'RISING', category: 'Retail' },
  { name: 'Amoxicillin & K Clavulanate Tab 875-125 MG 20 EA', ndc: '65862-0503-20', manufacturer: 'AUROBINDO', category: 'Retail' },
  { name: 'Azelastine HCl Nasal Spray 0.1% 30 ML', ndc: '59651-0214-30', manufacturer: 'AUROBINDO', category: 'Retail' },
];

// Duplicate products for seamless infinite scroll
const duplicatedProducts = [...preferredProducts, ...preferredProducts];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white font-bold text-lg shadow-lg shadow-teal-500/25">
              P
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Pure Health Pharmacy</p>
              <p className="text-xs text-slate-500">For Medical Professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#get-started" className="hidden sm:inline-flex rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-900">
              Contact
            </a>
            <Link
              href="/login"
              className="rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              Doctor Portal
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen pt-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50" />
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-teal-200/60 to-cyan-200/60 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-200/60 to-teal-200/60 blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-white/80 to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="scroll-animate opacity-0 translate-y-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 px-4 py-2 ring-1 ring-teal-500/20">
                <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                <span className="text-sm font-medium text-teal-700">Built for Doctors and Clinical Teams</span>
              </div>
              <h1 className="text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl lg:text-6xl">
                Streamline
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> Prescription Fulfillment </span>
                for Your Patients
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
                A modern B2B pharmacy partner for clinics, med spas, and telehealth practices that need dependable compounding, simple logistics, and consistent turnaround.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {valueBadges.map((badge, idx) => (
                  <span 
                    key={badge} 
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-md shadow-slate-200/50 ring-1 ring-slate-100 transition hover:shadow-lg hover:-translate-y-0.5"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#get-started"
                  className="group rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-teal-500/25 transition hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-1"
                >
                  Get Started
                  <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
                </a>
                <Link
                  href="/portal"
                  className="rounded-xl bg-white px-8 py-4 text-base font-semibold text-slate-700 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200 transition hover:shadow-xl hover:-translate-y-1"
                >
                  Portal Login
                </Link>
              </div>
            </div>
            
            <div className="scroll-animate opacity-0 translate-y-8 animation-delay-200">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 blur-2xl opacity-20 animate-pulse-slow" />
                <div className="relative rounded-3xl bg-white p-8 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">No More:</h2>
                  <ul className="space-y-4">
                    {painPoints.map((item, idx) => (
                      <li 
                        key={item} 
                        className="flex items-center gap-4 p-3 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 text-slate-700 transition hover:scale-[1.02]"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-orange-400 text-white text-sm">✕</span>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Advantages */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-animate opacity-0 translate-y-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Operational Advantages</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Simplify pharmacy operations with predictable pricing, fast fulfillment, and one trusted partner.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {coreFeatures.map((feature, idx) => (
              <article 
                key={feature.title} 
                className="scroll-animate opacity-0 translate-y-8 group relative rounded-2xl bg-gradient-to-br from-slate-50 to-white p-8 ring-1 ring-slate-100 transition hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 transition group-hover:opacity-100" />
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="relative py-24 bg-gradient-to-b from-white via-teal-50/30 to-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="scroll-animate opacity-0 translate-y-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Products & Services</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Therapeutic categories designed to help your practice scale offerings while keeping patient care central.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => (
              <article 
                key={category.title} 
                className="scroll-animate opacity-0 translate-y-8 group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg shadow-slate-100 ring-1 ring-slate-100 transition hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${idx * 75}ms` }}
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 blur-2xl opacity-50 transition group-hover:opacity-100" />
                <span className="relative text-4xl">{category.icon}</span>
                <h3 className="relative mt-6 text-xl font-bold text-slate-900">{category.title}</h3>
                <p className="relative mt-3 text-slate-600 leading-relaxed">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preferred Products - Auto-scrolling Marquee */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 mb-12">
          <div className="scroll-animate opacity-0 translate-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Preferred Products</h2>
            <p className="mt-4 text-lg text-slate-400">
              Browse our curated selection of high-quality medications from trusted manufacturers.
            </p>
          </div>
        </div>
        
        {/* Marquee container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
          
          <div className="flex animate-marquee hover:pause-animation">
            {duplicatedProducts.map((product, idx) => (
              <article
                key={`${product.ndc}-${idx}`}
                className="mx-3 w-80 flex-shrink-0 rounded-2xl bg-white/10 backdrop-blur-sm p-6 ring-1 ring-white/10 transition hover:bg-white/20 hover:ring-white/20"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-medium text-teal-300 ring-1 ring-teal-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  {product.category}
                </span>
                <h3 className="mt-4 text-base font-semibold text-white leading-tight">{product.name}</h3>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-slate-400">NDC</span>
                    <span className="font-mono text-slate-200">{product.ndc}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-slate-400">Manufacturer</span>
                    <span className="text-slate-200">{product.manufacturer}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pure Health */}
      <section className="relative py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="scroll-animate opacity-0 translate-y-8">
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Why Pure Health Pharmacy</h2>
              <p className="mt-4 text-lg text-slate-600">
                Infrastructure and clinical support focused on helping high-performing practices operate with less friction.
              </p>
              <ul className="mt-10 space-y-4">
                {whyPureHealth.map((point, idx) => (
                  <li 
                    key={point} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-white ring-1 ring-slate-100 transition hover:shadow-lg hover:-translate-x-1"
                    style={{ animationDelay: `${idx * 75}ms` }}
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-xs">✓</span>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="scroll-animate opacity-0 translate-y-8 animation-delay-200">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 blur-2xl opacity-20" />
                <div className="relative rounded-3xl bg-gradient-to-br from-teal-500 to-cyan-600 p-10 text-white shadow-2xl shadow-teal-500/25">
                  <div className="absolute top-6 right-6 h-20 w-20 rounded-full bg-white/10 blur-2xl" />
                  <h3 className="text-3xl font-bold">Doctor Portal</h3>
                  <p className="mt-4 text-teal-100 leading-relaxed">
                    Manage prescribing workflows from one secure environment. Access is currently limited to approved medical accounts.
                  </p>
                  <Link
                    href="/portal"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-teal-600 shadow-lg transition hover:shadow-xl hover:-translate-y-1"
                  >
                    Go to Portal Login
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-slow animation-delay-2000" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="scroll-animate opacity-0 translate-y-8">
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                Reduce Inefficiencies.<br />
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Simplify Your Workflow.</span><br />
                Grow Your Practice.
              </h2>
              <p className="mt-6 text-lg text-slate-300">
                We have a customer care agent assigned to every clinical account.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 ring-4 ring-slate-900 flex items-center justify-center text-white font-bold">
                      {['👨‍⚕️', '👩‍⚕️', '🧑‍⚕️', '👨‍💼'][i-1]}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400">Join 500+ practices already using Pure Health</p>
              </div>
            </div>
            
            <div className="scroll-animate opacity-0 translate-y-8 animation-delay-200">
              <form className="rounded-3xl bg-white p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-slate-900">Get Started</h3>
                <p className="mt-2 text-slate-600">Fill out the form and our team will be in touch shortly.</p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <input 
                    className="rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 transition focus:ring-2 focus:ring-teal-500" 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                  />
                  <input 
                    className="rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 transition focus:ring-2 focus:ring-teal-500" 
                    placeholder="Email" 
                    type="email" 
                    name="email" 
                  />
                  <input 
                    className="rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 transition focus:ring-2 focus:ring-teal-500" 
                    placeholder="Clinic Name" 
                    type="text" 
                    name="clinic" 
                  />
                  <input 
                    className="rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 transition focus:ring-2 focus:ring-teal-500" 
                    placeholder="Phone" 
                    type="tel" 
                    name="phone" 
                  />
                </div>
                <textarea 
                  className="mt-4 w-full rounded-xl border-0 bg-slate-100 px-4 py-3 text-slate-900 placeholder:text-slate-400 ring-1 ring-slate-200 transition focus:ring-2 focus:ring-teal-500 min-h-32" 
                  placeholder="Message" 
                  name="message" 
                />
                <button 
                  type="submit" 
                  className="mt-6 w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white font-bold text-lg">
                  P
                </div>
                <div>
                  <p className="font-bold text-white">Pure Health Pharmacy</p>
                  <p className="text-sm text-slate-400">For Medical Professionals</p>
                </div>
              </div>
              <p className="mt-4 text-slate-400 max-w-sm">
                B2B compounding and peptide fulfillment partner for licensed providers across all 50 states.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#get-started" className="transition hover:text-teal-400">Get Started</a></li>
                <li><Link href="/login" className="transition hover:text-teal-400">Doctor Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <p className="text-slate-400">support@purehealthpharmacy.com</p>
              <p className="text-slate-400 mt-2">Contact info coming soon</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Pure Health Pharmacy. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
