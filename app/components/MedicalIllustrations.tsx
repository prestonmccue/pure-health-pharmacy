'use client';

export function PillCapsule({ className = '', color1 = '#14b8a6', color2 = '#0891b2' }: { className?: string; color1?: string; color2?: string }) {
  return (
    <svg viewBox="0 0 100 40" className={className} fill="none">
      <defs>
        <linearGradient id={`pill-grad-${color1}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color1} />
          <stop offset="100%" stopColor={color2} />
        </linearGradient>
      </defs>
      <rect x="5" y="5" width="90" height="30" rx="15" fill={`url(#pill-grad-${color1})`} />
      <rect x="50" y="5" width="45" height="30" rx="15" fill="white" fillOpacity="0.3" />
      <ellipse cx="20" cy="12" rx="8" ry="3" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

export function Vial({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} fill="none">
      <defs>
        <linearGradient id="vial-liquid" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="vial-glass" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.1" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* Cap */}
      <rect x="15" y="0" width="30" height="15" rx="2" fill="#6366f1" />
      <rect x="18" y="15" width="24" height="8" fill="#a5b4fc" />
      {/* Neck */}
      <path d="M18 23 L18 35 L10 45 L10 110 Q10 115 15 115 L45 115 Q50 115 50 110 L50 45 L42 35 L42 23 Z" fill="url(#vial-glass)" stroke="#e2e8f0" strokeWidth="1" />
      {/* Liquid */}
      <path d="M12 55 L48 55 L48 108 Q48 113 44 113 L16 113 Q12 113 12 108 Z" fill="url(#vial-liquid)" />
      {/* Shine */}
      <path d="M15 50 L15 100 Q15 105 18 105" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

export function Syringe({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 30" className={className} fill="none">
      <defs>
        <linearGradient id="syringe-liquid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      {/* Barrel */}
      <rect x="30" y="5" width="70" height="20" rx="3" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Liquid */}
      <rect x="32" y="7" width="50" height="16" rx="2" fill="url(#syringe-liquid)" fillOpacity="0.7" />
      {/* Plunger */}
      <rect x="100" y="8" width="18" height="14" rx="2" fill="#94a3b8" />
      <rect x="115" y="5" width="4" height="20" rx="1" fill="#64748b" />
      {/* Needle */}
      <rect x="5" y="13" width="25" height="4" fill="#94a3b8" />
      <polygon points="0,15 5,12 5,18" fill="#64748b" />
      {/* Markings */}
      <line x1="40" y1="5" x2="40" y2="9" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="50" y1="5" x2="50" y2="9" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="60" y1="5" x2="60" y2="9" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="70" y1="5" x2="70" y2="9" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="80" y1="5" x2="80" y2="9" stroke="#cbd5e1" strokeWidth="1" />
    </svg>
  );
}

export function FloatingPills() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large pill top right */}
      <div className="absolute top-20 right-10 w-32 h-12 animate-float opacity-60">
        <PillCapsule className="w-full h-full drop-shadow-lg" />
      </div>
      
      {/* Small pill mid left */}
      <div className="absolute top-1/3 -left-8 w-24 h-10 animate-float-delayed opacity-40 rotate-45">
        <PillCapsule className="w-full h-full" color1="#f472b6" color2="#ec4899" />
      </div>
      
      {/* Vial bottom right */}
      <div className="absolute bottom-32 right-1/4 w-16 h-32 animate-float-slow opacity-50">
        <Vial className="w-full h-full drop-shadow-xl" />
      </div>
      
      {/* Small pill bottom left */}
      <div className="absolute bottom-20 left-20 w-20 h-8 animate-float opacity-30 -rotate-12">
        <PillCapsule className="w-full h-full" color1="#a78bfa" color2="#8b5cf6" />
      </div>
      
      {/* Syringe mid right */}
      <div className="absolute top-1/2 -right-10 w-40 h-10 animate-float-delayed opacity-40 -rotate-45">
        <Syringe className="w-full h-full drop-shadow-lg" />
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-200/30 via-transparent to-cyan-200/30 rounded-3xl" />
      
      {/* Central vial */}
      <div className="relative z-10">
        <div className="absolute -inset-8 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse-slow" />
        <Vial className="w-24 h-48 drop-shadow-2xl" />
      </div>
      
      {/* Orbiting pills */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-8">
          <PillCapsule className="w-full h-full drop-shadow-lg" />
        </div>
      </div>
      
      <div className="absolute inset-0 animate-spin-slow animation-delay-2000" style={{ animationDirection: 'reverse' }}>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-6">
          <PillCapsule className="w-full h-full" color1="#f472b6" color2="#ec4899" />
        </div>
      </div>
      
      {/* Floating syringes */}
      <div className="absolute top-1/4 -left-4 w-32 h-8 -rotate-45 animate-float opacity-70">
        <Syringe className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/4 -right-4 w-28 h-7 rotate-45 animate-float-delayed opacity-60">
        <Syringe className="w-full h-full" />
      </div>
    </div>
  );
}
