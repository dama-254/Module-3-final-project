import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const doLogin = (u, r) => {
    localStorage.setItem('pf_auth', 'true')
    localStorage.setItem('pf_user', u)
    localStorage.setItem('pf_role', r)
    navigate('/dashboard')
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const u = username.trim().toLowerCase()
    const p = password.trim()
    if ((u === 'admin' && p === 'admin123') || (u === 'manager' && p === 'manager123') || (u === 'worker' && p === 'worker123')) {
      doLogin(u, u === 'admin' ? 'Admin' : u === 'manager' ? 'Manager' : 'Worker')
    } else {
      setError('Wrong credentials. Use admin/admin123 or click a demo button below.')
    }
  }

  const inp = { width: '100%', padding: '10px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(134,239,172,0.2)', borderRadius: '10px', fontSize: '13px', color: '#fff', outline: 'none', marginTop: '6px', fontFamily: 'inherit', boxSizing: 'border-box' }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <div style={{ background: '#0d1f0d', border: '1px solid rgba(134,239,172,0.15)', borderRadius: '20px', padding: '36px', width: '100%', maxWidth: '380px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🐔</div>
          <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#86efac', marginBottom: '6px' }}>PoultryPro</h2>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>Smart Farm Management System</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', color: '#fca5a5', borderRadius: '10px', padding: '12px', fontSize: '12px', marginBottom: '18px', lineHeight: 1.5 }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Username</label>
            <input style={inp} value={username} onChange={e => { setUsername(e.target.value); setError('') }} placeholder="e.g. admin" />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'block' }}>Password</label>
            <input type="password" style={inp} value={password} onChange={e => { setPassword(e.target.value); setError('') }} placeholder="••••••••" />
          </div>
          <button type="submit" style={{ width: '100%', padding: '12px', background: '#16a34a', color: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
            Sign in →
          </button>
        </form>

        <div style={{ margin: '20px 0 14px', textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}>or use a demo account</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[['admin','admin123','Admin','👑'],['manager','manager123','Manager','🌿'],['worker','worker123','Worker','👷']].map(([u,p,r,icon]) => (
            <button key={u} onClick={() => doLogin(u, r)} style={{ width: '100%', padding: '10px 14px', background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.2)', color: '#86efac', borderRadius: '10px', fontSize: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{icon} Login as {r}</span>
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>{u} / {p}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
