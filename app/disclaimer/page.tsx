import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Financial Disclaimer — What's FIRE?",
  description: "Important disclaimer about the financial information provided on What's FIRE?",
}

export default function DisclaimerPage() {
  return (
    <section className="py-16 bg-cream min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-charcoal mb-8">Financial Disclaimer</h1>
        <div className="prose-fire">
          <p><strong>Last updated: March 2026</strong></p>
          <p>
            The information provided on What&apos;s FIRE? (whatsfire.com) is for general educational and informational purposes only. It is not intended to be, and should not be construed as, financial, tax, legal, or investment advice.
          </p>
          <h2>Not financial advice</h2>
          <p>
            We are not registered investment advisors, financial planners, tax professionals, or attorneys. Nothing on this website constitutes professional financial advice tailored to your specific circumstances.
          </p>
          <h2>Past performance</h2>
          <p>
            Historical investment returns referenced on this site do not guarantee future results. All investing involves risk, including the potential loss of principal.
          </p>
          <h2>Consult a professional</h2>
          <p>
            Before making any significant financial decisions, we strongly recommend consulting a qualified, fee-only Certified Financial Planner (CFP) or other licensed financial professional.
          </p>
          <h2>Accuracy</h2>
          <p>
            We make every effort to ensure the information on this site is accurate and up-to-date. However, tax laws, contribution limits, and regulations change frequently. Always verify current figures with official sources (IRS.gov, DOL.gov, etc.).
          </p>
        </div>
      </div>
    </section>
  )
}
