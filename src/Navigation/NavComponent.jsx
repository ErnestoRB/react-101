import NavItemComponent from "./NavItemComponent";
import "./Nav.css";
import DropdownComponent from "./DropdownComponent";

const routes = [
  {
    icono: "home",
    descripcion: "Inicio",
  },
  {
    icono: "search",
    descripcion: "Buscar",
  },
  {
    icono: "explore",
    descripcion: "Explorar",
  },
];

const dropdownItems = [
  {
    icono: "home",
    descripcion: "Inicio",
  },
  {
    icono: "search",
    descripcion: "Buscar",
  },
  {
    icono: "explore",
    descripcion: "Explorar",
  },
];

export default function NavComponent() {
  return (
    <nav className="Nav">
      <div className="Title">
        <NavItemComponent descripcion="Reactagram"></NavItemComponent>
      </div>
      <div className="Routes">
        {routes.map((item) => (
          <NavItemComponent
            icono={item.icono}
            descripcion={item.descripcion}
          ></NavItemComponent>
        ))}
      </div>
      <div className="More">
        <DropdownComponent
          descripcion="Más"
          icono="menu"
          items={dropdownItems}
        ></DropdownComponent>
      </div>
    </nav>
  );
}
