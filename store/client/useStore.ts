import { create } from "zustand";
import { createAuthSlice, AuthSlice } from "./createAuthSlice";

interface Store extends AuthSlice {}

const useStore = create<Store>()((...args) => ({
  ...createAuthSlice(...args),
}));
