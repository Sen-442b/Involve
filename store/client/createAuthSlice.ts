import { StateCreator } from "zustand";

type authObj = {
  authToken: string;
  username: string;
};
export interface AuthSlice {
  authToken: string;
  username: string;
  setUser: (obj: authObj) => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  authToken: "",
  username: "",
  setUser: ({ username, authToken }) => set({ authToken, username }),
});
