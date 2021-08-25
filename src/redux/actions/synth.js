import { percentToDecimal } from "../../helperFunctions/mathHelper";
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

export const changeMasterVolume = (value) => (dispatch, getState) => {
  dispatch({ type: synthActions.SET_MASTER_VOLUME, value });
  const masterVolume = getState().synth.masterVolume;
  masterVolume.gain.value = percentToDecimal(value);
};

export const changeAttackValue = (value) => ({
  type: synthActions.SET_ATTACK_VALUE,
  value: percentToDecimal(value),
});

export const changeSustainLevel = (value) => ({
  type: synthActions.SET_SUSTAIN_LEVEL,
  value: percentToDecimal(value),
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
  if (getState().synth.oscillator === null) {
    const audioManager = getState().synth.manager;
    const masterVolume = getState().synth.masterVolume;
    const oscillator = audioManager.createOscillator();
    oscillator.frequency.setValueAtTime(220, 0);
    oscillator.connect(masterVolume);

    dispatch({ type: synthActions.CREATE_OSCILLATOR, oscillator });
  }
};

export const playSoundOnce = () => (dispatch, getState) => {
  const audioManager = getState().synth.manager;
  const masterVolume = getState().synth.masterVolume;
  const settings = getState().synth.settings;

  const oscillator = audioManager.createOscillator();
  const noteGain = audioManager.createGain();

  noteGain.gain.setValueAtTime(0, 0);

  noteGain.gain.linearRampToValueAtTime(
    settings.sustainLevel,
    audioManager.currentTime + settings.attackTime
  );

  noteGain.gain.setValueAtTime(
    settings.sustainLevel,
    audioManager.currentTime + 1 - settings.releaseTime
  );
  noteGain.gain.linearRampToValueAtTime(0, audioManager.currentTime + 1);

  oscillator.type = settings.waveForm;
  oscillator.frequency.setValueAtTime(220, 0);
  oscillator.start(0);
  oscillator.stop(audioManager.currentTime + 1);
  oscillator.connect(noteGain);
  noteGain.connect(masterVolume);
};
