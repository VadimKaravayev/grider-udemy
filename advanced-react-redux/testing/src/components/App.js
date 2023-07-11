import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "../actions";

function App({ auth, changeAuth }) {
  const renderButton = () =>
    auth ? (
      <button onClick={() => changeAuth(false)}>Sign Out</button>
    ) : (
      <button onClick={() => changeAuth(true)}>Sign In</button>
    );

  const renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>{renderButton()}</li>
    </ul>
  );

  return (
    <div>
      {renderHeader()}

      <Routes>
        <Route path="/post" Component={CommentBox} />
        <Route path="/" Component={CommentList} />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
