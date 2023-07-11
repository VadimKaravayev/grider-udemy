import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeEmail,
  changePassword,
  useSignupMutation,
  authUser,
  authError,
} from "../store";

function Signup() {
  const { email, password, errorMessage } = useSelector((state) => ({
    email: state.form.email,
    password: state.form.password,
    errorMessage: state.auth.errorMessage,
  }));
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await signup({ email, password }).unwrap();
      console.log(data);
      dispatch(authUser(data));
      localStorage.setItem("token", data.token);
      dispatch(changeEmail(""));
      dispatch(changePassword(""));
      navigate("/feature");
    } catch (e) {
      console.log(e);
      dispatch(authError(e?.data?.error));
    }
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email-input">Email</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </fieldset>
      {errorMessage && <div>{errorMessage}</div>}
      <button>Sign Up</button>
    </form>
  );
}

export default Signup;
