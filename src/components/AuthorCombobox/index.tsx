import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import { getAuthors } from "@/services/authors";
import Combobox, { type ComboboxOption } from "../Combobox";

function AuthorCombobox() {
  const { authorsFilter, setAuthorsFilter } = useFilterContext();
  const {
    isPending,
    error: authorsError,
    data: authors,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: () => getAuthors(),
  });
  const label = isPending ? "Loading..." : "Author";
  const parsedAuthorsFilter = useMemo(() => {
    if (authors?.length === 0) return [];

    return authorsFilter.map((authorId) => {
      const author = authors?.find(({ id }) => id === authorId);

      return {
        label: author?.name as string,
        value: author?.id as string,
      };
    });
  }, [authorsFilter, authors]);

  const handleChange = (selectedAuthors: ComboboxOption[]) => {
    setAuthorsFilter(selectedAuthors.map((author) => author.value as string));
  };

  const options = useMemo(() => {
    return (
      authors?.map((author) => ({
        label: author.name,
        value: author.id,
      })) ?? []
    );
  }, [authors]);

  if (authorsError) {
    return null;
  }

  return <Combobox label={label} options={options} value={parsedAuthorsFilter} onChange={handleChange} />;
}

export default AuthorCombobox;
