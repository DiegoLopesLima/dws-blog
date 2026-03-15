import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./index.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  block?: boolean;
};

function Button({ children, className, variant = "primary", block = false, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        styles["button"],
        styles[`button-variant-${variant}`],
        {
          [styles["button-block"]]: block,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
