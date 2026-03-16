import AuthorCombobox from "../AuthorCombobox";
import CategoryCombobox from "../CategoryCombobox";
import OrderByButton from "../OrderByButton";
import styles from "./index.module.scss";

function HorizontalFilter() {
  return (
    <aside className={styles["horizontal-filter"]}>
      <div className={styles["horizontal-filter-filters"]}>
        <CategoryCombobox />

        <AuthorCombobox />
      </div>

      <div className={styles["horizontal-filter-title"]}>DWS Blog</div>

      <OrderByButton />
    </aside>
  );
}

export default HorizontalFilter;
