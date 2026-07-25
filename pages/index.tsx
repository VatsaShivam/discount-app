import React, { useEffect, useState } from 'react'
import type { Discount } from '../lib/store'

export default function Home() {
  const [discounts, setDiscounts] = useState<Discount[]>([])

  useEffect(() => {
    let cancelled = false

    fetch('/api/discounts')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed with ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (!cancelled) {
          setDiscounts(Array.isArray(data) ? data : [])
        }
      })
      .catch(() => {
        if (!cancelled) {
          setDiscounts([])
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Discounts — Minimal Telon.one-like</h1>
      <p>A simple discount listing and creation app. Visit /admin to add discounts.</p>
      <ul>
        {discounts.map((d) => (
          <li key={d.id} style={{ marginBottom: 12 }}>
            <strong>{d.title}</strong> — {d.percent}% — code: <code>{d.code}</code>
            {d.expires_at ? <span> — expires: {new Date(d.expires_at).toLocaleString()}</span> : null}
          </li>
        ))}
      </ul>
    </main>
  )
}
