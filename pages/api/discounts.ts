import { NextApiRequest, NextApiResponse } from 'next'
import { query } from '../../lib/db'

async function ensureTable() {
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
    await ensureTable()
    if (req.method === 'GET') {
      const r = await query('SELECT id, title, code, percent, expires_at FROM discounts ORDER BY id DESC')
      return res.status(200).json(r.rows)
    }

    if (req.method === 'POST') {
      const { title, code, percent } = req.body
      if (!title || !code || !percent) return res.status(400).json({ error: 'missing fields' })
      const insert = await query('INSERT INTO discounts (title, code, percent) VALUES ($1,$2,$3) RETURNING id, title, code, percent, expires_at', [title, code, percent])
      return res.status(201).json(insert.rows[0])
    }

    res.setHeader('Allow', 'GET,POST')
    res.status(405).end('Method Not Allowed')
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: 'internal_error', details: err.message })
  }
}
