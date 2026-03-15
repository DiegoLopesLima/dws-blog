import type { HTMLAttributes } from "react";
import type { Category } from "@/types/category";
import styles from "./index.module.scss";

export type CategoryBadgeProps = HTMLAttributes<HTMLDivElement> & {
  category: Category;
};

function CategoryBadge({ category, ...props }: CategoryBadgeProps) {
  return (
    <div className={styles["category-badge"]} {...props}>
      {category.name}
    </div>
  );
}

export default CategoryBadge;
