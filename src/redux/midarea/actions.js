import { SET_LIST, ADD_LIST, SET_ACTIVE_BLOCK, DELETE_BLOCK } from "./types";

export const updateList = (id, new_list) => {
  return {
    type: SET_LIST,
    list: new_list,
    id: id,
  };
};
export const setActive = (id) => {
  // console.log("insoe-",id)
  return {
    type: SET_ACTIVE_BLOCK,
    id: id,
  };
};

export const deleteBlock=(id)=>{
  return {
    type: DELETE_BLOCK,
    id:id
  };
}

export const addList = () => {
  return {
    type: ADD_LIST,
  };
};
