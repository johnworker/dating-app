import apiClient from '../utils/apiClient'

/**
 * 取得目前使用者的配對清單
 * (假設後端路由 GET /matches 回傳 array of profiles)
 */
export const fetchMatches = async () => {
  const { data } = await apiClient.get('/matches')
  return data
}
