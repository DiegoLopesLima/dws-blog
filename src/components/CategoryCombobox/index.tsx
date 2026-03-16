import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import { getCategories } from "@/services/categories";
import Combobox, { type ComboboxOption } from "../Combobox";

function CategoryCombobox() {
  const { categoriesFilter, setCategoriesFilter } = useFilterContext();
  const { isPending, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  const label = isPending ? "Loading..." : "Category";
  const parsedCategoriesFilter = useMemo(() => {
    if (categories?.length === 0) return [];

    return categoriesFilter.map((categoryId) => {
      const category = categories?.find(({ id }) => id === categoryId);

      return {
        label: category?.name as string,
        value: category?.id as string,
      };
    });
  }, [categoriesFilter, categories]);

  const handleChange = (selectedCategories: ComboboxOption[]) => {
    setCategoriesFilter(selectedCategories.map((category) => category.value as string));
  };

  const options = useMemo(() => {
    return (
      categories?.map((category) => ({
        label: category.name,
        value: category.id,
      })) ?? []
    );
  }, [categories]);

  return <Combobox label={label} options={options} value={parsedCategoriesFilter} onChange={handleChange} />;
}

export default CategoryCombobox;
