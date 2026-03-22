import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/home/EmailCapture'

export const metadata: Metadata = {
  title: "Start Here — Your FIRE Beginner's Guide",
  description:
    'New to FIRE? Start here. Learn what Financial Independence Retire Early means, whether it can work for your income, and the exact steps to get started today.',
}

const STEPS = [
  {
    number: '01',
    title: 'Understand What FIRE Actually Is',
    body: 'FIRE stands for Financial Independence, Retire Early. The core idea: save and invest enough that your portfolio generates passive income covering all your expenses — indefinitely. "Retire early" doesn\'t necessarily mean stop working. It means work becomes optional.',
    link: { label: 'Read: What is the FIRE Movement?', href: '/blog/fire-basics/what-is-fire' },
  },
  {
    number: '02',
    title: 'Calculate Your FIRE Number',
    body: 'Your FIRE number is the portfolio size that makes work optional. The math: multiply your annual expenses by 25 (the 4% rule). Spend $50K/year? Your FIRE number is $1.25M. Use our calculator to find yours in 60 seconds.',
    link: { label: 'Try the FIRE Number Calculator', href: '/fire-number-calculator' },
  },
  {
    number: '03',
    title: 'Raise Your Savings Rate',
    body: 'The savings rate is the most powerful lever in FIRE. At 10%, traditional retirement takes 40+ years. At 50%, you can hit FIRE in under 15 years. The goal: reduce expenses, increase income, and funnel the difference into investments.',
    link: { label: 'Read: How to Raise Your Savings Rate', href: '/blog/saving' },
  },
  {
    number: '04',
    title: 'Open the Right Accounts',
    body: '401(k), Roth IRA, HSA — these tax-advantaged accounts are the engine of every FIRE strategy. Max them out before taxable brokerage accounts. In 2024: 401(k) max is $23,000; Roth IRA max is $7,000; HSA max is $4,150.',
    link: { label: 'Read: Tax Strategy for FIRE', href: '/blog/tax-strategy' },
  },
  {
    number: '05',
    title: 'Invest in Low-Cost Index Funds',
    body: "Simple three-fund portfolio: US total market fund (e.g. VTI), international fund (e.g. VXUS), bonds (e.g. BND). Set your allocation based on your timeline. Automate contributions. Don't try to beat the market.",
    link: { label: 'Read: Index Fund Investing for FIRE', href: '/blog/investing' },
  },
  {
    number: '06',
    title: 'Track Your Progress',
    body: "Monitor your net worth monthly. Watch your FIRE progress percentage climb. Use a tool like Empower (free) to see all accounts in one place. Adjust your savings rate when income changes. The magic is in the compounding — don't stop.",
    link: { label: 'View FIRE Tools & Resources', href: '/resources' },
  },
]

export default function StartHerePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-amber mb-4">New to FIRE?</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Start Here.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Everything you need to understand the FIRE movement and take your first steps toward financial independence — in plain English, no MBA required.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-[-3rem] w-0.5 bg-surface-border" />
                )}
                <div className="flex items-start gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-navy rounded-2xl flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-amber-400">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h2 className="font-display text-xl font-bold text-charcoal mb-3">
                      {step.title}
                    </h2>
                    <p className="text-charcoal-600 leading-relaxed mb-4">{step.body}</p>
                    <Link
                      href={step.link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
                    >
                      {step.link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRE Spectrum */}
      <section className="py-16 bg-white border-y border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-label mb-3">The FIRE Spectrum</p>
            <h2 className="font-display text-2xl font-bold text-charcoal">
              FIRE isn&apos;t one-size-fits-all
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: 'LeanFIRE', spending: 'Under $40K/year', icon: '🌿', desc: 'Minimalist lifestyle. Frugal by choice. Typically requires a smaller portfolio.' },
              { type: 'FIRE', spending: '$40K–$80K/year', icon: '🔥', desc: 'The classic version. Comfortable lifestyle, moderate spending, achievable for most.' },
              { type: 'FatFIRE', spending: '$80K+/year', icon: '💎', desc: "Retire with abundance. Higher income required but doesn't mean extreme sacrifice." },
            ].map((item) => (
              <div key={item.type} className="card text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-charcoal text-lg mb-1">{item.type}</h3>
                <p className="text-amber-600 text-sm font-semibold mb-3">{item.spending}</p>
                <p className="text-charcoal-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture */}
      <section id="email" className="py-20 bg-cream">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture
            variant="card"
            source="start-here"
            headline="Get the FIRE Starter Kit"
            description="Download the free guide: your FIRE number calculated, the 4% rule explained, the 5 accounts you need, and a savings rate tracker. Everything in one place."
          />
        </div>
      </section>
    </>
  )
}
