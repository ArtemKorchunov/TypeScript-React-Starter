import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IStoreState } from "../../types/index";

import rootReducer from "../reducers";

export default function configureStore() {
  const store = createStore<IStoreState, any, any, any>(
    rootReducer,
    {
      todo: {
        count: 1
      }
    },
    composeWithDevTools(applyMiddleware())
  );
  return store;
}
