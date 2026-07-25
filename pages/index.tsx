import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder: implement auth or redirect
    alert(`Logging in as ${username || 'user'}`)
  }

  return (
    <div className="container">
      <Head>
        <title>Discount Manager Pro</title>
      </Head>

      <main className="card">
        <section className="brand">
          <h1>Discount</h1>
          <h2>Manager Pro</h2>
          <p>Smart Discounts. Stronger Business.</p>
        </section>

        <section className="form">
          <h3>Welcome Back!</h3>
          <form onSubmit={handleLogin}>
            <label>
              Username
              <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>

            <div className="actions">
              <button type="submit" className="btn primary">Login</button>
              <Link href="/admin"><button type="button" className="btn ghost">Go to Admin</button></Link>
            </div>
          </form>

          <div className="sso">
            <button className="btn outline">Login with SSO</button>
          </div>
        </section>
      </main>
    </div>
  )
}
