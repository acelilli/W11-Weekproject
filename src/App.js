import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import SpotifyNav from "./components/SpotifyNav";
// // import SearchPage from "./components/SearchPage";
// import PlayerFooter from "./components/PlayerFooter";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SpotifyNav />
        <Container fluid className="flex-grow-1 bg-secondary text-white px-4 py-2">
          <HomePage />
          {/* <Routes>
          </Routes>
          <PlayerFooter /> */}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
