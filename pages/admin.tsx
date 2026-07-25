import Head from 'next/head'
import DashboardLayout from '../components/DashboardLayout'

export default function Admin() {
  return (
    <>
      <Head>
        <title>Home · Discount Manager Pro</title>
      </Head>
      <DashboardLayout title="Role Center" description="Welcome back, Admin! Here’s your offer management workspace.">
        <div className="role-dashboard">
          <div className="mini-cards">
            <article className="mini-card orange">
              <p>Total Sales Impact</p>
              <strong>₹ 12,45,300</strong>
              <span>+18.6% vs last 7 days</span>
            </article>
            <article className="mini-card purple">
              <p>Total Discounts Given</p>
              <strong>₹ 3,25,450</strong>
              <span>+12.4% vs last 7 days</span>
            </article>
            <article className="mini-card green">
              <p>Active Offers</p>
              <strong>27</strong>
              <span>+8 vs last 7 days</span>
            </article>
            <article className="mini-card blue">
              <p>New Customers</p>
              <strong>1,243</strong>
              <span>+10.3% vs last 7 days</span>
            </article>
          </div>

          <div className="role-grid">
            <section className="analytics-card">
              <h3>Sales Impact Over Time</h3>
              <div className="chart-placeholder">Chart placeholder</div>
            </section>
            <section className="analytics-card">
              <h3>Active Offers</h3>
              <ul className="status-list">
                <li>Flat 20% Off • Active</li>
                <li>Weekend Special • Active</li>
                <li>Buy 1 Get 1 • Active</li>
                <li>New User 15% Off • Scheduled</li>
              </ul>
            </section>
            <section className="analytics-card">
              <h3>Redemption Trend</h3>
              <div className="chart-placeholder">Chart placeholder</div>
            </section>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}
