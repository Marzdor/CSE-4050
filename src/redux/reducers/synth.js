import { createReducer } from "@reduxjs/toolkit";
import { synthActions } from "../actions/typeConstants";

const defaultState = {
  manager: null,
  settings: {},
};

const synthReducer = createReducer({ ...defaultState }, (builder) => {
  builder.addCase(synthActions.CREATE_MANAGER, (state, manager) => {
    if (state.manager === null) state.manager = manager;
  });
});

export default synthReducer;
