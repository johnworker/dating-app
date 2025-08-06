import { supabase } from '../utils/supabaseClient'

/** 取得當前使用者的個人檔案 */
export async function fetchMyProfile() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) throw userError || new Error('無法取得會員資訊')

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()
  if (error) throw error
  return data    // 可能是 null 或 profile 物件
}

/** 建立／更新個人檔案 (Upsert) */
export async function upsertProfile(profile) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) throw userError || new Error('無法取得會員資訊')

  const { data, error } = await supabase
    .from('profiles')
    .upsert({ ...profile, user_id: user.id }, { onConflict: 'user_id' })
    .single()
  if (error) throw error
  return data
}

/** 取得其他所有使用者檔案 */
export async function fetchProfiles() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
  if (error) throw error
  return data
}

export const createProfile = upsertProfile
export const editProfile   = upsertProfile