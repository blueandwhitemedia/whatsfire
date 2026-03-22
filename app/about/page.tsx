import type { Metadata } from 'next'
import Link from 'next/link'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: "About What's FIRE? — Our Mission",
  description:
    "Learn about What's FIRE? — why we built a plain-English FIRE blog for regular people, not just high earners.",
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-amber mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            About What&apos;s FIRE?
          </h1>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-fire">
            <h2>Why we started this site</h2>
            <p>
              The FIRE movement has a problem. Most of the best content is written for people who already understand the basics — or worse, it assumes you make six figures and drive a 10-year-old car.
            </p>
            <p>
              The truth is, financial independence is a spectrum. You don&apos;t have to be extreme. You don&apos;t have to live on rice and beans. You don&apos;t have to be a software engineer in San Francisco. You just need a clear understanding of the math, a solid plan, and consistent action.
            </p>
            <p>
              That&apos;s what What&apos;s FIRE? is built for.
            </p>

            <h2>What we cover</h2>
            <p>
              We write about everything you need on the path to financial independence:
            </p>
            <ul>
              <li><strong>The basics</strong> — What FIRE is, how the math works, and whether it&apos;s realistic for your situation</li>
              <li><strong>Investing</strong> — Index funds, asset allocation, brokerage comparisons</li>
              <li><strong>Tax strategy</strong> — 401(k), Roth IRA, HSA, and how to optimize for FIRE</li>
              <li><strong>Saving</strong> — Budgeting, savings rate, expense tracking</li>
              <li><strong>Early retirement planning</strong> — Healthcare, withdrawal strategies, lifestyle design</li>
            </ul>

            <h2>Our editorial standards</h2>
            <p>
              We treat financial content seriously. What&apos;s FIRE? is a YMYL (Your Money, Your Life) site — content that affects real financial decisions. Every article is:
            </p>
            <ul>
              <li>Written by researchers and practitioners familiar with personal finance</li>
              <li>Fact-checked with links to primary sources (IRS publications, academic studies, official government data)</li>
              <li>Updated when tax laws, contribution limits, or regulations change</li>
              <li>Clearly marked when it includes affiliate links (see our <Link href="/disclosure">disclosure</Link>)</li>
            </ul>

            <h2>A note on affiliate links</h2>
            <p>
              We earn commissions from some links on this site. This lets us keep all content free. We only recommend tools and services we genuinely believe in — we never accept payment to change editorial opinions or rankings.
            </p>
            <p>
              Read our full <Link href="/disclosure">affiliate disclosure</Link> for details.
            </p>

            <h2>This is not financial advice</h2>
            <p>
              Everything on What&apos;s FIRE? is for educational and informational purposes only. We&apos;re not registered financial advisors. Before making significant financial decisions, consult a fee-only CFP (Certified Financial Planner) or other qualified advisor.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
