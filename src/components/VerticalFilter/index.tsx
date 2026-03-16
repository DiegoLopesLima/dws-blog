import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import { getAuthors } from "@/services/authors";
import { getCategories } from "@/services/categories";
import type { Author } from "@/types/Author";
import type { Category } from "@/types/Category";
import Button from "../Button";
import styles from "./index.module.scss";

function VerticalFilter() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<Author[]>([]);
  const { categoriesFilter, authorsFilter, setCategoriesFilter, setAuthorsFilter } = useFilterContext();

  const parsedCategoriesFilter = useMemo(() => {
    if (categories.length === 0) return [];

    return categoriesFilter.map((categoryId) => {
      const category = categories.find(({ id }) => id === categoryId);

      return {
        label: category?.name as string,
        value: category?.id as string,
      };
    });
  }, [categoriesFilter, categories]);

  const parsedAuthorsFilter = useMemo(() => {
    if (authors.length === 0) return [];

    return authorsFilter.map((authorId) => {
      const author = authors.find(({ id }) => id === authorId);

      return {
        label: author?.name as string,
        value: author?.id as string,
      };
    });
  }, [authorsFilter, authors]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    getAuthors().then((authors) => {
      setAuthors(authors);
    });
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategories(
        parsedCategoriesFilter.map((category) => categories.find(({ id }) => id === category.value) as Category),
      );
    }
  }, [categories.length, parsedCategoriesFilter, categories]);

  useEffect(() => {
    if (authors.length > 0) {
      setSelectedAuthors(parsedAuthorsFilter.map((author) => authors.find(({ id }) => id === author.value) as Author));
    }
  }, [authors.length, parsedAuthorsFilter, authors]);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategories((state) =>
      state.includes(category)
        ? state.filter((selectedCategory) => selectedCategory.id !== category.id)
        : [...state, category],
    );
  };

  const handleSelectAuthor = (author: Author) => {
    setSelectedAuthors((state) =>
      state.includes(author) ? state.filter((selectedAuthor) => selectedAuthor.id !== author.id) : [...state, author],
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
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={clsx(styles["vertical-filter-box-options-list-item"], {
                  [styles["vertical-filter-box-options-list-item-selected"]]: selectedCategories.includes(category),
                })}
                onClick={() => handleSelectCategory(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles["vertical-filter-box-options"]}>
          <h3 className={styles["vertical-filter-box-options-title"]}>Author</h3>

          <div className={styles["vertical-filter-box-options-list"]}>
            {authors.map((author) => (
              <button
                type="button"
                key={author.id}
                className={clsx(styles["vertical-filter-box-options-list-item"], {
                  [styles["vertical-filter-box-options-list-item-selected"]]: selectedAuthors.includes(author),
                })}
                onClick={() => handleSelectAuthor(author)}
              >
                {author.name}
              </button>
            ))}
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
