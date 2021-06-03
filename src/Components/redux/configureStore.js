import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const componseEnchancers =
    window.__REDUX_DEVTOOLS_EXTESINONS_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    componseEnchancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
