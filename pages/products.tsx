import Head from 'next/head'
import DashboardLayout from '../components/DashboardLayout'

export default function Products() {
  return (
    <>
      <Head>
        <title>Products · Discount Manager Pro</title>
      </Head>
      <DashboardLayout title="Products" description="Manage the products that are eligible for offers.">
        <div className="page-row">
          <div className="content-card stretch">
            <h2>Product Catalog</h2>
            <div className="table-placeholder">
              <p>Organize products, categories, and pricing groups for discount applicability.</p>
            </div>
          </div>
          <aside className="info-card narrow">
            <h3>Product rules</h3>
            <p>You can control whether discounts apply to entire categories, SKUs, or selected products.</p>
          </aside>
        </div>
      </DashboardLayout>
    </>
  )
}
