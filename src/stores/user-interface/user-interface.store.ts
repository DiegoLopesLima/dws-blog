import { create } from "zustand";
import type { UserInterfaceStore } from "./user-interface.types";

export const useUserInterfaceStore = create<UserInterfaceStore>()((set) => ({
  isSearchFieldOpen: false,

  setIsSearchFieldOpen: (value) => {
    set({
      isSearchFieldOpen: value,
    });
  },
}));
