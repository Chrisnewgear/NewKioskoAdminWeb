import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') navigate('/');
  }, [navigate]);

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    setError(null);

    if(!email || !password){
      setError('Ingrese correo y contraseña');
      return;
    }

    // Fake auth: save a flag and go to dashboard
    localStorage.setItem('auth', 'true');
    const from = (location.state as any)?.from?.pathname || '/';
    navigate(from, { replace: true});
  }

  return(
    <div className="login-page">
      <div className="login-card">
        <h1>Iniciar Sesion</h1>
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
          <button type="submit">Iniciar</button>
        </form>
      </div>
    </div>
  )
}