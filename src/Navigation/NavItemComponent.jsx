import { Link } from "react-router-dom";
import IconComponent from "../IconComponent";
import "./NavItem.css";

export default function NavItemComponent({ icono, descripcion, href = "" }) {
  return (
    <Link className="Nav-Item" to={href}>
      {icono && <IconComponent icono={icono}></IconComponent>}
      <span className="Nav-Item-Text">{descripcion}</span>
    </Link>
  );
}
