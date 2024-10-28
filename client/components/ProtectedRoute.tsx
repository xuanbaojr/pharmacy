"use client"; 

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const toastOptions = {
    autoClose: 2000,
  };

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warn('Bạn phải đăng nhập để sử dụng chức năng này!', toastOptions);
      setTimeout(() => {
        router.push('/login');
      }, toastOptions.autoClose); 
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;