import type { Metadata } from 'next'
import FireCalculator from '@/components/calculator/FireCalculator'
import CTABanner from '@/components/shared/CTABanner'

export const metadata: Metadata = {
  title: 'FIRE Number Calculator — How Much Do You Need to Retire Early?',
  description:
    'Calculate your FIRE number — the exact amount you need to retire early based on your expenses, savings rate, and investment returns. Free interactive tool.',
  keywords: [
    'FIRE number calculator',
    'how much to retire early',
    'financial independence calculator',
    'early retirement number',
    '4% rule calculator',
  ],
}

export default function FireNumberCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label-amber mb-3">Free Tool</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            FIRE Number Calculator
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Find out exactly how much you need to retire early — and how many years it&apos;ll take at your current savings rate.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FireCalculator />
        </div>
      </section>

      {/* Explanation */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
            How Does the FIRE Number Calculator Work?
          </h2>
          <div className="prose-fire">
            <h3>The 4% Rule</h3>
            <p>
              Your FIRE number is based on the <strong>4% safe withdrawal rate</strong> — a rule of thumb from the Trinity Study that shows a 4% annual withdrawal from a diversified portfolio has historically never depleted over 30+ years.
            </p>
            <p>
              <strong>FIRE Number = Annual Expenses ÷ Withdrawal Rate</strong>
            </p>
            <p>
              If you spend $50,000/year and use the 4% rule: $50,000 ÷ 0.04 = <strong>$1,250,000</strong>
            </p>

            <h3>Years to FIRE Formula</h3>
            <p>
              Once you know your FIRE number, the calculator estimates how long it will take to reach it based on:
            </p>
            <ul>
              <li>Your current savings</li>
              <li>How much you contribute each year</li>
              <li>Your expected investment return (default: 7% real return, historically typical for index funds)</li>
            </ul>

            <h3>What&apos;s a Good Savings Rate?</h3>
            <p>
              The single biggest driver of your FIRE timeline is your <strong>savings rate</strong> — the percentage of income you invest. Here&apos;s a rough guide:
            </p>
            <ul>
              <li><strong>10–15%</strong> — Traditional retirement (retire in your 60s)</li>
              <li><strong>25–30%</strong> — Getting there (retire in your 50s)</li>
              <li><strong>40–50%</strong> — FIRE territory (retire in your 40s)</li>
              <li><strong>60–70%+</strong> — LeanFIRE/aggressive (retire in your 30s)</li>
            </ul>

            <h3>Important Caveats</h3>
            <p>
              This calculator provides estimates based on simplified assumptions. Actual results will vary based on market returns, inflation, tax changes, and life circumstances. This is not financial advice — consult a qualified financial advisor for a personalized retirement plan.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want a step-by-step FIRE roadmap?"
        subheadline="Get the free FIRE Starter Kit — a plain-English guide to setting up your accounts, calculating your number, and building your plan."
        ctaText="Get the Free Starter Kit"
        variant="navy"
      />
    </>
  )
}
