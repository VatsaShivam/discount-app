// Placeholder DB utilities for the template
// Replace with real database code (Prisma, Mongoose, etc.)

export async function connect() {
  // noop placeholder for connecting to database
  return Promise.resolve()
}

export async function getDiscounts() {
  // return sample data
  return [
    { id: 'd1', name: 'Summer Sale', active: true },
    { id: 'd2', name: 'Clearance', active: false }
  ]
}
import { Pool, QueryResult } from 'pg'

const connectionString = process.env.DATABASE_URL || ''

if (!connectionString) {
  console.warn('DATABASE_URL not set — using in-memory fallback for discounts')
}

const pool = new Pool({ connectionString: connectionString || undefined })

export function hasDatabaseConfig(): boolean {
  return Boolean(connectionString)
}

export async function query(text: string, params?: unknown[]): Promise<QueryResult> {
  if (!hasDatabaseConfig()) {
    throw new Error('DATABASE_URL not configured')
  }
  return pool.query(text, params)
}

export default pool
