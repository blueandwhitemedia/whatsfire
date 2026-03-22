export interface AffiliateLink {
  id: string
  name: string
  tagline: string
  description: string
  url: string
  commission: string
  category: 'tools' | 'investing' | 'budgeting' | 'lending' | 'tax'
  featured: boolean
  rating: number
  pros: string[]
}

export const affiliates: Record<string, AffiliateLink> = {
  projectionlab: {
    id: 'projectionlab',
    name: 'ProjectionLab',
    tagline: 'Advanced FIRE planning & portfolio simulation',
    description:
      'The most powerful FIRE calculator and retirement planning tool available. Simulate your path to financial independence with detailed scenarios.',
    url: 'https://projectionlab.com/?ref=whatsfire',
    commission: '20% recurring',
    category: 'tools',
    featured: true,
    rating: 5,
    pros: ['Detailed FIRE scenarios', 'Portfolio simulation', 'Tax modeling', 'Monte Carlo analysis'],
  },
  empower: {
    id: 'empower',
    name: 'Empower (Personal Capital)',
    tagline: 'Free wealth management & retirement dashboard',
    description:
      'Track all your accounts in one place — investments, savings, and spending. The free dashboard is used by millions on their FIRE journey.',
    url: 'https://empowerfinance.com/?ref=whatsfire',
    commission: '$100 per qualified user',
    category: 'tools',
    featured: true,
    rating: 4.5,
    pros: ['Free to use', 'All accounts in one view', 'Net worth tracking', 'Investment fee analyzer'],
  },
  sofi: {
    id: 'sofi',
    name: 'SoFi',
    tagline: 'Refinance student loans & accelerate FIRE',
    description:
      'Refinance student loans at lower rates to free up cash flow for investing. Also offers investing, banking, and personal loans.',
    url: 'https://sofi.com/?ref=whatsfire',
    commission: 'Up to $1,000/referral',
    category: 'lending',
    featured: true,
    rating: 4.5,
    pros: ['Competitive refinance rates', 'No origination fees', 'Career coaching included', 'Investing + banking'],
  },
  m1finance: {
    id: 'm1finance',
    name: 'M1 Finance',
    tagline: 'Automated investing with custom portfolios',
    description:
      'Build your own index fund "pie" and automate contributions. Perfect for FIRE investors who want low-cost, set-and-forget investing.',
    url: 'https://m1.com/?ref=whatsfire',
    commission: '$10–$30 per funded account',
    category: 'investing',
    featured: true,
    rating: 4,
    pros: ['No trading fees', 'Custom portfolio pies', 'Automatic rebalancing', 'Fractional shares'],
  },
  simplifi: {
    id: 'simplifi',
    name: 'Simplifi by Quicken',
    tagline: 'Modern budgeting to maximize your savings rate',
    description:
      'Track spending, set savings goals, and optimize your budget. Knowing your savings rate is the foundation of any FIRE strategy.',
    url: 'https://simplifi.quicken.com/?ref=whatsfire',
    commission: '$2.10 per signup',
    category: 'budgeting',
    featured: false,
    rating: 4,
    pros: ['Real-time spending tracking', 'Savings rate calculator', 'Bill tracking', 'Easy setup'],
  },
  ynab: {
    id: 'ynab',
    name: 'YNAB',
    tagline: 'Zero-based budgeting that actually works',
    description:
      "Give every dollar a job. YNAB's methodology has helped thousands eliminate debt and accelerate their savings rate dramatically.",
    url: 'https://ynab.com/?ref=whatsfire',
    commission: 'Affiliate program',
    category: 'budgeting',
    featured: false,
    rating: 4.5,
    pros: ['Proven methodology', 'Debt payoff tools', 'Real-time sync', '34-day free trial'],
  },
}

export function getAffiliateUrl(id: string): string {
  return affiliates[id]?.url ?? '#'
}

export function getAffiliatesByCategory(
  category: AffiliateLink['category']
): AffiliateLink[] {
  return Object.values(affiliates).filter((a) => a.category === category)
}

export function getFeaturedAffiliates(): AffiliateLink[] {
  return Object.values(affiliates).filter((a) => a.featured)
}
