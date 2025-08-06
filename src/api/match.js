import { supabase } from '../utils/supabaseClient'

export async function fetchMatches() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) throw userError || new Error('無法取得會員資訊')

  const { data, error } = await supabase
    .from('matches')
    .select('*, target:profiles(*)')
    .eq('user_id', user.id)
  if (error) throw error
  return data
}

export async function postMatch(profile) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) throw userError || new Error('無法取得會員資訊')

  const { data, error } = await supabase
    .from('matches')
    .insert([{ user_id: user.id, target_user_id: profile.user_id }])
  if (error) throw error
  return data
}