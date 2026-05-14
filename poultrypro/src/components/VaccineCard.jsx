export default function VaccineCard({ record, onEdit, onDelete }) {
  return (
    <div style={{ background: '#0d1f0d', border: '1px solid rgba(134,239,172,0.09)', borderRadius: '12px', padding: '14px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <p style={{ fontSize: '13px', fontWeight: 600, color: '#e8f5e9', marginBottom: '3px' }}>{record.vaccineName}</p>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>{record.batchId} · {record.date}</p>
      </div>
      <div style={{ textAlign: 'right' }}>
        <p style={{ fontSize: '12px', color: '#c4b5fd', marginBottom: '6px' }}>{record.dosage} · {record.method}</p>
        <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
          <button onClick={() => onEdit(record)} style={{ padding: '3px 10px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#93c5fd', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Edit</button>
          <button onClick={() => onDelete(record.id)} style={{ padding: '3px 10px', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#fca5a5', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Delete</button>
        </div>
      </div>
    </div>
  )
}
