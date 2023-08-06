import { useState } from "react";
import IconComponent from "../IconComponent";
import "./Dropdown.css";
import NavItemComponent from "./NavItemComponent";

export default function DropdownComponent({
  icono,
  descripcion,
  href = "",
  items = [],
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="Dropdown-Wrapper">
      <button
        className="Dropdown-Button"
        href={href}
        onClick={() => setOpen((open) => !open)}
      >
        {icono && <IconComponent icono={icono}></IconComponent>}
        <span className="Dropdown-Text">{descripcion}</span>
      </button>
      {open && (
        <div className="Dropdown">
          {items.map((item) => (
            <NavItemComponent
              icono={item.icono}
              descripcion={item.descripcion}
              key={item.descripcion}
            ></NavItemComponent>
          ))}
        </div>
      )}
    </div>
  );
}
