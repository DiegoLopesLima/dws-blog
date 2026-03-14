import { clsx } from "clsx";
import type { ReactNode } from "react";
import styles from "./index.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return <div className={clsx(styles["container"], className)}>{children}</div>;
}

export default Container;
