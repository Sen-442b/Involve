import { StateCreator } from "zustand";

export interface AuthSlice {
  authToken: string;
  setAuthToken: (authToken: string) => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  authToken: "",
  setAuthToken: (authToken) => set({ authToken: authToken }),
});
