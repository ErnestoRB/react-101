import { useContext } from "react";
import { API_URL } from "../../utils/api";
import "./PostsGrid.css";
import { OverlayContext } from "../../contexts/OverlayContext";
import { PostOverlayComponent } from "../../Overlay/PostOverlay/PostOverlayComponent";

export function PostsGrid({ posts = [] }) {
  const { setOverlayComponent } = useContext(OverlayContext);

  return (
    <div className="Posts-Grid">
      {posts.map((post) => (
        <div className="Posts-Preview">
          <img
            src={`${API_URL}${post.fotos[0]}`}
            alt=""
            onClick={() =>
              setOverlayComponent(
                <PostOverlayComponent post={post}></PostOverlayComponent>
              )
            }
          />
        </div>
      ))}
    </div>
  );
}
