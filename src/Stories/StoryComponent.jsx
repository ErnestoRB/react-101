import UserImageComponent from "../User/UserImageComponent";
import "./Story.css";
export default function StoryComponent({
  author = {
    name: "Ernesto Ramírez",
    username: "ernestorb",
    url: "https://avatars.githubusercontent.com/u/55329286?v=4",
  },
  isClose = false,
  showName = true,
  size = 64,
}) {
  return (
    <div className="Story-Wrapper">
      <div className={`Story ${isClose ? "border-close" : "border-normal"}`}>
        <UserImageComponent src={author.url} size={size}></UserImageComponent>
      </div>
      {showName && <span>{author?.username}</span>}
    </div>
  );
}
