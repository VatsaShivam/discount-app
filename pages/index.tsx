import React, { useEffect, useState } from 'react'

type Discount = {
  id: number
  title: string
  code: string
  percent: number
  expires_at: string | null
}

export default function Home() {
  const [discounts, setDiscounts] = useState<Discount[]>([])

  useEffect(() => {
    fetch('/api/discounts')
      .then((r) => r.json())
      .then((data) => setDiscounts(data))
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
