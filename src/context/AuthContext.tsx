import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../services/api';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isValidating: boolean;
}

interface ValidateTokenResponse {
  valid: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const navigate = useNavigate();

  const { data, isLoading: isValidating, error } = useQuery<ValidateTokenResponse>({
    queryKey: ['validateToken', token],
    queryFn: async () => {
      if (!token) {
        throw new Error('No token');
      }
      const response = await api.get('/auth/validate');
      return response.data;
    },
    enabled: !!token, 
    retry: false,
  });


  useEffect(() => {
    if (isValidating) {
      return; 
    }

    if (error || (data && !data.valid)) {
      localStorage.removeItem('token');
      setToken(null);
      navigate('/login');
    }
  }, [data, error, isValidating, navigate]);

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: { username: string; password: string }) => {
      const response = await api.post('/auth/login', { username, password });
      return response.data;
    },
    onSuccess: (data: { access_token: string }) => {
      const { access_token } = data;
      if (access_token) {
        localStorage.setItem('token', access_token);
        setToken(access_token);
        navigate('/dashboard');
      }
    },
    onError: () => {
      throw new Error('Credenciais inválidas');
    },
  });

  const login = async (username: string, password: string) => {
    await loginMutation.mutateAsync({ username, password });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token && !isValidating && !!data?.valid,
        login,
        logout,
        isValidating,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}