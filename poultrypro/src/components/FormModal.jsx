export default function FormModal({ title, onClose, onSubmit, children }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ background: '#1a2030', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', width: '100%', maxWidth: '400px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px', color: '#e8f5e9' }}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>{children}</div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '18px' }}>
          <button onClick={onClose} style={{ flex: 1, padding: '9px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: '12px', cursor: 'pointer' }}>Cancel</button>
          <button onClick={onSubmit} style={{ flex: 1, padding: '9px', borderRadius: '10px', background: '#16a34a', color: '#fff', fontSize: '12px', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Save</button>
        </div>
      </div>
    </div>
  )
}
