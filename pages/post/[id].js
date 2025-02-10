import { useRouter } from "next/router";
import { useContext } from "react";
import { PostContext } from "@/context/PostContext";
import styles from "@/styles/Post.module.scss";
import Link from "next/link";
import { fetchPosts } from "@/lib/FetchPosts";
import stylesHome from "@/styles/Home.module.css";

export async function getServerSideProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { posts } = useContext(PostContext);

  const post = posts.find((p) => p._id === id);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className={stylesHome.card} style={{ width: "60rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.content}</h5>
          <p className="card-text">{post.data}</p>
          <Link href="/" className={styles.button}>
            Indietro
          </Link>
        </div>
      </div>
    </div>
  );
}
