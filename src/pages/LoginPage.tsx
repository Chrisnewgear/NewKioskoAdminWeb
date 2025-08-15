import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoUrl from '../assets/images/logoCRCG1.png'
import { login } from '../services/authService';
import { getToken, setSession } from '../services/sessionService';

type LocationState = {
  from?: {
    pathname?: string;
  };
};

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  //FOR TESTING NO REAL LOGIN
  // useEffect(() => {
  //   if (localStorage.getItem('auth') === 'true') navigate('/');
  // }, [navigate]);

  // function handleSubmit(e: FormEvent){
  //   e.preventDefault();
  //   setError(null);

  //   if(!email || !password){
  //     setError('Por favor ingrese correo y contraseña');
  //     return;
  //   }

  //   // Fake auth: save a flag and go to dashboard
  //   localStorage.setItem('auth', 'true');
  //   const from = (location.state as LocationState)?.from?.pathname || '/';
  //   navigate(from, { replace: true});
  // }

    //FOR A REAL LOGIN
    useEffect(() => {
      if (getToken()) navigate('/');
    }, [navigate]);

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    setError(null);

    if(!email || !password){
      setError('Por favor ingrese correo y contraseña');
      return;
    }

    try{
      setLoading(true);
      const response = await login({email, password});
      setSession(response);
      const from = (location.state as LocationState)?.from?.pathname || '/';
      navigate(from, {replace: true});
    }catch(err: unknown){
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error al iniciar sesión');
      }
    }finally{
      setLoading(false);
    }
  }

  return(
    <div className="login-page">
      <div className="login-card">
        <img className='login-logo' src={logoUrl} alt="Logo" />
        <h1>Sistema Administrativo de Kioskos</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Correo
            <input type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='tumail@company.com' required
            />
          </label>
          <label>
            Contraseña
            <input 
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='********' required
            />
          </label>
          {error && <p className='error'>{error}</p>}
          <button type="submit" disabled={loading}>{loading ? 'Ingresando…' : 'Iniciar'}</button>
        </form>
      </div>
    </div>
  )
}