import { synthActions } from "./typeConstants";

export const createAudioContext = () => async (dispatch, getState) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  dispatch({ type: synthActions.CREATE_MANAGER, manager: new AudioContext() });
};
