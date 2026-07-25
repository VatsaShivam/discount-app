import Head from 'next/head'
import DashboardLayout from '../components/DashboardLayout'

export default function Offers() {
  return (
    <>
      <Head>
        <title>Offers · Discount Manager Pro</title>
      </Head>
      <DashboardLayout title="Create New Offer" description="Select the reason for the offer and define the company context.">
        <div className="wizard-steps">
          <div className="step active">1 Basic Information</div>
          <div className="step">2 Offer Details</div>
          <div className="step">3 Discount Rules</div>
          <div className="step">4 Conditions</div>
          <div className="step">5 Summary</div>
        </div>

        <div className="offer-grid">
          <section className="offer-main">
            <div className="content-card">
              <h2>Basic Information</h2>
              <p>Select the reason for creating this offer and the company.</p>
              <div className="field-group">
                <label>
                  Reason for Offer
                  <select>
                    <option>Select reason</option>
                    <option>Seasonal Promotion</option>
                    <option>Clearance</option>
                    <option>New Customer</option>
                  </select>
                </label>
                <label>
                  Company
                  <select>
                    <option>Select company</option>
                    <option>Demo Company Pvt. Ltd.</option>
                  </select>
                </label>
              </div>
            </div>
          </section>

          <aside className="offer-aside">
            <div className="info-card">
              <h3>Create New Offer</h3>
              <p>Choose the correct reason so the offer is tracked and created in the right business context.</p>
              <ul>
                <li>Clear objective for reporting</li>
                <li>Company-level eligibility</li>
                <li>Quick validation later</li>
              </ul>
            </div>
          </aside>
        </div>
      </DashboardLayout>
    </>
  )
}
