import { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "./requireAuth";
import { useNavigate } from "react-router-dom";

function CommentBox({ saveComment, fetchComments, auth }) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    saveComment(comment);
    setComment("");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
}

export default connect(null, actions)(requireAuth(CommentBox));
