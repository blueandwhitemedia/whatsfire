'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CalcInputs {
  annualExpenses: number
  currentSavings: number
  annualSavings: number
  expectedReturn: number
  withdrawalRate: number
}

interface CalcResults {
  fireNumber: number
  yearsToFire: number
  targetAge: number
  savingsRate: number
  projectedMonthlyIncome: number
  progressPercent: number
}

function calculateFire(inputs: CalcInputs): CalcResults {
  const { annualExpenses, currentSavings, annualSavings, expectedReturn, withdrawalRate } = inputs
  const r = expectedReturn / 100
  const swr = withdrawalRate / 100

  const fireNumber = annualExpenses / swr
  const progressPercent = Math.min((currentSavings / fireNumber) * 100, 100)
  const savingsRate = annualSavings > 0
    ? (annualSavings / (annualSavings + annualExpenses)) * 100
    : 0

  let yearsToFire: number
  if (r === 0) {
    yearsToFire = (fireNumber - currentSavings) / Math.max(annualSavings, 1)
  } else {
    const numerator = fireNumber * r + annualSavings
    const denominator = currentSavings * r + annualSavings
    if (denominator <= 0 || numerator / denominator <= 0) {
      yearsToFire = 999
    } else {
      yearsToFire = Math.log(numerator / denominator) / Math.log(1 + r)
    }
  }

  yearsToFire = Math.max(0, Math.round(yearsToFire * 10) / 10)
  const currentYear = new Date().getFullYear()
  const targetAge = 35 + Math.round(yearsToFire) // approximate, assuming 35 as default age

  return {
    fireNumber: Math.round(fireNumber),
    yearsToFire,
    targetAge,
    savingsRate: Math.round(savingsRate * 10) / 10,
    projectedMonthlyIncome: Math.round(annualExpenses / 12),
    progressPercent: Math.round(progressPercent * 10) / 10,
  }
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`
  return `$${n.toLocaleString()}`
}

interface SliderInputProps {
  label: string
  hint?: string
  value: number
  min: number
  max: number
  step: number
  format: (v: number) => string
  onChange: (v: number) => void
}

function SliderInput({ label, hint, value, min, max, step, format, onChange }: SliderInputProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-medium text-charcoal">
          {label}
          {hint && <span className="text-charcoal-400 font-normal ml-1">({hint})</span>}
        </label>
        <span className="text-sm font-bold text-navy">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-surface-border rounded-full appearance-none cursor-pointer accent-amber-500"
      />
      <div className="flex justify-between text-xs text-charcoal-400 mt-1">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}

export default function FireCalculator() {
  const [inputs, setInputs] = useState<CalcInputs>({
    annualExpenses: 50000,
    currentSavings: 25000,
    annualSavings: 20000,
    expectedReturn: 7,
    withdrawalRate: 4,
  })

  const results = calculateFire(inputs)

  const set = (key: keyof CalcInputs) => (value: number) =>
    setInputs((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-charcoal mb-6">
          Your Numbers
        </h2>
        <div className="space-y-7">
          <SliderInput
            label="Annual Expenses"
            hint="in retirement"
            value={inputs.annualExpenses}
            min={10000}
            max={200000}
            step={1000}
            format={(v) => `$${v.toLocaleString()}`}
            onChange={set('annualExpenses')}
          />
          <SliderInput
            label="Current Savings"
            hint="invested"
            value={inputs.currentSavings}
            min={0}
            max={2000000}
            step={5000}
            format={(v) => formatCurrency(v)}
            onChange={set('currentSavings')}
          />
          <SliderInput
            label="Annual Savings"
            hint="you invest per year"
            value={inputs.annualSavings}
            min={0}
            max={100000}
            step={500}
            format={(v) => `$${v.toLocaleString()}`}
            onChange={set('annualSavings')}
          />
          <SliderInput
            label="Expected Annual Return"
            hint="historical avg ~7%"
            value={inputs.expectedReturn}
            min={1}
            max={15}
            step={0.5}
            format={(v) => `${v}%`}
            onChange={set('expectedReturn')}
          />
          <SliderInput
            label="Safe Withdrawal Rate"
            hint="4% is standard"
            value={inputs.withdrawalRate}
            min={2}
            max={6}
            step={0.25}
            format={(v) => `${v}%`}
            onChange={set('withdrawalRate')}
          />
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col gap-4">
        {/* FIRE Number — hero card */}
        <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white">
          <p className="section-label-amber mb-3">Your FIRE Number</p>
          <p className="font-display text-5xl sm:text-6xl font-bold text-amber-400 mb-2">
            {formatCurrency(results.fireNumber)}
          </p>
          <p className="text-white/70 text-sm">
            The amount you need invested to retire — generating{' '}
            <strong className="text-white">
              ${inputs.annualExpenses.toLocaleString()}/yr
            </strong>{' '}
            at {inputs.withdrawalRate}% withdrawal rate.
          </p>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-white/60 mb-2">
              <span>Current progress</span>
              <span className="font-semibold text-white">{results.progressPercent}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                style={{ width: `${results.progressPercent}%` }}
              />
            </div>
            <p className="text-xs text-white/50 mt-1">
              {formatCurrency(inputs.currentSavings)} saved of {formatCurrency(results.fireNumber)} goal
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl border border-surface-border p-5">
            <p className="section-label mb-2">Years to FIRE</p>
            <p className="font-display text-3xl font-bold text-charcoal">
              {results.yearsToFire >= 100 ? '100+' : results.yearsToFire}
              <span className="text-lg ml-1">yrs</span>
            </p>
          </div>
          <div className="bg-white rounded-xl border border-surface-border p-5">
            <p className="section-label mb-2">Savings Rate</p>
            <p className={cn(
              'font-display text-3xl font-bold',
              results.savingsRate >= 50 ? 'text-forest-600' :
              results.savingsRate >= 30 ? 'text-amber-500' : 'text-charcoal'
            )}>
              {results.savingsRate}
              <span className="text-lg ml-0.5">%</span>
            </p>
          </div>
          <div className="bg-white rounded-xl border border-surface-border p-5">
            <p className="section-label mb-2">Monthly in Retirement</p>
            <p className="font-display text-3xl font-bold text-charcoal">
              ${Math.round(inputs.annualExpenses / 12).toLocaleString()}
            </p>
          </div>
          <div className={cn(
            'rounded-xl p-5',
            results.savingsRate >= 50 ? 'bg-forest-50 border border-forest-100' : 'bg-amber-50 border border-amber-100'
          )}>
            <p className={cn(
              'text-xs font-semibold tracking-wider uppercase mb-2',
              results.savingsRate >= 50 ? 'text-forest-600' : 'text-amber-600'
            )}>
              FIRE Level
            </p>
            <p className={cn(
              'font-display text-xl font-bold',
              results.savingsRate >= 50 ? 'text-forest-700' : 'text-amber-700'
            )}>
              {results.savingsRate >= 70 ? 'Aggressive' :
               results.savingsRate >= 50 ? 'On Track' :
               results.savingsRate >= 30 ? 'Building' : 'Getting Started'}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-cream rounded-xl border border-surface-border p-5 text-center">
          <p className="text-sm text-charcoal-600 mb-3">
            Want a detailed FIRE plan? Get the free Starter Kit.
          </p>
          <Link href="/start-here#email" className="btn-primary w-full">
            Get My Free FIRE Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
