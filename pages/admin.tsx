import React, { useState } from 'react'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [percent, setPercent] = useState(10)
  const [message, setMessage] = useState('')

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch('/api/discounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, code, percent }),
    })
    if (res.ok) {
      setMessage('Discount created')
      setTitle('')
      setCode('')
      setPercent(10)
    } else {
      setMessage('Error creating discount')
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>Admin</h1>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Code</label>
          <br />
          <input value={code} onChange={(e) => setCode(e.target.value)} />
        </div>
        <div>
          <label>Percent</label>
          <br />
          <input type="number" value={percent} onChange={(e) => setPercent(Number(e.target.value))} />
        </div>
        <button type="submit">Create</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  )
}
