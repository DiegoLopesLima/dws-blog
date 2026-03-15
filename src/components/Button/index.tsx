import { clsx } from "clsx";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import styles from "./index.module.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  block?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, variant = "primary", block = false, ...props }: ButtonProps,
  ref,
) {
  return (
    <button
      type="button"
      ref={ref}
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
});

export default Button;
