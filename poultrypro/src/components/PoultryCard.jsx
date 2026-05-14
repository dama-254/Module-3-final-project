export default function PoultryCard({ label, value, icon, color, sub }) {
  return (
    <div style={{ background: '#0d1f0d', border: '1px solid rgba(134,239,172,0.09)', borderRadius: '14px', padding: '16px' }}>
      <div style={{ fontSize: '20px', marginBottom: '8px' }}>{icon}</div>
      <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{label}</p>
      <p style={{ fontSize: '22px', fontWeight: 700, color: color || '#86efac', marginBottom: '3px' }}>{value}</p>
      {sub && <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.28)' }}>{sub}</p>}
    </div>
  )
}
