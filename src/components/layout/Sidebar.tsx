import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  function logout(){
    localStorage.removeItem('auth');
    navigate('/login', { replace: true });
  }

  return (
    <aside className="app-sidebar sidebar">
      <div className="brand">Kiosko Admin</div>
      <nav className="nav">
        <NavLink to="/dashboard" aria-current="page">Dashboard</NavLink>
        <a href="#" aria-current="page">Dashboard</a>
        <a href="#">Inicio</a>
        <a href="#">Monitoreo</a>
        <a href="#">Mantenimientos</a>
        <a href="#">Procesos</a>
        <a href="#">Reportes</a>
        <button onClick={logout}style={{all: 'unset', cursor: 'pointer', padding: '0.5rem 0.75rem'}}>
          Cerrar Sesión
        </button>
      </nav>
    </aside>
  );
}
