import "./Suggestions.css";
import MiniProfileComponent from "./MiniProfileComponent";

export default function SuggestionsComponent({ suggestions = [] }) {
  return (
    <div className="Suggestions">
        <div className="showAll">
            <p className="title">Sugerencias para ti</p>
            <a href="" className="viewAll">Ver todo</a>
        </div>
        <div className="accounts">
            {suggestions.map((account) => (
            <MiniProfileComponent></MiniProfileComponent>
            ))}
        </div>
    </div>
  );
}
