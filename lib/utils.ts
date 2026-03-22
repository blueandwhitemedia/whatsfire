import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}

export const CATEGORY_LABELS: Record<string, string> = {
  'fire-basics': 'FIRE Basics',
  'investing': 'Investing',
  'saving': 'Saving',
  'retirement': 'Retirement',
  'tax-strategy': 'Tax Strategy',
  'healthcare': 'Healthcare',
  'debt': 'Debt',
  'side-hustle': 'Side Hustle',
}

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'fire-basics': 'Learn the fundamentals of financial independence and early retirement.',
  'investing': 'Index funds, brokers, asset allocation, and portfolio strategy.',
  'saving': 'Budgeting, savings rate, expense optimization, and frugality.',
  'retirement': 'Planning, withdrawal strategies, and early retirement lifestyle.',
  'tax-strategy': '401(k), IRA, Roth, HSA, and tax optimization for FIRE.',
  'healthcare': 'Health insurance, COBRA, ACA, and HSA strategies in early retirement.',
  'debt': 'Student loans, mortgages, and payoff strategies to reach FIRE faster.',
  'side-hustle': 'Freelancing, passive income, and building additional revenue streams.',
}

export const CATEGORY_EMOJIS: Record<string, string> = {
  'fire-basics': '🔥',
  'investing': '📈',
  'saving': '💰',
  'retirement': '🏖️',
  'tax-strategy': '🧾',
  'healthcare': '❤️',
  'debt': '💳',
  'side-hustle': '💼',
}
