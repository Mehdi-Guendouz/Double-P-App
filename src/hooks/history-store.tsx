import { historyType } from "@/types/history";
import { create } from "zustand";

interface HistoryStore {
  history: historyType[];
  setHistory: (history: historyType[]) => void;
  addHistory: (history: historyType) => void;
  deleteHistory: (id: string) => void;
  deleteAllHistory: () => void;
}

export const useHistoryStore = create<HistoryStore>((set) => ({
  history: [] as historyType[],
  setHistory: (history: historyType[]) =>
    set(() => ({
      history: history,
    })),
  addHistory: (history: historyType) =>
    set((state) => ({
      history: [...state.history, history],
    })),
  deleteHistory: (id) =>
    set((state) => ({ history: state.history.filter((h) => h._id !== id) })),
  deleteAllHistory: () =>
    set(() => ({
      history: [],
    })),
}));
