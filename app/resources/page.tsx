import type { Metadata } from 'next'
import Link from 'next/link'
import { getFeaturedAffiliates, getAffiliatesByCategory } from '@/lib/affiliates'
import Disclosure from '@/components/shared/Disclosure'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'Best FIRE Tools & Resources — Curated for Financial Independence',
  description:
    'Curated tools, apps, and resources to accelerate your FIRE journey. From FIRE calculators to brokerage accounts — everything the What\'s FIRE? team recommends.',
}

export default function ResourcesPage() {
  const featured = getFeaturedAffiliates()
  const budgetingTools = getAffiliatesByCategory('budgeting')

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label-amber mb-3">Curated Resources</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            FIRE Tools & Resources
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every tool, app, and resource we actually recommend. Hand-picked for FIRE investors at every stage.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclosure />

          {/* Featured tools */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
              🌟 Top FIRE Tools
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {featured.map((affiliate) => (
                <div key={affiliate.id} className="bg-white rounded-xl border border-surface-border p-6 flex flex-col sm:flex-row items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display font-bold text-charcoal text-lg">
                        {affiliate.name}
                      </h3>
                      <span className="px-2 py-0.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700">
                        Recommended
                      </span>
                    </div>
                    <p className="text-charcoal-600 text-sm mb-3">{affiliate.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {affiliate.pros.map((pro) => (
                        <span key={pro} className="flex items-center gap-1 text-xs text-forest-700 bg-forest-50 border border-forest-100 rounded-full px-2.5 py-0.5">
                          <svg className="w-3 h-3 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {pro}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:text-right flex-shrink-0">
                    <p className="text-xs text-charcoal-400 mb-3">{affiliate.commission}</p>
                    <Link
                      href={affiliate.url}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="btn-primary"
                    >
                      Try {affiliate.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budgeting tools */}
          {budgetingTools.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                💰 Budgeting Apps
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {budgetingTools.map((affiliate) => (
                  <div key={affiliate.id} className="bg-white rounded-xl border border-surface-border p-6">
                    <h3 className="font-display font-bold text-charcoal text-lg mb-2">
                      {affiliate.name}
                    </h3>
                    <p className="text-charcoal-600 text-sm mb-4">{affiliate.description}</p>
                    <Link
                      href={affiliate.url}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="btn-outline w-full text-center"
                    >
                      Try {affiliate.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Free tools */}
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
              🆓 Free FIRE Tools on This Site
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'FIRE Number Calculator',
                  desc: 'Calculate your FIRE number and years to financial independence.',
                  href: '/fire-number-calculator',
                  cta: 'Use the Calculator',
                },
                {
                  title: 'FIRE Starter Kit',
                  desc: 'Free email guide covering the 4% rule, FIRE number, and 5 accounts to open.',
                  href: '/start-here#email',
                  cta: 'Get the Free Guide',
                },
              ].map((tool) => (
                <div key={tool.title} className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                  <h3 className="font-display font-bold text-charcoal text-lg mb-2">{tool.title}</h3>
                  <p className="text-charcoal-600 text-sm mb-4">{tool.desc}</p>
                  <Link href={tool.href} className="btn-primary">
                    {tool.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner variant="navy" />
    </>
  )
}
