import Link from 'next/link'

interface DisclosureProps {
  variant?: 'default' | 'inline' | 'article'
}

export default function Disclosure({ variant = 'default' }: DisclosureProps) {
  if (variant === 'inline') {
    return (
      <span className="text-xs text-charcoal-400 italic">
        (affiliate link —{' '}
        <Link href="/disclosure" className="underline hover:text-charcoal">
          disclosure
        </Link>
        )
      </span>
    )
  }

  if (variant === 'article') {
    return (
      <div className="disclosure-banner my-6">
        <strong className="text-charcoal-600">Affiliate Disclosure:</strong>{' '}
        Some links in this article are affiliate links. If you sign up through our links, we may earn a commission at no extra cost to you. We only recommend tools and services we genuinely believe in.{' '}
        <Link href="/disclosure" className="underline hover:text-charcoal-600 transition-colors">
          Learn more about how we make money.
        </Link>
      </div>
    )
  }

  return (
    <div className="disclosure-banner">
      <strong className="text-charcoal-600">Advertising Disclosure:</strong>{' '}
      What&apos;s FIRE? may earn a commission from affiliate links on this page. This does not influence our editorial opinions or rankings. We only recommend products we trust.{' '}
      <Link href="/disclosure" className="underline hover:text-charcoal-600 transition-colors">
        Full disclosure
      </Link>
      .
    </div>
  )
}
