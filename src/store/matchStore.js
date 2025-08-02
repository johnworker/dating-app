import create from 'zustand'

/**
 * 管理 match 清單的全域狀態
 */
const useMatchStore = create(set => ({
  matches: [],
  setMatches: list => set({ matches: list }),
  clearMatches: () => set({ matches: [] }),
}))

export default useMatchStore
