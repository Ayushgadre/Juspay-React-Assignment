// Importing action types
import { ADD_CHARACTER, SET_ACTIVE_CHARACTER, SET_ANGLE } from "./CharacterActionTypes";

// Action creator to set the angle of a character
export const setCharacterAngle = (characterAngle) => {
  return {
    type: SET_ANGLE, // Action type indicating setting the angle
    angle: characterAngle, // Angle value to be set
  };
};

// Action creator to set the active character
export const setActive = (character_id) => {
  return {
    type: SET_ACTIVE_CHARACTER, // Action type indicating setting the active character
    id: character_id, // ID of the character to be set as active
  };
};

// Action creator to add a new character
export const addCharacter = () => {
  return {
    type: ADD_CHARACTER, // Action type indicating adding a character
  };
};
