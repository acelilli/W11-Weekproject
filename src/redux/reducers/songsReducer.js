// songsReducer.js
import { SET_SONGS } from "../actions";

const initialSongState = {
  songs: [],
};

const songReducer = (state = initialSongState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: action.payload,
      };
    default:
      return state;
  }
};
export default songReducer;
