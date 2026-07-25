// Small wrapper around localStorage for the template
export function save(key: string, value: any) {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(value))
}

export function load(key: string) {
  if (typeof window === 'undefined') return null
  const v = localStorage.getItem(key)
  return v ? JSON.parse(v) : null
}
