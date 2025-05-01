import { Navigate } from 'react-router-dom';
import { JSX } from 'react';
import { useAuth } from '../../context/AuthContext';


interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated, isValidating } = useAuth();

  if (isValidating) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}