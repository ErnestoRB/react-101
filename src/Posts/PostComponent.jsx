import ActionsComponent from "./ActionsComponent";
import AuthorComponent from "./AuthorComponent";
import CommentsComponent from "./Comments/CommentsComponent";
import PicturesComponent from "./PicturesComponent";
import "./Post.css";

export default function PostComponent({ post }) {
  return (
    <article className="Post">
      <AuthorComponent
        author={post.author}
        postDate={post.date}
      ></AuthorComponent>
      <PicturesComponent pictures={post.fotos}></PicturesComponent>
      <ActionsComponent></ActionsComponent>
      <CommentsComponent comments={post.comments}></CommentsComponent>
    </article>
  );
}
