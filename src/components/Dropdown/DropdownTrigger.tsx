import { useMergeRefs } from "@floating-ui/react";
import type { ReactNode } from "react";
import Button, { type ButtonProps } from "@/components/Button";
import { useDropdownContext } from "./DropdownContext";

type DropdownTriggerProps = {
  children: ReactNode;
  variant?: ButtonProps["variant"];
};

function DropdownTrigger({ children, variant }: DropdownTriggerProps) {
  const { open, setOpen, triggerRef, triggerId, floatingRefs, contentId } = useDropdownContext();
  const mergedRefs = useMergeRefs([triggerRef, floatingRefs.setReference]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Button
      id={triggerId}
      onClick={handleClick}
      ref={mergedRefs}
      aria-haspopup="menu"
      aria-expanded={open}
      aria-controls={contentId}
      variant={variant}
    >
      {children}
    </Button>
  );
}

export default DropdownTrigger;
