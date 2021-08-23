import { synthActions } from "./typeConstants";

export const initSynth = () => async (dispatch, getState) => {
  dispatch(createAudioManager());
  dispatch(createMasterVolume());
};

export const playSound = () => (dispatch, getState) => {
  dispatch({ type: synthActions.PLAY });

  dispatch(createOscillator());

  const oscillator = getState().synth.oscillator;
  oscillator.start(0);
  oscillator.type = getState().synth.settings.waveForm;
};

export const stopSound = () => (dispatch, getState) => {
  dispatch({ type: synthActions.STOP });
  const oscillator = getState().synth.oscillator;
  oscillator.stop(0);
  dispatch({ type: synthActions.DELETE_OSCILLATOR });
};

export const setWaveForm = (waveForm) => (dispatch, getState) => {
  dispatch({ type: synthActions.SET_WAVE_FORM, waveForm });
  const isPlaying = getState().synth.state.isPlaying;
  if (isPlaying) {
    dispatch(stopSound());
    dispatch(playSound());
  }
};

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
  if (getState().synth.oscillator === null) {
    const audioManager = getState().synth.manager;
    const masterVolume = getState().synth.masterVolume;
    const oscillator = audioManager.createOscillator();
    oscillator.frequency.setValueAtTime(220, 0);
    oscillator.connect(masterVolume);

    dispatch({ type: synthActions.CREATE_OSCILLATOR, oscillator });
  }
};
