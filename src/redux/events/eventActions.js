import { SET_REPEAT, SET_WAIT } from "./eventTypes";

// Action creator for setting the repeat value
export const setRepeat = (repeat_val) => {
  return {
    type: SET_REPEAT, // Action type indicating setting repeat value
    value: repeat_val, // Value to set for repeat
  };
};

// Action creator for setting the wait value
export const setWait = (wait_val) => {
  return {
    type: SET_WAIT, // Action type indicating setting wait value
    value: wait_val, // Value to set for wait
  };
};
