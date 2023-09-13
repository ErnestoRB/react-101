import FeedComponent from "../../Posts/FeedComponent";
import MiniProfileComponent from "../../Side/MiniProfileComponent";
import StoriesComponent from "../../Stories/StoriesComponent";
import SuggestionsComponent from "../../Side/SuggestionsComponent";
import FooterComponent from "../../Side/FooterComponent";
import "./Home.css";

export default function MainComponent() {
  return (
    <div className="Home-Grid">
      <div className="content">
        <StoriesComponent></StoriesComponent>
        <FeedComponent></FeedComponent>
        <FooterComponent></FooterComponent>
      </div>
      <div className="side">
        <MiniProfileComponent isProfile></MiniProfileComponent>
        <SuggestionsComponent></SuggestionsComponent>
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}
