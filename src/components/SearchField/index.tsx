import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useDebounceValue } from "usehooks-ts";
import { HALF_SECOND_IN_MILLISECONDS } from "@/contants/time";
import { useFilterContext } from "@/providers/FilterProvider";
import { useUserInterfaceStore } from "@/stores/user-interface/user-interface.store";
import styles from "./index.module.scss";

function SearchField() {
  const inputRef = useRef<HTMLInputElement>(null);
  const isSearchFieldOpen = useUserInterfaceStore((state) => state.isSearchFieldOpen);
  const setIsSearchFieldOpen = useUserInterfaceStore((state) => state.setIsSearchFieldOpen);
  const { searchFilter, setSearchFilter } = useFilterContext();
  const [search, setSearch] = useState(searchFilter ?? "");
  const [debouncedSearch] = useDebounceValue(search, HALF_SECOND_IN_MILLISECONDS);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleClickButton = () => {
    inputRef.current?.focus();
  };
  const handleFocusInput = () => {
    setIsSearchFieldOpen(true);
  };
  const handleBlurInput = () => {
    setIsSearchFieldOpen(false);
  };

  useEffect(() => {
    if (isHomePage) {
      setSearchFilter(debouncedSearch);
    } else if (debouncedSearch.length > 0) {
      navigate("/")?.then(() => {
        setSearchFilter(debouncedSearch);
      });
    }
  }, [debouncedSearch, setSearchFilter, isHomePage, navigate]);

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
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button type="button" className={styles["search-field-button"]} onClick={handleClickButton}>
        <Icon icon="mdi:search" className={styles["search-field-button-icon"]} />
      </button>
    </div>
  );
}

export default SearchField;
