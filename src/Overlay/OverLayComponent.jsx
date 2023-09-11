import "./Overlay.css";
import { OverlayContext } from "../contexts/OverlayContext";
import { useState } from "react";

function OverlayComponent({ children }) {
  const [overlayComponent, setOverlayComponent] = useState(null);
  const [isShown, setShown] = useState(false);

  return (
    <OverlayContext.Provider
      value={{
        overlayComponent,
        setOverlayComponent: (node) => {
          setOverlayComponent(node);
          setShown(true);
        },
        active: isShown,
        close: () => setShown(false),
        open: () => setShown(true),
      }}
    >
      {isShown && (
        <div id="Overlay" className="">
          <button className="Overlay-Close" onClick={() => setShown(false)}>
            Close
          </button>
          <div className="Overlay-Content">{overlayComponent}</div>
        </div>
      )}
      {children}
    </OverlayContext.Provider>
  );
}

export default OverlayComponent;
