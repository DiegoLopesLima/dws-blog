import InlinePostSkeleton from "@/components/InlinePostSkeleton";
import styles from "./index.module.scss";

function PostGridSkeleton() {
  return (
    <div className={styles["post-grid-skeleton"]}>
      <InlinePostSkeleton />

      <InlinePostSkeleton />

      <InlinePostSkeleton />
    </div>
  );
}

export default PostGridSkeleton;
