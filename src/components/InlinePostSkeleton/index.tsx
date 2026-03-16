import { clsx } from "clsx";
import styles from "./index.module.scss";

function InlinePostSkeleton() {
  return (
    <div className={styles["inline-post-skeleton"]}>
      <div className={styles["inline-post-skeleton-thumbnail"]} />

      <div className={styles["inline-post-skeleton-caption"]}>
        <div className={clsx(styles["inline-post-skeleton-line"], styles["inline-post-skeleton-line-short"])} />
        <div className={styles["inline-post-skeleton-dot"]} />

        <div className={clsx(styles["inline-post-skeleton-line"], styles["inline-post-skeleton-line-medium"])} />
      </div>

      <div className={styles["inline-post-skeleton-title"]} />

      <div className={styles["inline-post-skeleton-content"]}>
        <div className={styles["inline-post-skeleton-line"]} />

        <div className={clsx(styles["inline-post-skeleton-line"], styles["inline-post-skeleton-line-partial"])} />
      </div>

      <div className={styles["inline-post-skeleton-categories"]}>
        <div className={styles["inline-post-skeleton-badge"]} />

        <div className={styles["inline-post-skeleton-badge"]} />
      </div>
    </div>
  );
}

export default InlinePostSkeleton;
