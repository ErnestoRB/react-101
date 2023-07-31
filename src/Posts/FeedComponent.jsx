import "./Feed.css";
import PostComponent from "./PostComponent";

const posts = [
  {
    author: {
      name: "Ernesto Ramírez",
      username: "ernestorb",
      url: "https://avatars.githubusercontent.com/u/55329286?v=4",
    },
    date: new Date("2023-07-29"),
    images: [
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/202000/202119-Plaza-En-Aguascalientes.jpg",
      "https://foodandtravel.mx/wp-content/uploads/2022/12/Portada-Aguascalientes.jpg",
    ],
    description: "",
    comments: [
      {
        date: new Date(),
        author: {
          name: "Ernesto Ramírez",
          username: "ernestorb",
          url: "https://avatars.githubusercontent.com/u/55329286?v=4",
        },
        text: "Looking good, m8!",
      },
    ],
  },
];

export default function FeedComponent() {
  return (
    <div className="Feed">
      {posts.map((post) => (
        <PostComponent></PostComponent>
      ))}
    </div>
  );
}
