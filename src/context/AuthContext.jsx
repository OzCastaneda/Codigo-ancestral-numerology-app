import { createContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import * as authService from '../services/authService';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    authService.getSession().then((s) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, s) => {
        setSession(s);
        setUser(s?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const login = useCallback(async (email, password) => {
    const data = await authService.signIn({ email, password });
    return data;
  }, []);

  const register = useCallback(async (email, password, fullName) => {
    const data = await authService.signUp({ email, password, fullName });
    return data;
  }, []);

  const logout = useCallback(async () => {
    await authService.signOut();
  }, []);

  const value = { user, session, loading, login, register, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
