import "./Suggestions.css";
import MiniProfileComponent from "./MiniProfileComponent";
import useSuggestions from "../hooks/useSuggestions";

export default function SuggestionsComponent() {
  const  { suggestions } = useSuggestions();

  return (
    <div className="Suggestions">
        <div className="showAll">
            <p className="title">Sugerencias para ti</p>
            <a href="" className="viewAll">Ver todo</a>
        </div>
        <div className="accounts">
            {suggestions.map((suggestions, i) => (
            <MiniProfileComponent suggestions={suggestions} key={i}></MiniProfileComponent>
            ))}
        </div>
    </div>
  );
}
