import IconComponent from "../../IconComponent";
import UserImageComponent from "../../User/UserImageComponent";
import "./Comment.css";

export default function CommentComponent({ comment }) {
  return (
    <div className="Comment">
      <div className="image">
        <UserImageComponent
          src={comment.author.picture.thumbnail}
          size={24}
        ></UserImageComponent>
      </div>
      <div className="content">
        <b>{comment.author.username}</b>
        {comment.text}
      </div>
      <div className="actions">
        <span>Me gusta</span>
        <span>Responder</span>
      </div>
      <div className="like">
        <IconComponent icono="favorite"></IconComponent>
      </div>
    </div>
  );
}
