import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await login(username, password);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_err) {
      setError('Credenciais inválidas. Tente novamente.');
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center gap-3.5 pb-[72px]">
      <h2 className="font-bold text-[28px]">Faça seu Login</h2>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded-xl">
          {error}
        </div>
      )}

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
            disabled={isLoading}
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Senha:</label>
          <input 
            type="password"
            placeholder="*********"
            className="bg-white rounded-2xl text-gray-700 py-1 px-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-3xl py-1 px-4 hover:bg-blue-600 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? 'Carregando...' : 'Fazer login'}
        </button>
      </form>
    </main>
  )
}
