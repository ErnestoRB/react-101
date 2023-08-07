import usePosts from "../hooks/usePosts";
import "./Feed.css";
import PostComponent from "./PostComponent";

export default function FeedComponent() {
  const { posts } = usePosts();
  
  return (
    <div className="Feed">
      {posts.map((post, i) => (
        <PostComponent key={i} post={post}></PostComponent>
      ))}
    </div>
  );
}
