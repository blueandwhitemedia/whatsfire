import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Affiliate Disclosure — What's FIRE?",
  description: "Our affiliate disclosure policy. Learn how What's FIRE? earns revenue and how we maintain editorial independence.",
}

export default function DisclosurePage() {
  return (
    <section className="py-16 bg-cream min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-charcoal mb-8">Affiliate Disclosure</h1>
        <div className="prose-fire">
          <p>
            <strong>Last updated: March 2026</strong>
          </p>
          <p>
            What&apos;s FIRE? (whatsfire.com) participates in affiliate marketing programs. This means we may earn a commission when you click certain links on our site and make a purchase or sign up for a service — at no additional cost to you.
          </p>
          <h2>What this means for you</h2>
          <p>
            When you see a link marked as an affiliate link (or labeled &quot;sponsored&quot;), clicking that link may result in us receiving a small commission. This commission helps fund the free content we produce.
          </p>
          <h2>Our editorial independence</h2>
          <p>
            Affiliate relationships do <strong>not</strong> influence our editorial opinions, rankings, or recommendations. We only recommend products and services we genuinely believe provide value to our readers. We never accept payment to change a review or ranking.
          </p>
          <h2>FTC compliance</h2>
          <p>
            In accordance with the FTC&apos;s guidelines, we disclose any material connection between ourselves and product/service providers. Affiliate links are identified with <code>rel=&quot;sponsored&quot;</code> attributes in our HTML and, where appropriate, with inline disclosures.
          </p>
          <h2>Questions?</h2>
          <p>
            If you have questions about our affiliate relationships or editorial policies, please contact us through the About page.
          </p>
        </div>
      </div>
    </section>
  )
}
