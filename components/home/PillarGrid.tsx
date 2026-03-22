import Link from 'next/link'
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, CATEGORY_EMOJIS } from '@/lib/utils'

const CATEGORIES = [
  'fire-basics',
  'investing',
  'saving',
  'retirement',
  'tax-strategy',
  'healthcare',
  'debt',
  'side-hustle',
] as const

export default function PillarGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label mb-3">Browse by Topic</p>
          <h2 className="font-display text-display-md font-bold text-charcoal mb-4">
            Everything you need to know about FIRE
          </h2>
          <p className="text-charcoal-600 max-w-2xl mx-auto">
            From the basics to advanced tax strategy — explore every topic on the path to financial independence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/blog/${category}`}
              className="group card hover:border-amber-500/40 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-amber-100 transition-colors">
                  {CATEGORY_EMOJIS[category]}
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-charcoal text-base group-hover:text-navy transition-colors">
                    {CATEGORY_LABELS[category]}
                  </h3>
                  <p className="text-sm text-charcoal-600 mt-1 leading-snug">
                    {CATEGORY_DESCRIPTIONS[category]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
