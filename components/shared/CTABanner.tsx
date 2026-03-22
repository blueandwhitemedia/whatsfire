import Link from 'next/link'

interface CTABannerProps {
  headline?: string
  subheadline?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'amber' | 'navy' | 'forest'
}

export default function CTABanner({
  headline = 'Ready to start your FIRE journey?',
  subheadline = 'Get the free FIRE Starter Kit — your step-by-step guide to financial independence.',
  ctaText = 'Get the Free Guide',
  ctaHref = '/start-here#email',
  variant = 'navy',
}: CTABannerProps) {
  const bg = {
    amber: 'bg-amber-500',
    navy: 'bg-navy',
    forest: 'bg-forest-600',
  }[variant]

  const headlineColor = {
    amber: 'text-navy',
    navy: 'text-white',
    forest: 'text-white',
  }[variant]

  const subColor = {
    amber: 'text-navy/80',
    navy: 'text-white/70',
    forest: 'text-white/70',
  }[variant]

  const btnClass = {
    amber: 'btn-secondary',
    navy: 'btn-primary',
    forest: 'btn-primary',
  }[variant]

  return (
    <section className={`${bg} py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="section-label-amber mb-3">Free Resource</p>
        <h2 className={`font-display text-display-md font-bold ${headlineColor} mb-4`}>
          {headline}
        </h2>
        <p className={`text-lg ${subColor} mb-8 max-w-2xl mx-auto`}>
          {subheadline}
        </p>
        <Link href={ctaHref} className={btnClass}>
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
