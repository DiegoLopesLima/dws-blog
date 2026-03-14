import type { Category } from "@/types/category";
import styles from "./index.module.scss";

type CategoryBadgeProps = {
  category: Category;
};

function CategoryBadge({ category }: CategoryBadgeProps) {
  return <div className={styles["category-badge"]}>{category.name}</div>;
}

export default CategoryBadge;
