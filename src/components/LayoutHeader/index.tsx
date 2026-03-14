import { clsx } from "clsx";
import { NavLink } from "react-router";
import layoutHeaderLogo from "@/assets/images/layout-header-logo.png";
import Container from "@/components/Container";
import SearchField from "@/components/SearchField";
import { useUserInterfaceStore } from "@/stores/user-interface/user-interface.store";
import styles from "./index.module.scss";

function LayoutHeader() {
  const isSearchFieldOpen = useUserInterfaceStore((state) => state.isSearchFieldOpen);

  return (
    <header
      className={clsx(styles["layout-header"], {
        [styles["layout-header-search-open"]]: isSearchFieldOpen,
      })}
    >
      <Container className={styles["layout-header-container"]}>
        <NavLink to="/" className={styles["layout-header-logo-link"]}>
          <img
            src={layoutHeaderLogo}
            alt="Dentsu World Services logo"
            className={styles["layout-header-logo"]}
            loading="lazy"
            decoding="async"
            width={186}
            height={21}
          />
        </NavLink>

        <SearchField />
      </Container>
    </header>
  );
}

export default LayoutHeader;
