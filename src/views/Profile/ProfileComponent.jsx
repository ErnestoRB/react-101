import StoryComponent from "../../Stories/StoryComponent";
import UserImageComponent from "../../User/UserImageComponent";
import useMe from "../../hooks/useMe";
import "./Profile.css";

export default function ProfileComponent() {
  const { me } = useMe();

  return (
    <div className="MainProfile">
      {me && (
        <>
          <div className="display">
            <div className="firstSec">
              <UserImageComponent
                src={me.author.picture.large}
                size={150}
              ></UserImageComponent>
            </div>
            <div className="secondSec">
              <div className="nameOptions">
                <p>{me.author.username}</p>
                <div className="buttons">
                  <button className="editProfile">Editar perfil</button>
                  <button className="editProfile">Ver archivo</button>
                </div>
                <a href=""><span class="material-symbols-outlined">settings</span></a>
              </div>
              <div className="userData">
                <p>publicaciones</p>
                <p>seguidores</p>
                <p>seguidos</p>
              </div>
              <div className="userBio">
                <h4>{me.author.name}</h4>
                <p>Bio example.</p>
              </div>
            </div>
          </div>
          <div className="highlights">
          </div>
        </>
      )}
    </div>
  );
}
