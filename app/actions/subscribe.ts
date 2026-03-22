'use server'

import { z } from 'zod'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().optional(),
  source: z.string().optional(),
})

export type SubscribeResult =
  | { success: true; message: string }
  | { success: false; error: string }

export async function subscribeToList(
  formData: FormData
): Promise<SubscribeResult> {
  const parsed = subscribeSchema.safeParse({
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    source: formData.get('source'),
  })

  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0]?.message ?? 'Invalid input' }
  }

  const { email, firstName, source } = parsed.data

  const apiKey = process.env.GHL_API_KEY
  const locationId = process.env.GHL_LOCATION_WHATSFIRE ?? process.env.GHL_LOCATION_ID

  if (!apiKey || !locationId) {
    // Dev mode: log and return success so the UI works locally
    console.info('[subscribe] Dev mode — would add GHL contact:', email)
    return {
      success: true,
      message: "You're on the list! Check your inbox for the FIRE Starter Kit.",
    }
  }

  try {
    // Build name parts
    const nameParts = (firstName ?? '').trim().split(' ')
    const first = nameParts[0] ?? ''
    const last = nameParts.slice(1).join(' ')

    const payload = {
      locationId,
      email,
      firstName: first,
      lastName: last,
      tags: ['whatsfire-subscriber', 'fire-starter-kit', source ?? 'website'].filter(Boolean),
      source: 'whatsfire.com',
    }

    const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const body = await res.text()
      // If contact already exists, GHL returns 400 — treat as success
      if (res.status === 400 && body.includes('already exists')) {
        return {
          success: true,
          message: "You're already on the list! Check your inbox for the FIRE Starter Kit.",
        }
      }
      console.error('[subscribe] GHL error:', res.status, body)
      return { success: false, error: 'Something went wrong. Please try again.' }
    }

    return {
      success: true,
      message: "You're on the list! Check your inbox for the FIRE Starter Kit.",
    }
  } catch (err) {
    console.error('[subscribe] Network error:', err)
    return { success: false, error: 'Something went wrong. Please try again.' }
  }
}
