import { NextApiRequest, NextApiResponse } from 'next'
import { hasDatabaseConfig, query } from '../../lib/db'
import { addDiscount, getDiscounts } from '../../lib/store'

async function ensureTable() {
  if (!hasDatabaseConfig()) return

  await query(`
    CREATE TABLE IF NOT EXISTS discounts (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      code TEXT NOT NULL UNIQUE,
      percent INTEGER NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      expires_at TIMESTAMP WITH TIME ZONE
    );
  `)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      if (hasDatabaseConfig()) {
        await ensureTable()
        const r = await query('SELECT id, title, code, percent, expires_at FROM discounts ORDER BY id DESC')
        return res.status(200).json(r.rows)
      }

      return res.status(200).json(getDiscounts())
    }

    if (req.method === 'POST') {
      const body = req.body as { title?: string; code?: string; percent?: number }
      const { title, code, percent } = body
      if (!title || !code || typeof percent !== 'number') {
        return res.status(400).json({ error: 'missing fields' })
      }

      if (hasDatabaseConfig()) {
        await ensureTable()
        const insert = await query('INSERT INTO discounts (title, code, percent) VALUES ($1,$2,$3) RETURNING id, title, code, percent, expires_at', [title, code, percent])
        return res.status(201).json(insert.rows[0])
      }

      const created = addDiscount({ title, code, percent, expires_at: null })
      return res.status(201).json(created)
    }

    res.setHeader('Allow', 'GET,POST')
    res.status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: 'internal_error', details: err.message })
  }
}
