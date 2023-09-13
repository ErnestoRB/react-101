import useStories from "../hooks/useStories";
import StoryComponent from "./StoryComponent";
import "./Stories.css";
export default function StoriesComponent() {
  const { stories } = useStories();
  const getRandomBoolean = () => Math.round(Math.random()) === 1;

  return (
    <div className="Stories-Wrapper">
      <div className="Stories">
        {stories.map((story, i) =>(
          <StoryComponent author={story.author} key={i} isClose={getRandomBoolean()}></StoryComponent>
        ))}
      </div>
    </div>
  );
}
