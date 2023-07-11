import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function requireAuth(WrappedComponent) {
  return (props) => {
    const { authenticated } = useSelector((state) => ({
      authenticated: state.auth.authenticated,
    }));
    const navigate = useNavigate();

    useEffect(() => {
      if (!authenticated) {
        navigate("/");
      }
    }, [authenticated]);

    return <WrappedComponent {...props} />;
  };
}

export default requireAuth;
