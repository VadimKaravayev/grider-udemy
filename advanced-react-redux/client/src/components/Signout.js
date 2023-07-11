import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signout } from "../store";

function Signout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(signout());
  }, [dispatch]);
  return <div>You are signed out</div>;
}

export default Signout;
