import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/LoginPage';
import RequireAuth from './components/layout/RequireAuth';
import './styles/main.scss';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />

        <Route element={
          <RequireAuth>
            <AppLayout/>
          </RequireAuth>
        }>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}
