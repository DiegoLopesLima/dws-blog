import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import { getAuthors } from "@/services/authors";
import { getCategories } from "@/services/categories";
import type { Author } from "@/types/Author";
import type { Category } from "@/types/Category";
import Button from "../Button";
import styles from "./index.module.scss";

function VerticalFilter() {
  const { isPending: isCategoriesPending, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const { isPending: isAuthorsPending, data: authors } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getAuthors(),
  });
  const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);
  const { categoriesFilter, authorsFilter, setCategoriesFilter, setAuthorsFilter } = useFilterContext();

  useEffect(() => {
    if (categories?.length && categories?.length > 0) {
      setSelectedCategories(categories?.filter((category) => categoriesFilter.includes(category.id)));
    }
  }, [categories?.length, categoriesFilter, categories]);

  useEffect(() => {
    if (authors?.length && authors?.length > 0) {
      setSelectedAuthors(authors.filter((author) => authorsFilter.includes(author.id)));
    }
  }, [authors?.length, authorsFilter, authors]);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategories((state) =>
      state.some((selectedCategory) => selectedCategory.id === category.id)
        ? state.filter((selectedCategory) => selectedCategory.id !== category.id)
        : [...state, category],
    );
  };

  const handleSelectAuthor = (author: Author) => {
    setSelectedAuthors((state) =>
      state.some((selectedAuthor) => selectedAuthor.id === author.id)
        ? state.filter((selectedAuthor) => selectedAuthor.id !== author.id)
        : [...state, author],
    );
  };

  const handleApplyFilters = () => {
    setCategoriesFilter(selectedCategories.map((category) => category.id));
    setAuthorsFilter(selectedAuthors.map((author) => author.id));
  };

  return (
    <aside className={styles["vertical-filter"]}>
      <div className={styles["vertical-filter-box"]}>
        <header className={styles["vertical-filter-box-header"]}>
          <h2 className={styles["vertical-filter-box-title"]}>
            <Icon icon="mage:filter" /> Filters
          </h2>
        </header>

        <div className={styles["vertical-filter-box-options"]}>
          <h3 className={styles["vertical-filter-box-options-title"]}>Category</h3>

          <div className={styles["vertical-filter-box-options-list"]}>
            {isCategoriesPending ? (
              <div>Loading...</div>
            ) : (
              categories?.map((category) => (
                <button
                  type="button"
                  key={category.id}
                  className={clsx(styles["vertical-filter-box-options-list-item"], {
                    [styles["vertical-filter-box-options-list-item-selected"]]: selectedCategories.some(
                      (selectedCategory) => selectedCategory.id === category.id,
                    ),
                  })}
                  onClick={() => handleSelectCategory(category)}
                >
                  {category.name}
                </button>
              ))
            )}
          </div>
        </div>

        <div className={styles["vertical-filter-box-options"]}>
          <h3 className={styles["vertical-filter-box-options-title"]}>Author</h3>

          <div className={styles["vertical-filter-box-options-list"]}>
            {isAuthorsPending ? (
              <div>Loading...</div>
            ) : (
              authors?.map((author) => (
                <button
                  type="button"
                  key={author.id}
                  className={clsx(styles["vertical-filter-box-options-list-item"], {
                    [styles["vertical-filter-box-options-list-item-selected"]]: selectedAuthors.some(
                      (selectedAuthor) => selectedAuthor.id === author.id,
                    ),
                  })}
                  onClick={() => handleSelectAuthor(author)}
                >
                  {author.name}
                </button>
              ))
            )}
          </div>
        </div>

        <Button block onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}

export default VerticalFilter;
