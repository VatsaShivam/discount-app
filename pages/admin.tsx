import Head from 'next/head'
import Link from 'next/link'

export default function Admin() {
  return (
    <div style={{ padding: 24 }}>
      <Head>
        <title>Admin · Discount Manager Pro</title>
      </Head>

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Admin Dashboard</h1>
        <Link href="/">Home</Link>
      </header>

      <section style={{ marginTop: 20 }}>
        <h2>Quick Actions</h2>
        <ul>
          <li>Create discount campaigns</li>
          <li>Manage rules</li>
          <li>View reports</li>
        </ul>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Recent Activity</h2>
        <p>No activity yet — this is a template.</p>
      </section>
    </div>
  )
}
