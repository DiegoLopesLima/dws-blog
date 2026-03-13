import { useEffect, useState } from "react";
import { getPosts } from "@/services/posts";
import type { Post } from "./types/post";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
