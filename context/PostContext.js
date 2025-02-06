import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/getSanityData");
        const data = await response.json();
        setPosts(data.result);
      } catch (error) {
        console.error("Errore nel recupero dei post:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>
      {children}
    </PostContext.Provider>
  );
}
