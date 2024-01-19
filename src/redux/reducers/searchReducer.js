// searchResultsReducer.js
import { SET_SEARCH_RESULTS } from "../actions";

const initialSearchState = {
  searchResults: [],
};
const searchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
