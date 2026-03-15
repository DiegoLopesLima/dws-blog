import { autoUpdate, flip, type Placement, shift, useFloating } from "@floating-ui/react";
import { type ReactNode, useEffect, useId, useMemo, useRef, useState } from "react";
import { DropdownContext } from "./DropdownContext";

export type DropdownRootProps = {
  children: ReactNode;
  placement?: Placement;
  closeOnSelect?: boolean;
};

function DropdownRoot({ children, placement = "bottom-start", closeOnSelect = true }: DropdownRootProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();
  const triggerId = useId();

  const { refs, floatingStyles } = useFloating({
    open,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [flip(), shift()],
  });

  const value = useMemo(
    () => ({
      open,
      setOpen,
      triggerRef,
      triggerId,
      contentRef,
      contentId,
      floatingRefs: refs,
      floatingStyles,
      closeOnSelect,
    }),
    [open, triggerId, contentId, refs, floatingStyles, closeOnSelect],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();

        setOpen(false);

        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const handleMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (contentRef.current?.contains(target) || triggerRef.current?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>;
}

export default DropdownRoot;
