import { create } from 'zustand';

/**
 * UI state store
 */
const useUIStore = create((set) => ({
  sidebarOpen: true,
  loading: false,
  notification: null,

  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  setLoading: (loading) => set({ loading }),
  
  setNotification: (notification) => set({ notification }),
  
  clearNotification: () => set({ notification: null }),
}));

export default useUIStore;
