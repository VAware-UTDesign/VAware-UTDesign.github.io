import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import BLEReducer from "../reducer/BLEReducer";

export const store = createStore(BLEReducer, applyMiddleware(thunk));
