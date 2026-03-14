import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { useRef } from "react";
import { useUserInterfaceStore } from "@/stores/user-interface/user-interface.store";
import styles from "./index.module.scss";

function SearchField() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isSearchFieldOpen = useUserInterfaceStore((state) => state.isSearchFieldOpen);
  const setIsSearchFieldOpen = useUserInterfaceStore((state) => state.setIsSearchFieldOpen);

  const handleClickButton = () => {
    inputRef.current?.focus();
  };
  const handleFocusInput = () => {
    setIsSearchFieldOpen(true);
  };
  const handleBlurInput = () => {
    setIsSearchFieldOpen(false);
  };

  return (
    <div
      className={clsx(styles["search-field"], {
        [styles["search-field-open"]]: isSearchFieldOpen,
      })}
    >
      <input
        type="search"
        placeholder="Search"
        inputMode="search"
        className={styles["search-field-input"]}
        ref={inputRef}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        name="search"
      />

      <button type="button" className={styles["search-field-button"]} onClick={handleClickButton}>
        <Icon icon="mdi:search" className={styles["search-field-button-icon"]} />
      </button>
    </div>
  );
}

export default SearchField;
