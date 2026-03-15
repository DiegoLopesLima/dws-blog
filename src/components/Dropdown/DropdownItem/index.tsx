import { clsx } from "clsx";
import type { ButtonHTMLAttributes, KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useDropdownContext } from "../DropdownContext";
import styles from "./index.module.scss";

type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function DropdownItem({ children, className, onClick, ...props }: DropdownItemProps) {
  const { triggerRef, setOpen, closeOnSelect } = useDropdownContext();

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        const isFirstButtonFocused =
          document.activeElement === event.currentTarget.parentElement?.querySelector("button");

        if (isFirstButtonFocused) {
          event.preventDefault();

          setOpen(false);

          triggerRef.current?.focus();
        }
      } else {
        const isLastButtonFocused =
          document.activeElement === event.currentTarget.parentElement?.querySelector("button:last-child");

        if (isLastButtonFocused) {
          event.preventDefault();

          setOpen(false);

          triggerRef.current?.focus();
        }
      }
    }
  };
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented && closeOnSelect) {
      setOpen(false);

      triggerRef.current?.focus();
    }
  };

  return (
    <button
      type="button"
      className={clsx(styles["dropdown-item"], className)}
      role="menuitem"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default DropdownItem;
