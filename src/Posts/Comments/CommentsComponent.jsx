import CommentComponent from "./CommentComponent";

export default function CommentsComponent({ comments = [] }) {
  return (
    <div>
      {comments.map((comment, i) => (
        <CommentComponent key={i} comment={comment}></CommentComponent>
      ))}
    </div>
  );
}
