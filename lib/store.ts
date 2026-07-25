export type Discount = {
  id: number
  title: string
  code: string
  percent: number
  expires_at: string | null
}

const starterDiscounts: Discount[] = [
  {
    id: 1,
    title: 'Launch week offer',
    code: 'LAUNCH10',
    percent: 10,
    expires_at: null,
  },
]

let nextId = starterDiscounts.length + 1
let inMemoryDiscounts: Discount[] = starterDiscounts.map((discount) => ({ ...discount }))

export function getDiscounts(): Discount[] {
  return inMemoryDiscounts.map((discount) => ({ ...discount }))
}

export function addDiscount(input: Omit<Discount, 'id'>): Discount {
  const created: Discount = {
    id: nextId++,
    ...input,
  }
  inMemoryDiscounts = [created, ...inMemoryDiscounts]
  return created
}
