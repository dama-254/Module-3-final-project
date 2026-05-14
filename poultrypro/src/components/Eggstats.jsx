export default function Eggstats({ data }) {
  return (
    <div style={{ background: '#0d1f0d', border: '1px solid rgba(251,191,36,0.1)', borderRadius: '14px', padding: '16px' }}>
      <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Egg Stats</p>
      {data && data.length > 0 ? data.map((d, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{d.date}</span>
          <span style={{ fontSize: '12px', color: '#fcd34d', fontWeight: 600 }}>{d.count} eggs</span>
        </div>
      )) : <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>No data yet</p>}
    </div>
  )
}
