import { SET_ACTIVE_CHARACTER, ADD_CHARACTER, SET_ANGLE } from "./actionTypes";

// Initial state for the character reducer
const initialState = {
  characters: [{ id: "sprite0", angle: 0 }], // Initial character with ID "sprite0" and angle 0
  active: "sprite0", // Initially active character is "sprite0"
};

// Reducer function for managing character-related actions
export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_CHARACTER:
      // Set the active character ID to the one provided in the action
      return {
        ...state,
        active: action.id,
      };

    case ADD_CHARACTER:
      // Add a new character to the characters array with a unique ID and angle 0
      let charactersArray = state.characters;
      charactersArray.push({
        id: `sprite${state.characters.length}`, // Generate unique ID based on current characters length
        angle: 0, // Set initial angle to 0
      });

      return {
        ...state,
        characters: charactersArray,
      };

    case SET_ANGLE:
      // Update the angle of the active character based on the action's angle
      let characters_Array = state.characters;
      let curr_character = characters_Array.find(
        (character) => character.id === state.active
      );
      const curr_character_index = characters_Array.findIndex(
        (character) => character.id === state.active
      );
      if (curr_character_index > -1) {
        curr_character.angle = action.angle; // Update angle of the current character
        characters_Array[curr_character_index] = curr_character; // Update character in the characters array
      }
      return {
        ...state,
        characters: characters_Array,
      };

    default:
      return state;
  }
};
