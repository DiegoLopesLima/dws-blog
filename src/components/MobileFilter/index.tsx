import AuthorCombobox from "../AuthorCombobox";
import CategoryCombobox from "../CategoryCombobox";
import OrderByButton from "../OrderByButton";
import styles from "./index.module.scss";

function MobileFilter() {
  return (
    <div className={styles["mobile-filter"]}>
      <CategoryCombobox />

      <AuthorCombobox />

      <OrderByButton />
    </div>
  );
}

export default MobileFilter;
