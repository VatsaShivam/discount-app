import { Pool, QueryResult } from 'pg'

const connectionString = process.env.DATABASE_URL || ''

if (!connectionString) {
  console.warn('DATABASE_URL not set — API will fail until configured')
}

const pool = new Pool({ connectionString })

export async function query(text: string, params?: unknown[]): Promise<QueryResult> {
  return pool.query(text, params)
}

export default pool
