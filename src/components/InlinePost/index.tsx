import type { HTMLAttributes } from "react";
import { NavLink } from "react-router";
import CategoryBadge from "@/components/CategoryBadge";
import { dateFormatter } from "@/formatters/time";
import type { Post } from "@/types/Post";
import styles from "./index.module.scss";

type InlinePostProps = HTMLAttributes<HTMLDivElement> & {
  post: Post;
};

function InlinePost({ post, ...props }: InlinePostProps) {
  const navTo = `/${post.id}`;
  const formattedDate = dateFormatter.format(new Date(post.createdAt));

  return (
    <div className={styles["inline-post"]} {...props}>
      <NavLink to={navTo} className={styles["inline-post-thumbnail-link"]}>
        <img
          src={post.thumbnail_url}
          alt=""
          className={styles["inline-post-thumbnail"]}
          loading="lazy"
          decoding="async"
        />
      </NavLink>

      <div className={styles["inline-post-caption"]}>
        <div>
          <span className="sr-only">Published on</span>

          <time dateTime={post.createdAt} className={styles["inline-post-date"]}>
            {formattedDate}
          </time>
        </div>

        <div>
          <span className="sr-only">By</span>

          <span className={styles["inline-post-author"]}>{post.author.name}</span>
        </div>
      </div>

      <h3 className={styles["inline-post-title"]}>
        <NavLink to={navTo} className={styles["inline-post-title-link"]}>
          {post.title}
        </NavLink>
      </h3>

      <div className={styles["inline-post-content"]}>{post.content}</div>

      <div className={styles["inline-post-categories"]}>
        {post.categories.map((category) => (
          <CategoryBadge key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default InlinePost;
