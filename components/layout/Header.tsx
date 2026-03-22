'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_CATEGORIES = [
  { label: 'Investing', href: '/blog/investing' },
  { label: 'Saving', href: '/blog/saving' },
  { label: 'Retirement', href: '/blog/retirement' },
  { label: 'Tax Strategy', href: '/blog/tax-strategy' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl font-display font-bold text-navy">
              What&apos;s FIRE?
            </span>
            <span className="hidden sm:block text-amber-500 text-lg">🔥</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_CATEGORIES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-navy rounded-md hover:bg-white transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/fire-number-calculator"
              className="px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-navy rounded-md hover:bg-white transition-colors duration-150"
            >
              Calculator
            </Link>
            <Link
              href="/resources"
              className="px-3 py-2 text-sm font-medium text-charcoal-600 hover:text-navy rounded-md hover:bg-white transition-colors duration-150"
            >
              Resources
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/start-here" className="text-sm font-semibold text-navy hover:text-forest-600 transition-colors">
              Start Here
            </Link>
            <Link href="/start-here#email" className="btn-primary text-sm px-4 py-2">
              Free Starter Kit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-charcoal hover:bg-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden border-t border-surface-border bg-cream transition-all duration-200',
          mobileOpen ? 'block' : 'hidden'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
          {NAV_CATEGORIES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 text-sm font-medium text-charcoal rounded-md hover:bg-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/fire-number-calculator"
            className="px-3 py-2.5 text-sm font-medium text-charcoal rounded-md hover:bg-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Calculator
          </Link>
          <Link
            href="/resources"
            className="px-3 py-2.5 text-sm font-medium text-charcoal rounded-md hover:bg-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Resources
          </Link>
          <div className="pt-2 border-t border-surface-border mt-2">
            <Link
              href="/start-here#email"
              className="btn-primary w-full text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get the Free FIRE Starter Kit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
