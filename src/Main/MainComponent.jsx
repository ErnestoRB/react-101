import FeedComponent from "../Posts/FeedComponent";
import MiniProfileComponent from "../Side/MiniProfileComponent";
import StoriesComponent from "../Stories/StoriesComponent";
import "./Main.css";

export default function MainComponent() {
  return (
    <main>
      <div className="content">
        <StoriesComponent stories={Array(10).fill({})}></StoriesComponent>
        <FeedComponent></FeedComponent>
      </div>
      <div className="side">
        <MiniProfileComponent></MiniProfileComponent>
      </div>
    </main>
  );
}
