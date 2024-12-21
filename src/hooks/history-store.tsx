import { historyType } from "@/types/history";
import { create } from "zustand";

interface HistoryStore {
  history: historyType[];
  setHistory: (history: historyType[]) => void;
  addHistory: (history: historyType) => void;
  deleteHistory: (history: historyType) => void;
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
  deleteHistory: (history: historyType) =>
    set((state) => ({
      history: state.history.filter((item) => item._id !== history._id),
    })),
  deleteAllHistory: () =>
    set(() => ({
      history: [],
    })),
}));
