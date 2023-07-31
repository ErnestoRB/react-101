import "./UserImage.css";

export default function UserImageComponent({ src, size = 64, rounded = true }) {
  return (
    <img
      className={`User-Image ${rounded ? "rounded" : ""}`}
      src={src}
      alt=""
      width={size}
      style={{ width: size, height: size }}
    />
  );
}
