import FeedComponent from "../Posts/FeedComponent";
import MiniProfileComponent from "../Side/MiniProfileComponent";
import StoriesComponent from "../Stories/StoriesComponent";
import SuggestionsComponent from "../Side/SuggestionsComponent";
import FooterComponent from "../Side/FooterComponent";
import "./Main.css";

export default function MainComponent() {
  return (
    <main>
      <div className="content">
        <StoriesComponent></StoriesComponent>
        <FeedComponent></FeedComponent>
        <FooterComponent></FooterComponent>
      </div>
      <div className="side">
        <MiniProfileComponent isProfile></MiniProfileComponent>
        <SuggestionsComponent
          suggestions={Array(5).fill({})}
        ></SuggestionsComponent>
        <FooterComponent></FooterComponent>
      </div>
    </main>
  );
}
