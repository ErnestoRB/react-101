import UserImageComponent from "../User/UserImageComponent";
import "./Story.css";
export default function StoryComponent({
  author,
  isClose = false,
  showName = true,
  size = 64,
}) {
  return (
    <div className="Story-Wrapper">
      <div className={`Story ${isClose ? "border-close" : "border-normal"}`}>
        <UserImageComponent
          src={author.picture.large}
          size={size}
        ></UserImageComponent>
      </div>
      {showName && <span>{author?.username}</span>}
    </div>
  );
}
