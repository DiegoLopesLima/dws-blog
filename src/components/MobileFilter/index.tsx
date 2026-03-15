import AuthorCombobox from "../AuthorCombobox";
import CategoryCombobox from "../CategoryCombobox";
import styles from "./index.module.scss";

function MobileFilter() {
  return (
    <div className={styles["mobile-filter"]}>
      <CategoryCombobox />

      <AuthorCombobox />
    </div>
  );
}

export default MobileFilter;
