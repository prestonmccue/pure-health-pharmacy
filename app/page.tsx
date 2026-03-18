import Link from 'next/link';

type FeatureItem = {
  title: string;
  description: string;
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
    description: '$30 flat-fee cold chain shipping that keeps ordering simple and predictable.'
  },
  {
    title: 'Competitive Pricing Guaranteed',
    description: 'Maximize margin and patient affordability with transparent, reliable pricing.'
  },
  {
    title: 'Designed for Busy Practices',
    description: 'A clinical-first workflow built to reduce admin burden and speed fulfillment.'
  }
];

const categories: FeatureItem[] = [
  {
    title: 'HRT/TRT Solutions',
    description: 'Injectable, topical, and oral formulations tailored for hormone optimization protocols.'
  },
  {
    title: 'Sexual Wellness',
    description: 'Male and female ED support across diverse delivery formats for individualized care.'
  },
  {
    title: 'Weight Loss Protocols',
    description: 'GLP-1 and peptide-based options to support evidence-driven metabolic treatment plans.'
  },
  {
    title: 'Performance & Recovery Peptides',
    description: 'Targeted peptide therapies for resilience, healthy aging, and recovery support.'
  },
  {
    title: 'Hair & Skin Health',
    description: 'Compounded therapies to support aesthetic outcomes and long-term skin and hair vitality.'
  },
  {
    title: 'Comprehensive Wellness',
    description: 'Broader treatment options that help practices deliver whole-patient care strategies.'
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
  // Pain - NSAID
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
  // Top Moving Retail Items
  { name: 'Abiraterone Acetate Tab 250 MG 120 EA', ndc: '72205-0030-92', manufacturer: 'NOVADOZ', category: 'Retail' },
  { name: 'Albuterol Sulfate Inhal Aero 108 MCG/ACT 6.7 GM', ndc: '00054-0742-87', manufacturer: 'HIKMA', category: 'Retail' },
  { name: 'Alendronate Sodium Tab 70 MG 4 EA UD', ndc: '64980-0342-14', manufacturer: 'RISING', category: 'Retail' },
  { name: 'Amoxicillin & K Clavulanate Tab 875-125 MG 20 EA', ndc: '65862-0503-20', manufacturer: 'AUROBINDO', category: 'Retail' },
  { name: 'Azelastine HCl Nasal Spray 0.1% 30 ML', ndc: '59651-0214-30', manufacturer: 'AUROBINDO', category: 'Retail' },
];

export default function Home() {
  return (
    <main>
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="section-wrap flex items-center justify-between py-5 md:py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Pure Health Pharmacy</p>
            <p className="text-sm text-slate-500">Compounding & Peptide Solutions for Medical Professionals</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-md border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
            >
              Doctor Portal
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-white to-white">
        <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
        <div className="section-wrap">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-brand-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                Built for Doctors and Clinical Teams
              </p>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Streamline Prescription Fulfillment for Your Patients with Pure Health Pharmacy
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-600">
                A modern B2B pharmacy partner for clinics, med spas, and telehealth practices that need dependable compounding,
                simple logistics, and consistent turnaround.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {valueBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-medium text-brand-700 shadow-sm">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href="#get-started"
                  className="rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
                >
                  Get Started
                </a>
                <Link
                  href="/portal"
                  className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Portal Login
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
              <h2 className="text-2xl font-semibold text-slate-900">No More:</h2>
              <ul className="mt-5 space-y-4">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrap">
          <h2 className="text-3xl font-bold text-slate-900">Operational Advantages</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Simplify pharmacy operations with predictable pricing, fast fulfillment, and one trusted partner.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {coreFeatures.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-50/50">
        <div className="section-wrap">
          <h2 className="text-3xl font-bold text-slate-900">Products & Services</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Therapeutic categories designed to help your practice scale offerings while keeping patient care central.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <article key={category.title} className="rounded-xl border border-brand-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-lg bg-brand-100 p-2 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M12 3v18M3 12h18" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                <p className="mt-3 text-slate-600">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Preferred Products - Horizontal Scroll */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Preferred Products</h2>
          <p className="mt-3 text-slate-600">Browse our curated selection of high-quality medications from trusted manufacturers.</p>
        </div>
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
            {preferredProducts.map((product, idx) => (
              <article
                key={`${product.ndc}-${idx}`}
                className="w-72 flex-shrink-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700">
                  {product.category}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 leading-tight">{product.name}</h3>
                <div className="mt-4 space-y-1 text-sm text-slate-600">
                  <p><span className="font-medium text-slate-700">NDC:</span> {product.ndc}</p>
                  <p><span className="font-medium text-slate-700">MFG:</span> {product.manufacturer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Why Pure Health Pharmacy</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Infrastructure and clinical support focused on helping high-performing practices operate with less friction.
            </p>
            <ul className="mt-8 space-y-4">
              {whyPureHealth.map((point) => (
                <li key={point} className="flex gap-3 text-slate-700">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-cyan-50 p-8">
            <h3 className="text-2xl font-semibold text-slate-900">Doctor Portal</h3>
            <p className="mt-3 text-slate-600">
              Manage prescribing workflows from one secure environment. Access is currently limited to approved medical accounts.
            </p>
            <Link
              href="/portal"
              className="mt-6 inline-flex rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Go to Portal Login
            </Link>
          </div>
        </div>
      </section>

      <section id="get-started" className="bg-slate-900 text-white">
        <div className="section-wrap grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold">Reduce Inefficiencies. Simplify Your Workflow. Grow Your Practice.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              We have a customer care agent assigned to every clinical account.
            </p>
          </div>
          <form className="rounded-xl bg-white p-6 text-slate-900">
            <h3 className="text-xl font-semibold">Get Started</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Name" type="text" name="name" />
              <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Email" type="email" name="email" />
              <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Clinic Name" type="text" name="clinic" />
              <input className="rounded-md border border-slate-300 px-3 py-2" placeholder="Phone" type="tel" name="phone" />
            </div>
            <textarea className="mt-4 min-h-28 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Message" name="message" />
            <button type="submit" className="mt-4 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="section-wrap grid gap-8 py-10 md:grid-cols-3 md:py-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">Pure Health Pharmacy</p>
            <p className="mt-3 text-sm text-slate-600">B2B compounding and peptide fulfillment partner for licensed providers.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <a href="#get-started" className="hover:text-slate-900">
                  Get Started
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-slate-900">
                  Doctor Portal
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">Contact</h3>
            <p className="mt-3 text-sm text-slate-600">Contact info coming soon</p>
            <p className="text-sm text-slate-600">support@purehealthpharmacy.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
