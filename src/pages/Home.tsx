import { useEffect, useState } from "react";
import PostGrid from "@/components/PostGrid";
import { getPosts } from "@/services/posts";
import type { Post } from "@/types/post";

function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return <PostGrid posts={posts} />;
}

export default HomePage;
