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
