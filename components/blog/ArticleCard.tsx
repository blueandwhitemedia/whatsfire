import Link from 'next/link'
import { PostMeta } from '@/lib/posts'
import { formatDate, CATEGORY_LABELS, CATEGORY_EMOJIS } from '@/lib/utils'

interface ArticleCardProps {
  post: PostMeta
  variant?: 'default' | 'featured' | 'compact'
}

export default function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  const href = `/blog/${post.category}/${post.slug}`
  const categoryLabel = CATEGORY_LABELS[post.category] ?? post.category
  const emoji = CATEGORY_EMOJIS[post.category] ?? '📄'

  if (variant === 'compact') {
    return (
      <Link href={href} className="group flex items-start gap-3 py-4 border-b border-surface-border last:border-0">
        <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
        <div>
          <p className="text-xs text-forest-600 font-medium mb-1">{categoryLabel}</p>
          <h4 className="font-display font-semibold text-charcoal text-sm leading-snug group-hover:text-navy transition-colors">
            {post.title}
          </h4>
          <p className="text-xs text-charcoal-400 mt-1">{formatDate(post.date)}</p>
        </div>
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={href} className="group block bg-white rounded-2xl border border-surface-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
        {/* Color bar by category */}
        <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600" />
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{emoji}</span>
            <span className="section-label">{categoryLabel}</span>
          </div>
          <h3 className="font-display text-xl font-bold text-charcoal leading-snug group-hover:text-navy transition-colors mb-3">
            {post.title}
          </h3>
          <p className="text-charcoal-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {post.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-charcoal-400">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            <span className="text-forest-600 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
              Read
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    )
  }

  // Default card
  return (
    <Link href={href} className="group block card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{emoji}</span>
        <span className="section-label">{categoryLabel}</span>
      </div>
      <h3 className="font-display font-bold text-charcoal text-lg leading-snug mb-2 group-hover:text-navy transition-colors line-clamp-2">
        {post.title}
      </h3>
      <p className="text-charcoal-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {post.description}
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-surface-border">
        <div className="flex items-center gap-2 text-xs text-charcoal-400">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
        <svg
          className="w-4 h-4 text-forest-600 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
