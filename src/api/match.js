import apiClient from '../utils/apiClient'

/**
 * 取得目前使用者的配對清單
 * GET /matches
 */
export const fetchMatches = async () => {
  const { data } = await apiClient.get('/matches')
  return data
}

/**
 * 發起配對請求 (需先登入)
 * POST /matches
 */
export const postMatch = async targetUserId => {
  const { data } = await apiClient.post('/matches', { targetUserId })
  return data
}