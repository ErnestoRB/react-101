import FooterComponent from "../../Side/FooterComponent";
import "./Error.css";

export default function ErrorComponent() {
  return (
    <div className="Error">
      <div className="Error-Message">
        <h2>Esta página no está disponible</h2>
        <p>
          Es posible que hayas seleccionado contenido que ya no está disponible
          en Reactagram
        </p>
      </div>
      <div className="Error-Footer">
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}
