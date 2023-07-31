import CommentComponent from "./CommentComponent";

export default function CommentsComponent({
  comments = [
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
}) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentComponent comment={comment}></CommentComponent>
      ))}
    </div>
  );
}
