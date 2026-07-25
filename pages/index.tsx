import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Signing in as ${username || 'user'}`)
  }

  return (
    <div className="page-shell">
      <Head>
        <title>Discount Manager Pro</title>
      </Head>

      <main className="login-panel">
        <aside className="hero-panel">
          <div className="hero-icon">
            <span className="tag-symbol">%</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Discount</p>
            <h1>Manager Pro</h1>
            <p className="hero-text">Smart Discounts. Stronger Business.</p>
          </div>
        </aside>

        <section className="form-panel">
          <div className="form-header">
            <div>
              <p className="welcome-label">Welcome Back!</p>
              <h2>Sign in to continue to Discount Manager Pro</h2>
            </div>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="field-row">
              <label>
                <span>Username</span>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>

            <div className="form-meta">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <button type="button" className="text-button">
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn primary-btn">
              <span className="btn-icon">🔒</span>
              Login
            </button>
          </form>

          <div className="divider">or</div>

          <button type="button" className="btn secondary-btn">
            <span className="btn-icon">🔗</span>
            Login with SSO
          </button>
        </section>
      </main>
    </div>
  )
}
