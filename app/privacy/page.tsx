import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy — What's FIRE?",
  description: "Privacy policy for What's FIRE? (whatsfire.com).",
}

export default function PrivacyPage() {
  return (
    <section className="py-16 bg-cream min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-charcoal mb-8">Privacy Policy</h1>
        <div className="prose-fire">
          <p><strong>Last updated: March 2026</strong></p>
          <p>
            What&apos;s FIRE? (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates whatsfire.com. This policy describes how we collect, use, and protect your information.
          </p>
          <h2>Information we collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li><strong>Email address:</strong> When you subscribe to our newsletter or download the FIRE Starter Kit.</li>
            <li><strong>Analytics:</strong> We use privacy-friendly analytics (Plausible) to understand aggregate site traffic. No personally identifiable information is collected by our analytics provider.</li>
            <li><strong>Cookies:</strong> We use cookies only as required for site functionality.</li>
          </ul>
          <h2>How we use your information</h2>
          <ul>
            <li>To send the FIRE Starter Kit and subsequent educational emails (you can unsubscribe at any time)</li>
            <li>To improve site content based on aggregate analytics</li>
          </ul>
          <h2>Third parties</h2>
          <p>
            We use ConvertKit or Beehiiv to manage our email list. We do not sell your personal information to third parties.
          </p>
          <h2>Your rights</h2>
          <p>
            You may unsubscribe from emails at any time using the link in any email we send. To request deletion of your data, contact us through the About page.
          </p>
        </div>
      </div>
    </section>
  )
}
