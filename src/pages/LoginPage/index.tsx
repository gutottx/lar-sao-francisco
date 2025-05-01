import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem('token', 'fake-jwt-token');
    navigate('/dashboard'); 
  };

  return (
    <main className="flex flex-col items-center gap-3.5 pb-[72px]">
      <h2 className="font-bold text-[28px]">Faça seu Login</h2>

      <form 
        className="flex flex-col gap-5 items-center justify-between m-auto p-4 border rounded-2xl border-white w-326px md:w-[400px]"
        onSubmit={handleLogin}
      >
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Usuário:</label>
          <input 
            type="text"
            placeholder="Digite seu usuário"
            className="bg-white rounded-2xl text-gray-700 py-1 px-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Senha:</label>
          <input 
            type="text"
            placeholder="*********"
            className="bg-white rounded-2xl text-gray-700 py-1 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-3xl py-1 px-4 hover:bg-blue-600 cursor-pointer"
          type="submit"
        >
          Fazer login
        </button>
      </form>
    </main>
  )
}
