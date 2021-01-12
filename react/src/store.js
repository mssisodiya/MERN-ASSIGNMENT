import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import ReduxThunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
