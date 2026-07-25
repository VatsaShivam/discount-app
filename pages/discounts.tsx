import Head from 'next/head'
import DashboardLayout from '../components/DashboardLayout'

export default function Discounts() {
  return (
    <>
      <Head>
        <title>Discounts · Discount Manager Pro</title>
      </Head>
      <DashboardLayout title="Discount Library" description="Manage your discount definitions and pricing rules.">
        <div className="page-row">
          <div className="content-card stretch">
            <h2>Active Discounts</h2>
            <div className="table-placeholder">
              <p>No discounts have been created yet. Use the New Offer action to add a discount offer.</p>
            </div>
          </div>
          <aside className="info-card narrow">
            <h3>Discounts</h3>
            <p>Use this space to define percentage and amount-based discounts for campaigns.</p>
          </aside>
        </div>
      </DashboardLayout>
    </>
  )
}
