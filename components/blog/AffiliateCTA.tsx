import Link from 'next/link'
import { AffiliateLink } from '@/lib/affiliates'

interface AffiliateCTAProps {
  affiliate: AffiliateLink
  variant?: 'inline' | 'card' | 'sidebar'
}

export default function AffiliateCTA({ affiliate, variant = 'card' }: AffiliateCTAProps) {
  if (variant === 'inline') {
    return (
      <span className="inline-flex items-center gap-1">
        <Link
          href={affiliate.url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="text-forest-600 font-medium hover:underline"
        >
          {affiliate.name}
        </Link>
        <span className="text-xs text-charcoal-400 italic">(affiliate)</span>
      </span>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <p className="text-xs font-semibold tracking-wider uppercase text-amber-600 mb-2">
          Recommended Tool
        </p>
        <h4 className="font-display font-bold text-charcoal text-base mb-1">
          {affiliate.name}
        </h4>
        <p className="text-sm text-charcoal-600 mb-4">{affiliate.tagline}</p>
        <Link
          href={affiliate.url}
          target="_blank"
          rel="nofollow noopener sponsored"
          className="btn-primary w-full text-center text-sm"
        >
          Try {affiliate.name}
        </Link>
        <p className="text-xs text-charcoal-400 text-center mt-2">Affiliate link — see disclosure</p>
      </div>
    )
  }

  // Card variant (in-article CTA box)
  return (
    <div className="bg-navy rounded-xl p-6 my-8 not-prose">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
          <span className="text-amber-400 text-lg">⭐</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-1">
            Recommended Tool
          </p>
          <h4 className="font-display font-bold text-white text-lg mb-1">
            {affiliate.name}
          </h4>
          <p className="text-white/70 text-sm mb-4">{affiliate.description}</p>
          <Link
            href={affiliate.url}
            target="_blank"
            rel="nofollow noopener sponsored"
            className="btn-primary text-sm"
          >
            Try {affiliate.name} Free
          </Link>
          <span className="ml-3 text-xs text-white/40">Affiliate link</span>
        </div>
      </div>
    </div>
  )
}
