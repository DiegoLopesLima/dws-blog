import type { UseFloatingReturn } from "@floating-ui/react";
import { type CSSProperties, createContext, type RefObject, useContext } from "react";

export type DropdownContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
  triggerId: string;
  contentRef: RefObject<HTMLDivElement | null>;
  contentId: string;
  floatingRefs: UseFloatingReturn["refs"];
  floatingStyles: CSSProperties;
  closeOnSelect: boolean;
};

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export function useDropdownContext() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("Dropdown components must be used inside <Dropdown />");
  }

  return context;
}
