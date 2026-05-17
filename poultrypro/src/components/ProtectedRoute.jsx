import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuth = localStorage.getItem('pf_auth') === 'true'
  return isAuth ? children : <Navigate to="/login" />
}
