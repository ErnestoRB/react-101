import IconComponent from "../IconComponent";
import "./Actions.css";

export default function ActionsComponent({ post }) {
  return (
    <div className="Post-Actions">
      <div className="first">
        <IconComponent icono="favorite"></IconComponent>
        <IconComponent icono="mode_comment"></IconComponent>
        <IconComponent icono="send"></IconComponent>
      </div>
      <div className="second">
        <IconComponent icono="bookmark"></IconComponent>
      </div>
    </div>
  );
}
