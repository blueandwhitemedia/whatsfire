import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostsByCategory } from '@/lib/posts'
import ArticleCard from '@/components/blog/ArticleCard'
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, CATEGORY_EMOJIS } from '@/lib/utils'
import CTABanner from '@/components/shared/CTABanner'
import Link from 'next/link'

const VALID_CATEGORIES = [
  'fire-basics', 'investing', 'saving', 'retirement',
  'tax-strategy', 'healthcare', 'debt', 'side-hustle',
]

interface Props {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const label = CATEGORY_LABELS[category]
  if (!label) return {}

  return {
    title: `${label} — FIRE Guides & Articles`,
    description: CATEGORY_DESCRIPTIONS[category],
  }
}

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params

  if (!VALID_CATEGORIES.includes(category)) notFound()

  const posts = getPostsByCategory(category)
  const label = CATEGORY_LABELS[category]
  const description = CATEGORY_DESCRIPTIONS[category]
  const emoji = CATEGORY_EMOJIS[category]

  return (
    <>
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Articles
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center text-3xl">
              {emoji}
            </div>
            <div>
              <p className="section-label-amber">Topic</p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">{label}</h1>
            </div>
          </div>
          <p className="text-white/70 text-lg max-w-2xl">{description}</p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">{emoji}</p>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                {label} articles coming soon
              </h2>
              <p className="text-charcoal-600 mb-6">
                We&apos;re writing in-depth guides on this topic. Check back soon.
              </p>
              <Link href="/blog" className="btn-outline">
                Browse all articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <ArticleCard key={`${post.category}/${post.slug}`} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTABanner variant="navy" />
    </>
  )
}
