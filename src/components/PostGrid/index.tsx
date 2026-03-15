import type { HTMLAttributes } from "react";
import InlinePost from "@/components/InlinePost";
import type { Post } from "@/types/post";
import styles from "./index.module.scss";

type PostGridProps = HTMLAttributes<HTMLDivElement> & {
  posts: Post[];
};

function PostGrid({ posts, ...props }: PostGridProps) {
  return (
    <div className={styles["post-grid"]} {...props}>
      {posts.map((post) => (
        <InlinePost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostGrid;
