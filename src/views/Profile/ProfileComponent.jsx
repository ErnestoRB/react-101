import { PostsGrid } from "../../Posts/Grid/PostsGridComponent";
import UserImageComponent from "../../User/UserImageComponent";
import useMe from "../../hooks/useMe";
import "./Profile.css";

export default function ProfileComponent() {
  const { me } = useMe();

  return (
    <div className="MainProfile">
      {me && (
        <>
          <div className="User-Info">
            <div className="Photo">
              <UserImageComponent
                src={me.author.picture.large}
                size={150}
              ></UserImageComponent>
            </div>
            <div className="Text">
              <div className="Name">
                <p>{me.author.username}</p>
                <div className="Buttons">
                  <button className="editProfile">
                    <b>Editar perfil</b>
                  </button>
                  <button className="editProfile">
                    <b>Ver archivo</b>
                  </button>
                  <a href="">
                    <span className="material-symbols-outlined">settings</span>
                  </a>
                </div>
              </div>
              <div className="User-Stats">
                <p>
                  <b>{me.posts.length}</b> publicaciones
                </p>
                <p>
                  <b>{0}</b> seguidores
                </p>
                <p>
                  <b>{0}</b> seguidos
                </p>
              </div>
              <div className="userBio">
                <h4>{me.author.name}</h4>
                <p>Bio example.</p>
              </div>
            </div>
          </div>
          <div className="highlights"></div>
          <PostsGrid posts={me.posts}></PostsGrid>
        </>
      )}
    </div>
  );
}
