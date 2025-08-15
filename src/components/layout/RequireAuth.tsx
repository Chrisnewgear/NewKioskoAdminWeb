import {Navigate, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';


type Props = {children: ReactNode};

export default function RequireAuth({children} : Props){
  const authed = localStorage.getItem('auth') === 'true';
  const location = useLocation();

  if(!authed){
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return <>{children}</>
}
