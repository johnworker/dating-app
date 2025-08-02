import create from 'zustand'

const useProfileStore = create(set => ({
  profiles: [],
  setProfiles: list => set({ profiles: list }),
  addProfile: p => set(state => ({ profiles: [...state.profiles, p] })),
  updateProfile: p =>
    set(state => ({
      profiles: state.profiles.map(x => x.id === p.id ? p : x)
    })),
  deleteProfile: id =>
    set(state => ({ profiles: state.profiles.filter(x => x.id !== id) })),
}))

export default useProfileStore
