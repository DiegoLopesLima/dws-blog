import { clsx } from "clsx";
import type { HTMLAttributes } from "react";
import { dateFormatter } from "@/formatters/time";
import type { Author } from "@/types/Author";
import Avatar from "../Avatar";
import styles from "./index.module.scss";

export type PostAuthorProps = HTMLAttributes<HTMLDivElement> & {
  author: Author;
  date: string;
};

function PostAuthor({ author, date, className, ...props }: PostAuthorProps) {
  const fallback = author.name.charAt(0).toUpperCase();
  const formattedDate = dateFormatter.format(new Date(date));

  return (
    <div className={clsx(styles["post-author"], className)} {...props}>
      <Avatar src={author.profilePicture} fallback={fallback} />

      <div className={styles["post-author-content"]}>
        <div className={styles["post-author-name"]}>
          <span className={styles["post-author-name-label"]}>Written by:</span>

          <span className={styles["post-author-name-value"]}>{author.name}</span>
        </div>

        <time dateTime={date} className={styles["post-author-date"]}>
          {formattedDate}
        </time>
      </div>
    </div>
  );
}

export default PostAuthor;
