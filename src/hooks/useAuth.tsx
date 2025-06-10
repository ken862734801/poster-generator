import { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

export const getAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('getAuth must be used within an AuthProvider');
  }
  return context;
};
