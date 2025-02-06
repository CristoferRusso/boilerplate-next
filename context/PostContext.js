import { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children, posts }) => {
  const [postData, setPostData] = useState(posts || []);

  return (
    <PostContext.Provider value={{ posts: postData }}>
      {children}
    </PostContext.Provider>
  );
};
