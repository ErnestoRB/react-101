import PicturesComponent from "../../Posts/PicturesComponent";
import UserImageComponent from "../../User/UserImageComponent";
import CommentsComponent from "../../Posts/Comments/CommentsComponent";
import "./PostOverlay.css";

export function PostOverlayComponent({ post }) {
  return (
    <div className="Post-Overlay">
      <div className="Post-Overlay-Left">
        <PicturesComponent pictures={post.fotos}></PicturesComponent>
      </div>
      <div className="Post-Overlay-Right">
        <div className="Post-Overlay-Name">
          <UserImageComponent
            src={post.author.picture.thumbnail}
          ></UserImageComponent>
          {post.author.username}
        </div>
        <hr />
        <div className="Post-Overlay-Comments">
          <CommentsComponent comments={post.comments}></CommentsComponent>
        </div>
      </div>
    </div>
  );
}
