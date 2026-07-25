import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactNode } from 'react'

type DashboardLayoutProps = {
  title: string
  description?: string
  children: ReactNode
}

const sidebarItems = [
  { href: '/admin', label: 'Home', icon: '🏠' },
  { href: '/offers', label: 'Offers', icon: '📦' },
  { href: '/discounts', label: 'Discounts', icon: '💸' },
  { href: '/mix-and-match', label: 'Mix & Match', icon: '🔀' },
  { href: '/customers', label: 'Customers', icon: '👥' },
  { href: '/products', label: 'Products', icon: '📦' },
  { href: '/campaigns', label: 'Campaigns', icon: '🚀' },
  { href: '/price-lists', label: 'Price Lists', icon: '🧾' },
  { href: '/approvals', label: 'Approvals', icon: '✅' },
  { href: '/reports', label: 'Reports', icon: '📊' },
  { href: '/audit-logs', label: 'Audit Logs', icon: '📝' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
]

const topActions = [
  { label: 'New Offer', icon: '➕' },
  { label: 'Manage Offers', icon: '🗂️' },
  { label: 'Copy Offer', icon: '📄' },
  { label: 'Validate Offer', icon: '✔️' },
  { label: 'Activate Offer', icon: '▶️' },
  { label: 'Import Offers', icon: '⬇️' },
  { label: 'Export Offers', icon: '⬆️' },
  { label: 'Approval History', icon: '🕒' },
]

export default function DashboardLayout({ title, description, children }: DashboardLayoutProps) {
  const router = useRouter()

  return (
    <div className="dashboard-shell">
      <div className="dashboard-bar">
        <div className="brand-block">
          <span className="brand-mark">%</span>
          <div>
            <p className="brand-name">Discount Manager Pro</p>
            <p className="brand-note">Business offers at a glance</p>
          </div>
        </div>
        <div className="top-actions">
          {topActions.map((action) => (
            <button key={action.label} type="button" className="action-pill">
              <span>{action.icon}</span>
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="dashboard-grid">
        <aside className="dashboard-sidebar">
          <div className="sidebar-title">Navigation</div>
          <nav className="sidebar-list">
            {sidebarItems.map((item) => {
              const active = router.pathname === item.href
              return (
                <Link key={item.href} href={item.href} className={active ? 'sidebar-link active' : 'sidebar-link'}>
                  <span className="sidebar-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </aside>

        <main className="dashboard-main">
          <div className="page-head">
            <div>
              <p className="page-label">{title}</p>
              <h1>{title}</h1>
              {description ? <p className="page-description">{description}</p> : null}
            </div>
          </div>
          <div className="page-content">{children}</div>
        </main>
      </div>
    </div>
  )
}
