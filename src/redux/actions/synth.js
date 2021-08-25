import { percentToDecimal } from "../../helperFunctions/mathHelper";
import { synthActions } from "./typeConstants";

export const initSynth = () => async (dispatch, getState) => {
  dispatch(createAudioManager());
  dispatch(createMasterVolume());
  dispatch(createDelay());
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
export const changeDelayAmount = (value) => (dispatch, getState) => {
  dispatch({ type: synthActions.SET_DELAY_AMOUNT, value });
  const delayAmountGain = getState().synth.delayAmountGain;
  delayAmountGain.value = value;
};

export const changeDelayTime = (value) => (dispatch, getState) => {
  dispatch({ type: synthActions.SET_DELAY_TIME, value });
  const delay = getState().synth.delay;
  delay.delayTime.value = value;
};

export const changeFeedback = (value) => (dispatch, getState) => {
  dispatch({ type: synthActions.SET_FEEDBACK, value });
  const feedback = getState().synth.feedback;
  feedback.gain.value = value;
};

export const changeAttackValue = (value) => ({
  type: synthActions.SET_ATTACK_VALUE,
  value,
});

export const changeReleaseValue = (value) => ({
  type: synthActions.SET_RELEASE_TIME,
  value,
});

export const changeSustainLevel = (value) => ({
  type: synthActions.SET_SUSTAIN_LEVEL,
  value,
});

export const changeNoteLength = (value) => ({
  type: synthActions.SET_NOTE_LENGTH,
  value: value,
});

export const changeVibratoAmount = (value) => ({
  type: synthActions.SET_VIBRATO_AMOUNT,
  value: value,
});

export const changeVibratoTime = (value) => ({
  type: synthActions.SET_VIBRATO_TIME,
  value: value,
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

const createDelay = () => async (dispatch, getState) => {
  const audioManager = getState().synth.manager;
  const masterVolume = audioManager.createGain();

  const delay = audioManager.createDelay();
  const feedback = audioManager.createGain();
  const delayAmountGain = audioManager.createGain();

  delayAmountGain.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(masterVolume);

  dispatch({
    type: synthActions.SET_DELAY_MANAGERS,
    managers: { delay, feedback, delayAmountGain },
  });
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

export const playSoundOnce = (noteValue) => (dispatch, getState) => {
  const audioManager = getState().synth.manager;
  const masterVolume = getState().synth.masterVolume;
  const settings = getState().synth.settings;
  const delay = getState().synth.delay;

  const osc = audioManager.createOscillator();
  const noteGain = audioManager.createGain();

  noteGain.gain.setValueAtTime(0, 0);
  noteGain.gain.linearRampToValueAtTime(
    settings.sustainLevel,
    audioManager.currentTime + settings.noteLength * settings.attackTime
  );
  noteGain.gain.setValueAtTime(
    settings.sustainLevel,
    audioManager.currentTime +
      settings.noteLength -
      settings.noteLength * settings.releaseTime
  );
  noteGain.gain.linearRampToValueAtTime(
    0,
    audioManager.currentTime + settings.noteLength
  );

  const lfoGain = audioManager.createGain();
  lfoGain.gain.setValueAtTime(settings.vibratoAmount, 0);
  lfoGain.connect(osc.frequency);

  const lfo = audioManager.createOscillator();
  lfo.frequency.setValueAtTime(settings.vibratoTime, 0);
  lfo.start(0);
  lfo.stop(audioManager.currentTime + settings.noteLength);
  lfo.connect(lfoGain);

  osc.type = settings.waveForm;
  osc.frequency.setValueAtTime(noteValue, 0);
  osc.start(0);
  osc.stop(audioManager.currentTime + settings.noteLength);
  osc.connect(noteGain);

  noteGain.connect(masterVolume);
  noteGain.connect(delay);
};
