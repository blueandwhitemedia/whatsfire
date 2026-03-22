import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllPostSlugs, getPostsByCategory } from '@/lib/posts'
import { formatDate, CATEGORY_LABELS, CATEGORY_EMOJIS } from '@/lib/utils'
import AuthorBio from '@/components/blog/AuthorBio'
import Disclosure from '@/components/shared/Disclosure'
import ArticleCard from '@/components/blog/ArticleCard'
import EmailCapture from '@/components/home/EmailCapture'

interface Props {
  params: Promise<{ category: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params
  const post = getPost(category, slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export async function generateStaticParams() {
  return getAllPostSlugs().map(({ category, slug }) => ({ category, slug }))
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params
  const post = getPost(category, slug)

  if (!post) notFound()

  const related = getPostsByCategory(category)
    .filter((p) => p.slug !== slug)
    .slice(0, 3)

  const categoryLabel = CATEGORY_LABELS[category] ?? category
  const emoji = CATEGORY_EMOJIS[category] ?? '📄'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: "What's FIRE?",
      url: 'https://whatsfire.com',
    },
    publisher: {
      '@type': 'Organization',
      name: "What's FIRE?",
      url: 'https://whatsfire.com',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article hero */}
      <section className="bg-navy py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <Link href={`/blog/${category}`} className="hover:text-white transition-colors flex items-center gap-1">
              <span>{emoji}</span> {categoryLabel}
            </Link>
          </nav>

          <div className="flex items-center gap-2 mb-4">
            <span className="section-label-amber">{categoryLabel}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclosure variant="article" />

          <div className="prose-fire mt-6">
            <MDXRemote source={post.content} />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-10 pt-6 border-t border-surface-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-3">Topics</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-surface-border rounded-full text-xs text-charcoal-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author bio */}
          <div className="mt-10">
            <AuthorBio />
          </div>
        </div>
      </article>

      {/* Email capture mid-page */}
      <section className="py-12 bg-white border-y border-surface-border">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture
            variant="card"
            source={`article-${slug}`}
            headline="Get the free FIRE Starter Kit"
            description="Subscribe for the FIRE Starter Kit — your FIRE number formula, the 4% rule, and the 5 accounts every FIRE investor needs."
          />
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
              More on {categoryLabel}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <ArticleCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
