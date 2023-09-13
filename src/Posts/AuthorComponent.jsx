import StoryComponent from "../Stories/StoryComponent";
import { getRelativeDate } from "../utils/date";
import "./Author.css";

export default function AuthorComponent({ author, postDate }) {
  return (
    <div className="Post-Author">
      <StoryComponent
        author={author}
        showName={false}
        size={32}
      ></StoryComponent>
      <span>{author?.username}</span>•
      <span className="date">{getRelativeDate(postDate)}</span>
    </div>
  );
}
