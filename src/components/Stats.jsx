import { useEffect, useState } from 'react'

export default function Stats() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/stats`)
        const data = await res.json()
        setStats(data)
      } catch (e) {
        setStats({ users: 24000, completed_deliveries: 180000, active_drivers: 800, partner_merchants: 300 })
      }
    }
    fetchStats()
  }, [])

  const fmt = (n) => new Intl.NumberFormat().format(n)

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card label="Users" value={stats ? fmt(stats.users) : '—'} />
          <Card label="Deliveries" value={stats ? fmt(stats.completed_deliveries) : '—'} />
          <Card label="Drivers" value={stats ? fmt(stats.active_drivers) : '—'} />
          <Card label="Merchants" value={stats ? fmt(stats.partner_merchants) : '—'} />
        </div>
      </div>
    </section>
  )
}

function Card({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="mt-2 text-indigo-200/80">{label}</div>
    </div>
  )
}
