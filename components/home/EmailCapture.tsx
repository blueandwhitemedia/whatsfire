'use client'

import { useState, useTransition } from 'react'
import { subscribeToList } from '@/app/actions/subscribe'
import { cn } from '@/lib/utils'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'card'
  source?: string
  headline?: string
  description?: string
}

export default function EmailCapture({
  variant = 'inline',
  source = 'unknown',
  headline = 'Get the free FIRE Starter Kit',
  description = "What the FIRE number is, the 4% rule explained, the 5 accounts you need, and a savings rate calculator. All in one free guide.",
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    formData.set('email', email)
    formData.set('source', source)

    startTransition(async () => {
      const result = await subscribeToList(formData)
      if (result.success) {
        setStatus('success')
        setMessage(result.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(result.error)
      }
    })
  }

  if (status === 'success') {
    return (
      <div className={cn(
        'rounded-xl p-6 text-center',
        variant === 'hero' ? 'bg-white/10 border border-white/20' : 'bg-forest-50 border border-forest-100'
      )}>
        <p className="text-2xl mb-2">🎉</p>
        <p className={cn(
          'font-display font-bold text-lg',
          variant === 'hero' ? 'text-white' : 'text-charcoal'
        )}>
          You&apos;re in!
        </p>
        <p className={cn(
          'text-sm mt-1',
          variant === 'hero' ? 'text-white/70' : 'text-charcoal-600'
        )}>
          {message}
        </p>
      </div>
    )
  }

  // Hero variant — compact inline form
  if (variant === 'hero') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={isPending}
          className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all"
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary shrink-0 py-3.5 disabled:opacity-60"
        >
          {isPending ? 'Sending...' : 'Get Free Kit'}
        </button>
        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2 sm:hidden">{message}</p>
        )}
      </form>
    )
  }

  // Card variant — with headline and description
  return (
    <div className={cn(
      'rounded-xl p-6 sm:p-8',
      variant === 'card' ? 'bg-navy text-white' : 'bg-white border border-surface-border'
    )}>
      <p className="section-label-amber mb-3">Free Resource</p>
      <h3 className={cn(
        'font-display text-2xl font-bold mb-3',
        variant === 'card' ? 'text-white' : 'text-charcoal'
      )}>
        {headline}
      </h3>
      <p className={cn(
        'text-sm leading-relaxed mb-6',
        variant === 'card' ? 'text-white/70' : 'text-charcoal-600'
      )}>
        {description}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          disabled={isPending}
          className={cn(
            'input',
            variant === 'card' && 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-amber-500'
          )}
        />
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary w-full disabled:opacity-60"
        >
          {isPending ? 'Sending...' : 'Send Me the Starter Kit'}
        </button>
        {status === 'error' && (
          <p className="text-red-400 text-xs">{message}</p>
        )}
      </form>
      <p className={cn(
        'text-xs mt-3',
        variant === 'card' ? 'text-white/40' : 'text-charcoal-400'
      )}>
        Free. No spam. Unsubscribe any time.
      </p>
    </div>
  )
}
