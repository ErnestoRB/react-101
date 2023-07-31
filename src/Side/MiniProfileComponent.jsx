import UserImageComponent from "../User/UserImageComponent";
import "./MiniProfile.css";

export default function MiniProfileComponent({
  user = {
    name: "Ernesto Ramírez",
    username: "ernestorb",
    url: "https://avatars.githubusercontent.com/u/55329286?v=4",
  },
}) {
  return (
    <div className="MiniProfile">
      <div className="image">
        <UserImageComponent src={user.url} size={40} />
      </div>
      <div className="name">
        <b>{user.name}</b>
        <span className="username">{user.username}</span>
      </div>
      <div className="actions">
        <a href="#" className="blue-link">
          Cambiar
        </a>
      </div>
    </div>
  );
}
