import { synthActions } from "./typeConstants";

export const initSynth = () => async (dispatch, getState) => {
  dispatch(createAudioManager());
  dispatch(createMasterVolume());
  dispatch(createOscillator());
};

export const playSound = () => (dispatch, getState) => {};

export const stopSound = () => (dispatch, getState) => {};

export const setWaveForm = (waveForm) => ({
  type: synthActions.SET_WAVE_FORM,
  waveForm,
});

const createAudioManager = () => async (dispatch, getState) => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();
  dispatch({ type: synthActions.CREATE_MANAGER, manager: context });
};

const createMasterVolume = () => async (dispatch, getState) => {
  const audioManager = getState().synth.manager;
  const masterVolume = audioManager.createGain();
  masterVolume.connect(audioManager.destination);
  dispatch({ type: synthActions.CREATE_MASTER_VOLUME, masterVolume });
};

const createOscillator = () => async (dispatch, getState) => {
  const audioManager = getState().synth.manager;
  const masterVolume = getState().synth.masterVolume;
  const oscillator = audioManager.createOscillator();
  oscillator.frequency.setValueAtTime(220, 0);
  oscillator.connect(masterVolume);

  dispatch({ type: synthActions.CREATE_OSCILLATOR, oscillator });
};
