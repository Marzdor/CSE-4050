import { combineReducers } from "redux";
import synthReducer from "./reducers/synth";

const rootReducer = combineReducers({
  synth: synthReducer,
});

export default rootReducer;
