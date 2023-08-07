import UserImageComponent from "../User/UserImageComponent";
import useStories from "../hooks/useStories";
import "./MiniProfile.css";

export default function MiniProfileComponent({
  user = {
    name: "Iker Jimenez",
    username: "haitore",
    url: "https://avatars.githubusercontent.com/u/73982618?s=400&u=4f1efdef637aa747da92b42708abfe8843074df7&v=4",
  },
  suggestions = [],
  isProfile = false,
}) {
  const { stories } = useStories();
  const users = stories.map((story) => story.author.username);

  const getRandomIndex = () => Math.floor(Math.random() * users.length);

  return (
    <div className="MiniProfile">
      <div className="image">
        <UserImageComponent src={isProfile ? user.url : suggestions.picture.thumbnail} size={40} />
      </div>
      <div className="name">
        <b>{isProfile ? user.name : suggestions.name}</b>
        <span className="username">
          {isProfile ? user.username : users[getRandomIndex()] + " sigue esta cuenta"}
        </span>
      </div>
      <div className="actions">
        <a href="#" className="blue-link">
          {isProfile ? "Cambiar" : "Seguir"}
        </a>
      </div>
    </div>
  );
}
