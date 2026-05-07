import { create } from 'zustand';
import { Section } from '../constants';

interface User {
  name: string;
  role: string;
  avatar: string;
  department: string;
}

interface AppState {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  user: User;
}

export const useStore = create<AppState>((set) => ({
  activeSection: 'dashboard',
  setActiveSection: (section) => set({ activeSection: section }),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => {
    const newMode = !state.isDarkMode;
    if (newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    return { isDarkMode: newMode };
  }),
  user: {
    name: 'Arthur Vance',
    role: 'Chief Operational Architect',
    avatar: 'AV',
    department: 'Strategic Command'
  },
}));
