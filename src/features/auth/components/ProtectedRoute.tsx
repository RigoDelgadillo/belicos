import React from 'react'
import { useAuthStore } from '../../../store/useAuthStore';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}


export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
  const isAuthenticated = useAuthStore ((state) => state.isAuthenticated);

  if(!isAuthenticated){
    return <Navigate to="/login" replace />
  }

  return children
}
