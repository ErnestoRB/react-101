import UserImageComponent from "../User/UserImageComponent";
import useStories from "../hooks/useStories";
import "./MiniProfile.css";
import useMe from "../hooks/useMe";

export default function MiniProfileComponent({
  suggestions = [],
  isProfile = false,
}) {
  const { stories } = useStories();
  const users = stories.map((story) => story.author.username);
  const getRandomIndex = () => Math.floor(Math.random() * users.length);
  const { me } = useMe();

  return (
    <div className="MiniProfile">
      {me && (
        <>
          <div className="image">
            <UserImageComponent
              src={isProfile ? me.author.picture.thumbnail : suggestions.picture.thumbnail}
              size={40}
            />
          </div>
          <div className="name">
            <b>{isProfile ? me.author.name : suggestions.name}</b>
            <span className="username">
              {isProfile
                ? me.author.username
                : users[getRandomIndex()] + " sigue esta cuenta"}
            </span>
          </div>
          <div className="actions">
            <a href={isProfile ? "profile" : "#"} className="blue-link">
              {isProfile ? "Cambiar" : "Seguir"}
            </a>
          </div>
        </>
      )}
    </div>
  );
}
