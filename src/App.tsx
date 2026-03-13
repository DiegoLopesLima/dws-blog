import { useEffect } from "react";
import { getPosts } from "@/services/posts";

function App() {
  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
    });
  }, []);

  return <div className="hello">Hello World!</div>;
}

export default App;
