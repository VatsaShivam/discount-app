import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL || ''

if (!connectionString) {
  console.warn('DATABASE_URL not set — API will fail until configured')
}

const pool = new Pool({ connectionString })

export async function query(text: string, params?: any[]) {
  return pool.query(text, params)
}

export default pool
