'use client';
import { createContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export interface AuthContextType {
  user: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
            console.error('Error fetching session:', error);
        }

        if (session?.user){
            setUser(session.user);
        } else {
            const { data } = await supabase.auth.signInAnonymously();
            if (data.session?.user) {
                setUser(data.session.user);
            } else {
                console.error('Failed to sign in anonymously');
            }
        }
      } catch (error) {
        console.error('Authorization error:', error);
      }
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      setUser(session?.user ?? null);
    });

    init();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
