import { ensureClient } from '../lib/supabase';

export async function signUp({ email, password, fullName }) {
  const client = ensureClient();
  const { data, error } = await client.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });
  if (error) throw error;
  return data;
}

export async function signIn({ email, password }) {
  const client = ensureClient();
  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const client = ensureClient();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const client = ensureClient();
  const { data: { user } } = await client.auth.getUser();
  return user;
}

export async function getSession() {
  const client = ensureClient();
  const { data: { session } } = await client.auth.getSession();
  return session;
}
