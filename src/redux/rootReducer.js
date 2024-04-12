import { combineReducers } from "redux";
import { characterReducer } from "./character/characterReducer";
import { eventReducer } from "./events/eventReducer";
import { listReducer } from "./midarea/list";

// Combine reducers to create the root reducer
export const rootReducer = combineReducers({
  character: characterReducer, // Reducer for managing character-related state
  list: listReducer, // Reducer for managing lists in the midarea
  event: eventReducer, // Reducer for managing event-related state
});
