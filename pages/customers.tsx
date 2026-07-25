import Head from 'next/head'
import DashboardLayout from '../components/DashboardLayout'

export default function Customers() {
  return (
    <>
      <Head>
        <title>Customers · Discount Manager Pro</title>
      </Head>
      <DashboardLayout title="Customers" description="Explore your customer groups and engagement segments.">
        <div className="page-row">
          <div className="content-card stretch">
            <h2>Customer Segments</h2>
            <div className="table-placeholder">
              <p>Customer data is ready for segmentation, filtering, and targeted offers.</p>
            </div>
          </div>
          <aside className="info-card narrow">
            <h3>Customer insights</h3>
            <p>Track group membership, loyalty status, and eligibility for discount programs.</p>
          </aside>
        </div>
      </DashboardLayout>
    </>
  )
}
