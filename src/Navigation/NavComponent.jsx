import NavItemComponent from "./NavItemComponent";
import "./Nav.css";
import DropdownComponent from "./DropdownComponent";
import IconComponent from "../IconComponent";

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
  {
    icono: "movie",
    descripcion: "Reels",
  },
  {
    icono: "mail",
    descripcion: "Mensajes",
  },
  {
    icono: "favorite",
    descripcion: "Notificaciones",
  },
  {
    icono: "add_box",
    descripcion: "Crear",
  },
  {
    icono: "account_circle",
    descripcion: "Perfil",
  },
];

const dropdownItems = [
  {
    icono: "settings",
    descripcion: "Configuracion",
  },
  {
    icono: "history",
    descripcion: "Tu actividad",
  },
  {
    icono: "bookmark",
    descripcion: "Guardado",
  },
  {
    icono: "light_mode",
    descripcion: "Cambiar apariencia",
  },
  {
    icono: "bug_report",
    descripcion: "Reportar un problema",
  },
  {
    icono: "",
    descripcion: "Cambiar de cuenta",
  },
  {
    icono: "",
    descripcion: "Salir",
  },
];

export default function NavComponent() {
  return (
    <nav className="Nav">
      <div className="Title">
        <span>Reactagram</span>
        <IconComponent icono="camera"></IconComponent>
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
