import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./index.module.scss";

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(styles["container"], className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
