export type UserInterfaceState = {
  isSearchFieldOpen: boolean;
};

export type UserInterfaceActions = {
  setIsSearchFieldOpen: (value: boolean) => void;
};

export type UserInterfaceStore = UserInterfaceState & UserInterfaceActions;
