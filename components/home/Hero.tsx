import Link from 'next/link'
import EmailCapture from './EmailCapture'

export default function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-500 text-sm">🔥</span>
            <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
              Financial Independence · Retire Early
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Financial freedom{' '}
            <span className="text-amber-400 italic">isn&apos;t just</span>
            <br />
            for the wealthy.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            What&apos;s FIRE? It&apos;s your roadmap to financial independence and early retirement —
            no trust fund required. Plain-English guides, calculators, and a clear path
            forward at any income level.
          </p>

          {/* Email capture */}
          <EmailCapture
            variant="hero"
            source="hero"
          />

          {/* Trust line */}
          <p className="mt-5 text-sm text-white/40">
            Free guide. No spam. Unsubscribe any time.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative border-t border-white/10 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
            {[
              { label: 'The FIRE Rule', value: '4%', sub: 'Safe withdrawal rate' },
              { label: 'FIRE Number Target', value: '25×', sub: 'Your annual expenses' },
              { label: 'Average FIRE Age', value: '40s', sub: 'With consistent saving' },
            ].map((stat) => (
              <div key={stat.label} className="sm:px-8 first:pl-0 last:pr-0 text-center sm:text-left">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-1">
                  {stat.label}
                </p>
                <p className="font-display text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50 mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
