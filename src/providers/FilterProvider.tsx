import { parseAsArrayOf, parseAsString, parseAsStringEnum, useQueryState } from "nuqs";
import { createContext, useContext } from "react";
import { Order } from "@/enums/Order";

export type FilterContextValue = {
  searchFilter: string;
  setSearchFilter: (search: string) => void;
  categoriesFilter: string[];
  setCategoriesFilter: (categories: string[]) => void;
  authorsFilter: string[];
  setAuthorsFilter: (authors: string[]) => void;
  filterOrderBy: string;
  setFilterOrderBy: (orderBy: string) => void;
  filterOrder: Order;
  setFilterOrder: (order: Order) => void;
};

export const FilterContext = createContext<FilterContextValue | null>(null);

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilterContext must be used inside <FilterProvider />");
  }

  return context;
}

function FilterProvider({ children }: { children: React.ReactNode }) {
  const [searchFilter, setSearchFilter] = useQueryState("search", parseAsString.withDefault(""));
  const [categoriesFilter, setCategoriesFilter] = useQueryState(
    "categories",
    parseAsArrayOf(parseAsString).withDefault([]),
  );
  const [authorsFilter, setAuthorsFilter] = useQueryState("authors", parseAsArrayOf(parseAsString).withDefault([]));
  const [filterOrderBy, setFilterOrderBy] = useQueryState("orderBy", parseAsString.withDefault("createdAt"));
  const [filterOrder, setFilterOrder] = useQueryState(
    "order",
    parseAsStringEnum([Order.Asc, Order.Desc]).withDefault(Order.Desc),
  );

  return (
    <FilterContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        categoriesFilter,
        setCategoriesFilter,
        authorsFilter,
        setAuthorsFilter,
        filterOrderBy,
        setFilterOrderBy,
        filterOrder,
        setFilterOrder,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
