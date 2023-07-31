import ActionsComponent from "./ActionsComponent";
import AuthorComponent from "./AuthorComponent";
import CommentsComponent from "./Comments/CommentsComponent";
import PicturesComponent from "./PicturesComponent";
import "./Post.css";

export default function PostComponent({ post }) {
  return (
    <article className="Post">
      <AuthorComponent></AuthorComponent>
      <PicturesComponent></PicturesComponent>
      <ActionsComponent></ActionsComponent>
      <CommentsComponent></CommentsComponent>
    </article>
  );
}
