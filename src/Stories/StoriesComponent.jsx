import StoryComponent from "./StoryComponent";
import "./Stories.css";
export default function StoriesComponent({ stories = [] }) {
  return (
    <div className="Stories">
      {stories.map((story) => (
        <StoryComponent isClose={false}></StoryComponent>
      ))}
    </div>
  );
}
