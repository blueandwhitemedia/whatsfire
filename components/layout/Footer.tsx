import Link from 'next/link'

const CONTENT_LINKS = [
  { label: 'FIRE Basics', href: '/blog/fire-basics' },
  { label: 'Investing', href: '/blog/investing' },
  { label: 'Saving', href: '/blog/saving' },
  { label: 'Retirement', href: '/blog/retirement' },
  { label: 'Tax Strategy', href: '/blog/tax-strategy' },
  { label: 'Healthcare', href: '/blog/healthcare' },
  { label: 'Debt', href: '/blog/debt' },
  { label: 'Side Hustle', href: '/blog/side-hustle' },
]

const TOOLS_LINKS = [
  { label: 'FIRE Number Calculator', href: '/fire-number-calculator' },
  { label: 'Resources', href: '/resources' },
  { label: 'Start Here', href: '/start-here' },
  { label: 'Blog', href: '/blog' },
]

const LEGAL_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Affiliate Disclosure', href: '/disclosure' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA band */}
      <div className="bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display font-bold text-navy text-lg">
              Start your FIRE journey today.
            </p>
            <p className="text-navy/80 text-sm mt-1">
              Get the free FIRE Starter Kit — no jargon, just a clear path forward.
            </p>
          </div>
          <Link href="/start-here#email" className="btn-secondary shrink-0">
            Get the Free Guide
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display font-bold text-xl text-white">
                What&apos;s FIRE? 🔥
              </span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Plain-English guides to financial independence and early retirement — for every income level.
            </p>
            <p className="mt-4 text-xs text-white/40">
              © {new Date().getFullYear()} What&apos;s FIRE. All rights reserved.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4">
              Topics
            </h4>
            <ul className="space-y-2">
              {CONTENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4">
              Tools & Guides
            </h4>
            <ul className="space-y-2">
              {TOOLS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            <strong className="text-white/60">Disclaimer:</strong> The information on What&apos;s FIRE? is for educational purposes only and is not financial, tax, or legal advice. Always consult a qualified financial advisor before making investment decisions. Some links on this site are affiliate links — we may earn a commission at no extra cost to you. See our{' '}
            <Link href="/disclosure" className="underline hover:text-white/60 transition-colors">
              affiliate disclosure
            </Link>{' '}
            for details.
          </p>
        </div>
      </div>
    </footer>
  )
}
