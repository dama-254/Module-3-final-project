<<<<<<< HEAD
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
=======
export default function LoadingSpinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px' }}>
      <div style={{ width: '28px', height: '28px', border: '2px solid rgba(134,239,172,0.2)', borderTop: '2px solid #86efac', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
>>>>>>> af2fad795637182c6fe61fcbf18e8c2e3e575839
