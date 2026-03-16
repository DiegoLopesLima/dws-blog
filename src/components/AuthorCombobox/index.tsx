import { useEffect, useMemo, useState } from "react";
import { useFilterContext } from "@/providers/FilterProvider";
import { getAuthors } from "@/services/authors";
import type { Author } from "@/types/Author";
import Combobox, { type ComboboxOption } from "../Combobox";

function AuthorCombobox() {
  const { authorsFilter, setAuthorsFilter } = useFilterContext();
  const [authors, setAuthors] = useState<Author[]>([]);
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
  const [selectedAuthors, setSelectedAuthors] = useState<ComboboxOption[]>([]);

  useEffect(() => {
    getAuthors().then((authors) => {
      setAuthors(authors);
    });
  }, []);

  useEffect(() => {
    if (authors.length > 0) {
      setSelectedAuthors(parsedAuthorsFilter);
    }
  }, [authors.length, parsedAuthorsFilter]);

  const handleChange = (selectedAuthors: ComboboxOption[]) => {
    setSelectedAuthors(selectedAuthors);
    setAuthorsFilter(selectedAuthors.map((author) => author.value as string));
  };

  const options = useMemo(() => {
    return authors.map((author) => ({
      label: author.name,
      value: author.id,
    }));
  }, [authors]);

  return <Combobox label="Author" options={options} value={selectedAuthors} onChange={handleChange} />;
}

export default AuthorCombobox;
