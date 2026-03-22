import Link from 'next/link'
import { getRecentPosts } from '@/lib/posts'
import ArticleCard from '@/components/blog/ArticleCard'

export default function RecentPosts() {
  const posts = getRecentPosts(6)

  if (posts.length === 0) return null

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-label mb-2">Latest Articles</p>
            <h2 className="font-display text-display-sm font-bold text-charcoal">
              Fresh from the blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-forest-600 hover:text-forest-700 transition-colors"
          >
            View all articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ArticleCard key={`${post.category}/${post.slug}`} post={post} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link href="/blog" className="btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
