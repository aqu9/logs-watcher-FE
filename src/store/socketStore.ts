import { create } from "zustand";

interface SocketType {
  isConnected: boolean;
  socket: any;
  setSocket: (socket: any) => void;
  SetIsConnected: (connect: boolean) => void;
}

export const useSocket = create<SocketType>((set) => ({
  isConnected: false,
  socket: null,
  setSocket: (socket) => set({ socket }),
  SetIsConnected: (connect) => set({ isConnected: connect }),
}));
