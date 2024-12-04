"use client"; 

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const toastOptions = {
    autoClose: 2000,
  };
  const hasWarned = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !hasWarned.current) {
      toast.warn('Bạn phải đăng nhập để sử dụng chức năng này!', toastOptions);
      hasWarned.current = true;
      setTimeout(() => {
        router.push('/login');
      }, toastOptions.autoClose); 
    } else if (isAuthenticated) {
      hasWarned.current = false; 
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;