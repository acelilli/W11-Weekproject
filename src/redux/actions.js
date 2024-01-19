// imposta ccanzoni a livello globale dell'app
export const SET_SONGS = "SET_SONGS";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

export const setSongs = (songs) => ({
  type: "SET_SONGS",
  payload: songs,
});
// Imposta i risultati di ricerca
export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

// per non riscrivere tutto
const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?`;
const headers = {
  "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  "X-RapidAPI-Key": "471ff49a98msh5df16362fd8a7f8p147fa7jsnd5cd156653d6",
};

// recupera le canzoni di un artista
export const fetchSongs = (artistName) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${endpoint}q=${artistName}`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const jsonData = await response.json();
        const { data } = jsonData; // Verifica la struttura dell'oggetto JSON
        dispatch(setSongs(data.slice(0, 4)));
      } else {
        throw new Error(`Error in fetching songs. Status: ${response.status}`);
      }
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
  };
};

// Ricerca di canzoni dalla searchQuery(form)
export const searchSongs = (searchQuery) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${endpoint}q=${searchQuery}`, {
        method: "GET",
        headers: headers,
      });

      if (response.ok) {
        const { data } = await response.json();
        dispatch(setSearchResults(data));
      } else {
        throw new Error("Errorr recupero dati di ricerca");
      }
    } catch (err) {
      console.log("error:", err);
    }
  };
};
