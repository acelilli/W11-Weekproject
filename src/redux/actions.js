// imposta ccanzoni a livello globale dell'app
export const setSongs = (songs) => ({
  type: "SET_SONGS",
  payload: songs,
});
// Imposta i risultati di ricerc
export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});
// recupera le canzoni di un artista
export const fetchSongs = (artistName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });

      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSongs(data.slice(0, 4)));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
// Ricerca di canzoni dalla searchQuery(form)
export const searchSongs = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const { data } = result;
        dispatch(setSearchResults(data));
        console.log(result.data);
      } else {
        throw new Error("Error in search");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
