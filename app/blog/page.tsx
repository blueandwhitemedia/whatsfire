import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/blog/ArticleCard'
import { CATEGORY_LABELS, CATEGORY_EMOJIS } from '@/lib/utils'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog — Financial Independence & FIRE Articles",
  description:
    'In-depth guides on FIRE, investing, saving, tax strategy, and early retirement. Browse all articles from What\'s FIRE?',
}

const CATEGORIES = [
  'fire-basics', 'investing', 'saving', 'retirement',
  'tax-strategy', 'healthcare', 'debt', 'side-hustle',
]

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <section className="bg-navy py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label-amber mb-3">All Articles</p>
          <h1 className="font-display text-4xl font-bold text-white">
            The FIRE Blog
          </h1>
          <p className="text-white/60 mt-3 max-w-xl">
            Plain-English guides on financial independence, investing, saving, and early retirement.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <div className="bg-white border-b border-surface-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <Link
              href="/blog"
              className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium bg-navy text-white"
            >
              All
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/blog/${cat}`}
                className="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-charcoal-600 hover:bg-cream hover:text-navy transition-colors whitespace-nowrap"
              >
                {CATEGORY_EMOJIS[cat]} {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-4xl mb-4">📝</p>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Articles coming soon</h2>
              <p className="text-charcoal-600 mb-6">
                We&apos;re working on in-depth guides across all FIRE topics.
              </p>
              <Link href="/start-here" className="btn-primary">
                Start Here in the meantime
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
    </>
  )
}
