import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

export function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
  return function WithAuthComponent(props: P) {
    const { isLoggedIn, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isLoggedIn) {
        router.push('/admin/blog');
      }
    }, [loading, isLoggedIn, router]);

    if (loading) {
      return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!isLoggedIn) {
      return null; // Router will redirect
    }

    return <WrappedComponent {...props} />;
  };
}