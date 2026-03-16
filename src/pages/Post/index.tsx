import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "@/components/Button";
import Container from "@/components/Container";
import PostAuthor from "@/components/PostAuthor";
import { getPostById } from "@/services/posts";
import type { Post } from "@/types/Post";
import styles from "./index.module.scss";

function PostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  const handleClickBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!id) return;

    getPostById(id).then((post) => {
      setPost(post);
    });
  }, [id]);

  return (
    <div className={styles["post-page"]}>
      <div>
        <Container>
          <Button onClick={handleClickBack} variant="outline">
            <Icon icon="mdi:arrow-left" />
            Back
          </Button>
        </Container>
      </div>

      <article>
        <Container>
          {post && (
            <>
              <h1 className={styles["post-page-heading"]}>{post.title}</h1>

              <PostAuthor author={post.author} date={post.createdAt} />

              <div className={styles["post-page-image-container"]}>
                <img
                  src={post.thumbnail_url}
                  alt=""
                  width={1248}
                  height={702}
                  loading="lazy"
                  decoding="async"
                  className={styles["post-page-image"]}
                />
              </div>

              <div className={styles["post-page-content"]}>{post.content}</div>
            </>
          )}
        </Container>
      </article>
    </div>
  );
}

export default PostPage;
