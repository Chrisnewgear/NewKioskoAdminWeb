import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <header className='app-topbar'>
        <Topbar />
      </header>
      <main className="app-main"><Outlet /></main>
    </div>
  );
}
