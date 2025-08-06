import { supabase } from '../utils/supabaseClient'

/** 登入 */
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  if (error) throw error
  return data
}

/** 註冊 */
export async function register({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) throw error
  return data
}

/** 登出 */
export async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}