import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PostContext } from '@/context/PostContext';

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { posts } = useContext(PostContext);

  const post = posts.find(p => p._id === id);
  
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="card" style={{ width: "60rem" }}>
        <div className="card-body">
          <h5 className="card-title">{ post.content }</h5>
          <p className="card-text">{ post.data }</p>
          <a href="/" className="btn btn-primary">
            Indietro
          </a>
        </div>
      </div>
    </div>
  );
}
