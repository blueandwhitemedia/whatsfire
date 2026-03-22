import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import PillarGrid from '@/components/home/PillarGrid'
import RecentPosts from '@/components/home/RecentPosts'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: "What's FIRE? — Financial Independence & Early Retirement Guide",
  description:
    'Learn how to achieve financial independence and retire early. Plain-English guides, calculators, and tools for every income level. Calculate your FIRE number today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* FIRE explainer strip */}
      <section className="py-16 bg-cream border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">The FIRE Concept</p>
            <h2 className="font-display text-display-md font-bold text-charcoal">
              So, what exactly is FIRE?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: '💰',
                title: 'Save Aggressively',
                body: 'FIRE followers aim for a savings rate of 25–75% of their income — dramatically higher than the typical 10–15%. The higher your savings rate, the faster you reach financial independence.',
              },
              {
                step: '02',
                icon: '📈',
                title: 'Invest in Index Funds',
                body: 'Money saved goes straight into low-cost index funds. Compound growth does the heavy lifting. Most FIRE investors use simple three-fund portfolios across tax-advantaged accounts.',
              },
              {
                step: '03',
                icon: '🏖️',
                title: 'Reach Your FIRE Number',
                body: 'When your invested assets equal 25× your annual expenses, you can withdraw 4% per year — covering your costs indefinitely. That\'s your FIRE number, and your finish line.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy rounded-2xl text-3xl mb-4">
                  {item.icon}
                </div>
                <p className="section-label-amber mb-2">Step {item.step}</p>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PillarGrid />

      <RecentPosts />

      <CTABanner
        headline="Calculate your FIRE number in 60 seconds."
        subheadline="Use our free interactive calculator to see exactly how many years until you can retire — and what it takes to get there faster."
        ctaText="Try the Calculator"
        ctaHref="/fire-number-calculator"
        variant="amber"
      />
    </>
  )
}
