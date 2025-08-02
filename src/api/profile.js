import apiClient from '../utils/apiClient'

export const fetchProfiles = async () => (await apiClient.get('/profiles')).data
export const createProfile = async (data) => (await apiClient.post('/profiles', data)).data
export const editProfile = async (id, data) => (await apiClient.put(`/profiles/${id}`, data)).data
export const removeProfile = async (id) => (await apiClient.delete(`/profiles/${id}`)).data
