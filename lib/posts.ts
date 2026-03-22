import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  category: string
  title: string
  description: string
  date: string
  tags: string[]
  readTime: number
  featured: boolean
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const posts: PostMeta[] = []
  const categories = fs.readdirSync(postsDirectory)

  for (const category of categories) {
    const categoryPath = path.join(postsDirectory, category)
    if (!fs.statSync(categoryPath).isDirectory()) continue

    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.mdx'))

    for (const file of files) {
      const slug = file.replace('.mdx', '')
      const fullPath = path.join(categoryPath, file)
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'))

      posts.push({
        slug,
        category,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) || [],
        readTime: (data.readTime as number) || 5,
        featured: (data.featured as boolean) || false,
      })
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured).slice(0, 3)
}

export function getRecentPosts(count = 6): PostMeta[] {
  return getAllPosts().slice(0, count)
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category)
}

export function getPost(category: string, slug: string): Post | null {
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))

  return {
    slug,
    category,
    content,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) || [],
    readTime: (data.readTime as number) || 5,
    featured: (data.featured as boolean) || false,
  }
}

export function getAllPostSlugs(): { category: string; slug: string }[] {
  if (!fs.existsSync(postsDirectory)) return []

  const slugs: { category: string; slug: string }[] = []
  const categories = fs.readdirSync(postsDirectory)

  for (const category of categories) {
    const categoryPath = path.join(postsDirectory, category)
    if (!fs.statSync(categoryPath).isDirectory()) continue

    const files = fs.readdirSync(categoryPath).filter((f) => f.endsWith('.mdx'))
    for (const file of files) {
      slugs.push({ category, slug: file.replace('.mdx', '') })
    }
  }

  return slugs
}
