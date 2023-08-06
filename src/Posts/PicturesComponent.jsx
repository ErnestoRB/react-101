import { useRef, useState } from "react";
import "./Picture.css";
import IconComponent from "../IconComponent";
import { API_URL } from "../utils/api";

export default function PicturesComponent({ pictures = [] }) {
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);

  return (
    <div className="Pictures">
      <div
        className="Picture"
        ref={containerRef}
        style={{ transform: `translateX(-${page}00%)` }}
      >
        {pictures.map((pic, i) => {
          return <img key={pic} src={`${API_URL}${pic}`} alt="picture"></img>;
        })}
      </div>
      {page > 0 && (
        <button
          className="Picture-Left-Button"
          onClick={() => {
            setPage((p) => p - 1);
          }}
        >
          <IconComponent icono="arrow_circle_left"></IconComponent>
        </button>
      )}
      {page < pictures.length - 1 && (
        <button
          className="Picture-Right-Button"
          onClick={() => {
            setPage((p) => p + 1);
          }}
        >
          <IconComponent icono="arrow_circle_right"></IconComponent>
        </button>
      )}

      <div className="Picture-Dots">
        {pictures.map((pic, i) => (
          <button
            className={`Picture-Dot ${i == page ? "Picture-Dot-Active" : ""}`}
            key={pic}
            onClick={() => {
              setPage(i);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
