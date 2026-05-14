export default function EggStarts({ total, today, rate }) {
  return (
    <div style={{ background: '#0d1f0d', border: '1px solid rgba(251,191,36,0.15)', borderRadius: '14px', padding: '16px' }}>
      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>🥚 Egg Production</p>
      <p style={{ fontSize: '24px', fontWeight: 700, color: '#fcd34d', marginBottom: '4px' }}>{today ?? 0} <span style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.3)' }}>today</span></p>
      <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>Total: {total ?? 0} · Rate: {rate ?? 0}%</p>
    </div>
  )
}
