import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center px-6 py-16">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">Doctor Portal</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Pure Health Pharmacy Login</h1>
          <p className="mt-3 text-sm text-slate-600">Secure provider access. No backend authentication is connected yet.</p>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="doctor@clinic.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
            </div>

            <button type="submit" className="w-full rounded-md bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700">
              Sign In
            </button>
          </form>

          <div className="mt-5 text-sm text-slate-600">
            New provider account?{' '}
            <a href="#" className="font-semibold text-brand-700 hover:text-brand-800">
              Request Access
            </a>
          </div>

          <Link href="/" className="mt-6 inline-block text-sm font-medium text-slate-600 hover:text-slate-900">
            Back to main site
          </Link>
        </div>
      </div>
    </main>
  );
}
