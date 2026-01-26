import { create } from 'zustand';

/**
 * Authentication store
 */
const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  setAuth: (user, token) => set({ user, token, isAuthenticated: true }),
  
  clearAuth: () => set({ user: null, token: null, isAuthenticated: false }),
  
  updateUser: (user) => set({ user }),
}));

export default useAuthStore;
