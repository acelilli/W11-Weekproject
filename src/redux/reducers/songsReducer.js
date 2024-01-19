// songsReducer.js
const initialState = {
  songs: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SONGS":
      return { ...state, songs: action.payload };
    default:
      return state;
  }
};

export default songsReducer;
