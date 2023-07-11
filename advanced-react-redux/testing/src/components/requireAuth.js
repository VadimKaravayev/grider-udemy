import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function requireAuth(WrappedComponent) {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.auth) {
        console.log("I need to leave");
        navigate("/");
      }
    }, [props.auth]);
    return <WrappedComponent {...props} />;
  };

  const mapStateToProps = (state) => ({ auth: state.auth });

  return connect(mapStateToProps)(ComposedComponent);
}

export default requireAuth;
