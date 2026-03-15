import { useMergeRefs } from "@floating-ui/react";
import { clsx } from "clsx";
import { type ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDropdownContext } from "../DropdownContext";
import styles from "./index.module.scss";

type DropdownContentProps = {
  children: ReactNode;
};

function DropdownContent({ children }: DropdownContentProps) {
  const { open, contentRef, contentId, triggerId, floatingRefs, floatingStyles } = useDropdownContext();
  const mergedRefs = useMergeRefs([contentRef, floatingRefs.setFloating]);

  useEffect(() => {
    if (open) {
      contentRef.current?.querySelector<HTMLButtonElement>("[role='menuitem']")?.focus();
    }
  }, [open, contentRef.current]);

  return createPortal(
    <div
      className={clsx(styles["dropdown-content"], {
        [styles["dropdown-content-open"]]: open,
      })}
      ref={mergedRefs}
      style={floatingStyles}
      id={contentId}
      role="menu"
      aria-labelledby={triggerId}
    >
      {children}
    </div>,
    document.body,
  );
}

export default DropdownContent;
