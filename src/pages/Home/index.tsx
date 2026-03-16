import { deburr } from "lodash";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import HorizontalFilter from "@/components/HorizontalFilter";
import PostGrid from "@/components/PostGrid";
import VerticalFilter from "@/components/VerticalFilter";
import { useFilterContext } from "@/providers/FilterProvider";
import { getPosts } from "@/services/posts";
import type { Post } from "@/types/Post";
import styles from "./index.module.scss";

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { searchFilter, categoriesFilter, authorsFilter, filterOrderBy, filterOrder } = useFilterContext();
  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) =>
        deburr(`${post.title} ${post.content}`).toLowerCase().includes(deburr(searchFilter).toLowerCase()),
      )
      .filter(
        (post) =>
          categoriesFilter.length === 0 || post.categories.some((category) => categoriesFilter.includes(category.id)),
      )
      .filter((post) => authorsFilter.length === 0 || authorsFilter.includes(post.authorId))
      .sort((a, b) => {
        switch (filterOrderBy) {
          case "createdAt": {
            const timeA = new Date(a.createdAt).getTime();
            const timeB = new Date(b.createdAt).getTime();

            return filterOrder === "asc" ? timeA - timeB : timeB - timeA;
          }
        }

        return 0;
      });
  }, [posts, searchFilter, categoriesFilter, authorsFilter, filterOrder, filterOrderBy]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className={styles["home-page"]}>
      <Container>
        <HorizontalFilter />
      </Container>

      <Container className={styles["home-page-container"]}>
        <VerticalFilter />

        <main>
          <PostGrid posts={filteredPosts} />
        </main>
      </Container>
    </div>
  );
}

export default HomePage;
