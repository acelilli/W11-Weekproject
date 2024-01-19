import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import SpotifyNav from "./components/SpotifyNav";
// import HomePage from "./components/Homepage";
// import SearchPage from "./components/SearchPage";
import PlayerFooter from "./components/PlayerFooter";
import HomePage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SpotifyNav />
        <Container fluid>
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
