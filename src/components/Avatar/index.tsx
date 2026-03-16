import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./index.module.scss";

export type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src: string;
  fallback: string;
};

function Avatar({ src, fallback, className, ...props }: AvatarProps) {
  return (
    <div className={clsx(styles["avatar"], className)} {...props}>
      {src ? (
        <img src={src} alt={fallback} loading="lazy" decoding="async" className={styles["avatar-image"]} />
      ) : (
        <span>{fallback}</span>
      )}
    </div>
  );
}

export default Avatar;
