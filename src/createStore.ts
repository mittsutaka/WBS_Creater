import { createStore as reduxCreateStore, combineReducers, compose,applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as reducers from "./reducers/Index";

export type AppState = {};

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStore = () => {
  const store = reduxCreateStore(
    combineReducers<AppState>({
      ...reducers,

    }),
    composeReduxDevToolsEnhancers(
      applyMiddleware(thunkMiddleware)
    ),
  );
  return store;
};

export default createStore;
