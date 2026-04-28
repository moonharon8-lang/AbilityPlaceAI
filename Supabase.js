// ============================================
// BRIDGEUP — SUPABASE CLIENT
// Replace the placeholders below with your
// actual Supabase project URL and anon key.
// Get them from: supabase.com → your project
// → Project Settings → API
// ============================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL  = 'YOUR_SUPABASE_URL_HERE'
const SUPABASE_ANON = 'YOUR_SUPABASE_ANON_KEY_HERE'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON)

// ── QUICK AUTH HELPERS ──────────────────────

export async function signUp(email, password, metadata = {}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata }
  })
  return { data, error }
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession()
  return session
}