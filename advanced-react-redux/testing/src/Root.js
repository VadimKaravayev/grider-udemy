import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";
import reducers from "./reducers";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";

function Root({ children, initialState = {} }) {
  const store = createStore(
    reducers,
    initialState,
    // applyMiddleware(reduxPromise)
    applyMiddleware(async, stateValidator)
  );
  return <Provider store={store}>{children}</Provider>;
}

export default Root;
