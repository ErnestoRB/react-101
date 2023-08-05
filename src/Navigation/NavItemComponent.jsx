import IconComponent from "../IconComponent";
import "./NavItem.css";

export default function NavItemComponent({ icono, descripcion, href = "" }) {
  return (
    <a className="Nav-Item" href={href}>
      {icono && <IconComponent icono={icono}></IconComponent>}
      <span className="Nav-Item-Text">{descripcion}</span>
    </a>
  );
}
