import { createContext } from "react";

const POstList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer();
  const addPOst = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
