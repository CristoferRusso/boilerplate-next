import { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children, posts }) => {
  return (
    <PostContext.Provider value={{ posts: posts || [] }}>
      {children}
    </PostContext.Provider>
  );
};
