import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.css";

function Header() {
  const { authenticated } = useSelector((state) => ({
    authenticated: state.auth.authenticated,
  }));
  const renderLinks = () => {
    if (authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </div>
  );
}

export default Header;
