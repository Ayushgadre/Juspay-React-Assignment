import { SET_LIST, ADD_LIST, SET_ACTIVE_BLOCK, DELETE_BLOCK } from "./types";

// Action creator to update a list with a new list
export const updateList = (id, new_list) => {
  return {
    type: SET_LIST,
    list: new_list,
    id: id,
  };
};

// Action creator to set the active block
export const setActive = (id) => {
  return {
    type: SET_ACTIVE_BLOCK,
    id: id,
  };
};

// Action creator to delete a block by its ID
export const deleteBlock = (id) => {
  return {
    type: DELETE_BLOCK,
    id: id,
  };
};

// Action creator to add a new list
export const addList = () => {
  return {
    type: ADD_LIST,
  };
};
