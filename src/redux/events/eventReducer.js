import { SET_REPEAT, SET_WAIT } from "./eventTypes";

// Define initial state for event related data
const initialState = {
  repeat: {}, // Object to store repeat values
  wait: {}, // Object to store wait values
};

// Reducer function for handling event related actions
export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPEAT:
      // Update the repeat value in the state
      return {
        ...state,
        repeat: action.value, // Set the new repeat value
      };

    case SET_WAIT:
      // Update the wait value in the state
      return {
        ...state,
        wait: action.value, // Set the new wait value
      };

    default:
      return state; // Return the current state for unrecognized actions
  }
};
