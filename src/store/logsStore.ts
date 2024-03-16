import { create } from "zustand";

interface logsType {
  logs: string[];
  setLogs: (logs: string[]) => void;
  appendLogs: (log: string) => void;
}

export const useLogs = create<logsType>((set) => ({
  logs: [],
  setLogs: (logs) => set({ logs }),
  appendLogs: (log) => set((state) => ({ logs: [...state.logs, log] })),
}));
