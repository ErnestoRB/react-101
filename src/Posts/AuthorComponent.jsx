import StoryComponent from "../Stories/StoryComponent";
import { getRelativeDate } from "../utils/date";
import "./Author.css";

export default function AuthorComponent({
  author = {
    name: "Ernesto Ramírez",
    username: "ernestorb",
    url: "https://avatars.githubusercontent.com/u/55329286?v=4",
  },
  postDate = new Date("2002-05-23"),
}) {
  return (
    <div className="Post-Author">
      <StoryComponent showName={false} size={32}></StoryComponent>
      <span>{author?.username}</span>•
      <span className="date">{getRelativeDate(postDate)}</span>
    </div>
  );
}
